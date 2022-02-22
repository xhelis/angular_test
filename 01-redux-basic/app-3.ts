import { increaserAction, multiplyAction } from "./contador/contador.actions";
import { contadorReducer, contReducer } from "./contador/contador.reducer";
import { Action, Reducer } from "./ngrx-mock/ngrx";


// class Store<T> {
//     constructor(private reducer: Reducer<T>, private state: T){
//     }

//     getState(){
//         return this.state;
//     }

//     dispatch(action: Action)
//     {
//         console.log("ACTION", action);
//         console.log("this.state", this.state);
//         console.log("this.reducer", this.reducer(this.state, action));
//         this.state = this.reducer(this.state, action);
//     }
// }

// const store = new Store(contadorReducer, 10);

// console.log("STORE 1 call getState APP-3", store.getState());
// store.dispatch(increaserAction)
// console.log("STORE 2 call getState APP-3", store.getState());
// store.dispatch(multiplyAction);
// console.log("STORE 3 call getState APP-3", store.getState());
// store.dispatch({type: 'RESET'} as Action);
// console.log("STORE 4 call getState APP-3", store.getState());

class Store2<T> {
    constructor(private reducer: Reducer<T>, private state: T){
    }

    getState(){
        return this.state;
    }

    dispatch(action: Action)
    {
        console.log("ACTION", action);
        console.log("this.state before", this.state);
        this.state = this.reducer(this.state, action);
        console.log("this.reducer", this.reducer(this.state, action));
    }
}
const store2 = new Store2(contReducer, true);
console.log("STORE 1 call getState APP-3", store2.getState());
store2.dispatch({type: 'TOBETRUE'} as Action);
console.log("store2 2 call getState APP-3", store2.getState());
store2.dispatch({type: 'TOBEFALSE'} as Action);
console.log("store2 3 call getState APP-3", store2.getState());