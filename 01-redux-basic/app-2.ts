import { decreaserAction, divideAction, increaserAction, multiplyAction, resetAction} from "./contador/contador.actions";
import { contadorReducer } from "./contador/contador.reducer";


console.log("EXAMPLE decreaserAction APP-2.ts", contadorReducer(10,decreaserAction)); // 9
console.log("EXAMPLE divideAction APP-2.ts", contadorReducer(10,divideAction)); // 5
console.log("EXAMPLE increaserAction APP-2.ts", contadorReducer(10,increaserAction)); //11
console.log("EXAMPLE multiplyAction APP-2.ts", contadorReducer(10,multiplyAction)); // 20
console.log("EXAMPLE multiplyAction APP-2.ts", contadorReducer(10,multiplyAction)); // 20
console.log("EXAMPLE resetAction APP-2.ts", contadorReducer(10,resetAction)); // 0