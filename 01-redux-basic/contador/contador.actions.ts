import { Action } from "../ngrx-mock/ngrx"

export const increaserAction: Action ={
    type: 'INCREASE'
}
export const decreaserAction: Action ={
    type: 'DECREASE'
}
export const multiplyAction: Action ={
    type: 'MULTIPLY',
    payload: 2
}
export const divideAction: Action ={
    type: 'DIVIDE',
    payload: 2
}
export const resetAction: Action ={
    type: 'RESET',
}