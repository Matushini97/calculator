import { evaluate } from "../../utils/evaluate";
import { CalculatorStateType } from "./calculatorContext";

export const enum ActionType {
    ADD_SYMBOL = 'add-symbol',
    CLEAR = 'clear',
    DELETE_SYMBOL = 'delete-symbol',
    EVALUATE = 'evaluate',
    CLEAR_HISTORY = 'clear-history',
}

export type AddSymbolAT = {
    type: ActionType.ADD_SYMBOL;
    symbol: string;
};
export type DeleteSymbolAT = {
    type: ActionType.DELETE_SYMBOL;
};
export type EvaluateAT = {
    type: ActionType.EVALUATE;
};
export type ClearAT = {
    type: ActionType.CLEAR;
};
export type ClearHistoryAT = {
    type: ActionType.CLEAR_HISTORY;
};

export type ACType = AddSymbolAT | DeleteSymbolAT | EvaluateAT | ClearAT | ClearHistoryAT

export const reducer = (state: CalculatorStateType, action: ACType): CalculatorStateType => {
    const { type } = action
    switch(type) {
        case (ActionType.ADD_SYMBOL):
            return {...state,
            expression: state.expression + (action as AddSymbolAT).symbol}
        case (ActionType.CLEAR):
            return {
                ...state,
                expression: ''
            }
        case (ActionType.DELETE_SYMBOL):
            if (state.expression.length === 1) {
                return { ...state, expression: '' }
            }
            return {
                ...state,
                expression: state.expression.slice(0, -1),
            }
        case (ActionType.EVALUATE):
            if (state.expression.length === 0) {
                return {
                    ...state,
                }
            }
            return {
                ...state,
                history: [...state.history, state.expression + ' = ' + evaluate(state.expression)],
                expression: evaluate(state.expression).toString(),
            }
        case (ActionType.CLEAR_HISTORY):
            return {
                ...state,
                expression: '',
                history: []
            }
        default:
            return state
    }
}

export const AddSymbolAC = (symbol: string): AddSymbolAT => ({
    type: ActionType.ADD_SYMBOL,
    symbol
} as const)
export const DeleteSymbolAC = (): DeleteSymbolAT => ({
    type: ActionType.DELETE_SYMBOL,
} as const)
export const EvaluateAC = (): EvaluateAT => ({
    type: ActionType.EVALUATE,
} as const)
export const ClearAC = (): ClearAT => ({
    type: ActionType.CLEAR,
} as const)
export const ClearHistoryAC = (): ClearHistoryAT => ({
    type: ActionType.CLEAR_HISTORY,
} as const)