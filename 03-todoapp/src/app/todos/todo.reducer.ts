import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { createTodo } from './todo.actions';

export const initialState: Todo[]= [
  new Todo("save the world"),
  new Todo("save the world1"),
  new Todo("save the world2"),
  new Todo("save the world3"),

];

const _toDoReducer = createReducer(
  initialState,
  on(createTodo, (state, {text}) => [...state, new Todo(text)]),
);

export function toDoReducer(state: any, action: Action) {
  return _toDoReducer(state, action);
}
