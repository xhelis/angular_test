
import { createStore, Store } from 'redux';
import { increaserAction } from './contador/contador.actions';
import { contadorReducer } from './contador/contador.reducer';

const store: Store = createStore(contadorReducer);



store.subscribe(() => {
    console.log('************************************************************************')
    console.log("subs", store.getState());
    console.log('************************************************************************')
});

store.dispatch(increaserAction);
store.dispatch(increaserAction);
store.dispatch(increaserAction);
store.dispatch(increaserAction);
store.dispatch(increaserAction);
store.dispatch(increaserAction);
store.dispatch(increaserAction);