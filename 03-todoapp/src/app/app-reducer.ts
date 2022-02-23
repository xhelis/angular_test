import { ActionReducerMap } from "@ngrx/store";
import { filtresValided } from "./filter/filter.actions";
import { filterReducer } from "./filter/filter.reducer";
import { Todo } from "./todos/models/todo.model";
import { toDoReducer } from "./todos/todo.reducer";

export interface AppState {
  todos:Todo[];
  filter: filtresValided;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: toDoReducer,
  filter: filterReducer
}
