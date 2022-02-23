import { createAction, props } from '@ngrx/store';

export const createTodo = createAction(
  '[TODO] Create Tod',
  props<{text: string}>()
);

export const toggleTodo = createAction(
  '[TODO] Toggle Todo',
  props<{id: number}>()
);

export const editTodo = createAction(
  '[TODO] Edit Todo',
  props<{id: number, text: string}>()
);

export const deleteTodo = createAction(
  '[TODO] Delete Todo',
  props<{id: number}>()
);

export const toggleAllTodo = createAction(
  '[TODO] Toggle All Todo',
  props<{completed: boolean}>()
);

export const clearCompleted = createAction(
  '[TODO] Clear completed task',
);


