import { DeleteSymbolAC, AddSymbolAC, ClearAC, EvaluateAC } from "../providers/calculatorProvider/calculatorReducer";

export const ButtonsList = [
    { symbol: 'C', action: DeleteSymbolAC() },
    { symbol: '7', action: AddSymbolAC('7') },
    { symbol: '8', action: AddSymbolAC('8') },
    { symbol: '9', action: AddSymbolAC('9') },
    { symbol: '*', action: AddSymbolAC('*') },
    { symbol: '-', action: AddSymbolAC('-') },
    { symbol: '4', action: AddSymbolAC('4') },
    { symbol: '5', action: AddSymbolAC('5') },
    { symbol: '6', action: AddSymbolAC('6') },
    { symbol: '/', action: AddSymbolAC('/') },
    { symbol: '+', action: AddSymbolAC('+') },
    { symbol: '1', action: AddSymbolAC('1') },
    { symbol: '2', action: AddSymbolAC('2') },
    { symbol: '3', action: AddSymbolAC('3') },
    { symbol: '=', action: EvaluateAC() },
    { symbol: '.', action: AddSymbolAC('.') },
    { symbol: '(', action: AddSymbolAC('(') },
    { symbol: '0', action: AddSymbolAC('0') },
    { symbol: ')', action: AddSymbolAC(')') },
    { symbol: 'CE', action: ClearAC() },
];
