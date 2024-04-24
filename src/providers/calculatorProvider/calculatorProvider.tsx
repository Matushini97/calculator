import { FC, useMemo, useReducer } from "react";
import { CalculatorContext, CalculatorStateType, PayLoadType } from "./calculatorContext";
import { ActionType } from "../../components/Calculator/Calculator";
import { evaluate } from "../../utils/evaluate";

type CalculatorProviderProps = {
    children: React.ReactNode;
};

type ReducerType = (state: CalculatorStateType, action: PayLoadType) => CalculatorStateType

const initialState = {expression: '', history: []}

const reducer = (state, {type, payload}) => {
    switch(type) {
        case (ActionType.ADD_SYMBOL):
            return {...state,
            expression: state.expression + payload}
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
            if (state.expression.length > 0) {
                const result = evaluate(state.expression)
                return {
                    ...state,
                    history: [...state.history, state.expression + ' = ' + result],
                    expression: result.toString(),
                }
            }
            if (state.expression.length === 0) {
                return {
                    ...state,
                }
            }
            break
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

const CalculatorProvider: FC<CalculatorProviderProps> = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const defaultProps = useMemo(() => ({
        state,
        dispatch,
    }), [state]);

    return (
        <CalculatorContext.Provider value={defaultProps}>
            {children}
        </CalculatorContext.Provider>
    );
};

export default CalculatorProvider;