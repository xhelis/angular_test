import { Action } from "./ngrx-mock/ngrx";

const increaserAction: Action ={
    type: 'INCREASE'
}

const decreaserAction: Action ={
    type: 'DECREASE'
}
const multiplyAction: Action ={
    type: 'MULTIPLY',
    payload: 2
}
const divideAction: Action ={
    type: 'DIVIDE',
    payload: 2
}

function reducer(state = 10, action: Action){
    if(action.type === 'INCREASE'){
        return state +=1;
    }
    switch(action.type){
        case 'INCREASE':
            return state +=1;
        case 'DECREASE':
            return state -=1;
        case 'MULTIPLY':
            return state * action.payload;
        case 'DIVIDE':
                return state / action.payload;
        default:
            return state;
    }
    return state;
}



console.log("Example with INCREASE",reducer(10, increaserAction)); // 11

console.log("Example with DECREASE",reducer(10, decreaserAction)); // 9

console.log("Example with MULTIPLY",reducer(10, multiplyAction)); // 20

console.log("Example with DIVIDE",reducer(10, divideAction)); // 5