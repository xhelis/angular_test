import { createAction, props } from '@ngrx/store';
import { Todo } from '../todos/models/todo.model';

export type filtresValided = "All" | "Completed" | "Pending";

export const setFilter = createAction(
  '[Filter] Set Filter',
  props<{filter: filtresValided}>()
);

