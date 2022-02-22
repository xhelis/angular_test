import { Action } from "../ngrx-mock/ngrx";

export function contadorReducer(state = 10, action: Action){
    console.log("state contadorReducer",state);
    switch(action.type){
        case 'INCREASE':
            return state +=1;
        case 'DECREASE':
            return state -=1;
        case 'MULTIPLY':
            return state * action.payload;
        case 'DIVIDE':
                return state / action.payload;
        case 'RESET':
                return state = 0; 
        default:
            return state;
    }
}

export function contReducer(state = true, action: Action){
    console.log("state contReducer",state);
    switch(action.type){
        case 'TOBETRUE':
            return state = true;
        case 'TOBEFALSE':
            return state = false;
        default:
            return state;
    }
}