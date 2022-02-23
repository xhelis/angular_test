import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from '../todos/models/todo.model';
import * as actions from './filter.actions';

export const initialState: actions.filtresValided = 'All';

const _filterReducer = createReducer(
initialState,
on(actions.setFilter, (state, {filter}) => filter as any),
);

export function filterReducer(state: any, action: Action) {
return _filterReducer(state, action);
}
