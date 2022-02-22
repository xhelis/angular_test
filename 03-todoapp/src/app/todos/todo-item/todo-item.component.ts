import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app-reducer';
import { Todo } from '../models/todo.model';

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

  constructor() {
    this.todo = new Todo("");
    this.todoItem = this.todo;
   }

  ngOnInit(): void {
    // console.log("todo item", JSON.stringify(this.todo));
    this.todoItem.completed = this.todo.completed;
    this.todoItem.id = this.todo.id;
    this.todoItem.text = this.todo.text;
    // console.log("todo ngOnInit", JSON.stringify(this.todoItem));
    // this.todo.completed = true;
    this.chkCompleted = new FormControl(this.todoItem.completed);
    this.txtInput = new FormControl(this.todoItem.text, Validators.required);

  }

  edit(){
    this.editing = true;
    setTimeout(() =>{
      this.txtInputFisic.nativeElement.select();
    }, 1)

  }
  endEdition(){
    this.editing = false;
  }

}
