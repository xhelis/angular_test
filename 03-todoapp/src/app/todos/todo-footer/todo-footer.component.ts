import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-reducer';
import * as actions from '../../filter/filter.actions';
import { Todo } from '../models/todo.model';
import { clearCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  filterActual: actions.filtresValided = 'All';
  filters:actions.filtresValided[] = ['All', 'Completed', 'Pending'];
  pendings: number = 0;
  listToDo: Todo[] = [];

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe( state =>{
      this.filterActual = state.filter;
      this.listToDo = state.todos;
      this.pendings = state.todos.filter(value => !value.completed).length;
    });
  }
  changeFilter(filter: actions.filtresValided){
    this.store.dispatch(actions.setFilter({filter: filter}));
  }

  clearCompleted(){
    this.store.dispatch(clearCompleted());
  }
}
