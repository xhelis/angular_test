import { createAction, props } from '@ngrx/store';

export const createTodo = createAction(
  '[TODO] Create Tod',
  props<{text: string}>()
);
