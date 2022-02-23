import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app-reducer';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = new Todo("");
  @ViewChild('inputFisic') txtInputFisic: ElementRef = new ElementRef('');
  todoItem: Todo;
  chkCompleted: FormControl = new FormControl;
  txtInput: FormControl = new FormControl;
  editing: boolean = false;

  constructor(private store:Store<AppState>) {
    this.todo = new Todo("");
    this.todoItem = this.todo;
   }

  ngOnInit(): void {
    // console.log("todo item", JSON.stringify(this.todo));
    // console.log("todo ngOnInit", JSON.stringify(this.todoItem));
    // this.todo.completed = true;
    this.mapTodo()
    this.chkCompleted = new FormControl(this.todoItem.completed);
    this.txtInput = new FormControl(this.todoItem.text, Validators.required);

    this.chkCompleted.valueChanges.subscribe( value => {
      this.store.dispatch(actions.toggleTodo({id: this.todoItem.id}))
    });
  }
  mapTodo(){
    this.todoItem.completed = this.todo.completed;
    this.todoItem.id = this.todo.id;
    this.todoItem.text = this.todo.text;
  }

  edit(){
    this.editing = true;
    setTimeout(() =>{
      this.txtInputFisic.nativeElement.select();
    }, 1)

  }
  endEdition(){
    this.editing = false;
    this.txtInput.setValue(this.todoItem.text);
    if(this.txtInput.invalid){return;}

    if(this.txtInput.value === this.todo.text){return;}

    this.store.dispatch(actions.editTodo(
      {id: this.todoItem.id, text: this.todoItem.text}));
  }

  deleteTodo(){
    this.store.dispatch(actions.deleteTodo({id: this.todoItem.id}));
  }

}
