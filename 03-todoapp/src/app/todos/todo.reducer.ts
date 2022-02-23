import { Action, createReducer, on } from '@ngrx/store';
import { filter } from 'rxjs';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const initialState: Todo[]= [
  new Todo("save the world"),
  new Todo("save the world1"),
  new Todo("save the world2"),
  new Todo("save the world3"),

];

const _toDoReducer = createReducer(
  initialState,
  on(actions.createTodo, (state, {text}) => [...state, new Todo(text)]),
  on(actions.toggleTodo, (state, {id}) =>{
    return state.map(todo =>{
      if(todo.id === id){
        return {
          ...todo,
          completed: !todo.completed,
        }
      }else{
        return todo;
      }
    });
  }),
  on(actions.editTodo, (state, {id, text}) =>{
    return state.map(todo =>{
      if(todo.id === id){
        return {
          ...todo,
          text: text,
        }
      }else{
        return todo;
      }
    });
  }),
  on(actions.deleteTodo, (state, {id}) =>
  state.filter((obj) => obj.id !== id)),
  on(actions.toggleAllTodo, (state, {completed}) =>{
    return state.map(todo =>{
        return {
          ...todo,
          completed: completed,
        }
    });
  }),
  on(actions.clearCompleted, (state) => {
    console.log("todo reducer: ", state);
    return state.filter(todo => !todo.completed);
  }),
);

export function toDoReducer(state: any, action: Action) {
  return _toDoReducer(state, action);
}
