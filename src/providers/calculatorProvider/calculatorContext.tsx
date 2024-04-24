import { createContext } from "react";
import { ActionType } from "../../components/Calculator/Calculator";

export type CalculatorStateType = {expression: string, history: string[]}
export type PayLoadType = {type: ActionType, payload?: string|number}
export type CalculatorContextProps = {
    state?: CalculatorStateType;
    dispatch?: React.Dispatch<{
        type: ActionType;
        payload: PayLoadType;
    }>
}


export const CalculatorContext = createContext<CalculatorContextProps>({});