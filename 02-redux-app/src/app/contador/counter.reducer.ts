import { Action, createReducer, on } from "@ngrx/store";
import { decrease, divide, increase, multiply, reset } from "./counter.actions";


export const initialState = 20;

const _counterReducer = createReducer(
  initialState,
  on(increase, (state) => state + 1),
  on(decrease, (state) => state - 1),
  on(multiply,(state, {num}) => state * num),
  on(divide, (state, {num}) => state / num),
  on(reset, state => initialState)
);

export function counterReducer(state: any, action: Action) {
  return _counterReducer(state, action);
}



// export function counterReducer(state: number = 10, action: Action){

//   switch(action.type){
//       case increase.type:
//         return state + 1;
//       case decrease.type:
//         return state - 1;
//       case reset.type:
//         return state = 0;
//       default:
//         return state;
//   }

// }
