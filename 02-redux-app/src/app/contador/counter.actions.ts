import { createAction, props } from '@ngrx/store';

export const increase = createAction('[Counter] Increase');
export const decrease = createAction('[Counter] Decrease');
export const multiply = createAction(
  '[Counter] Multiply',
  props<{num: number}>()
  );
export const divide = createAction(
  '[Counter] Divide',
  props<{num: number}>()
  );
export const reset = createAction('[Counter] Reset');
