import { createContext } from "react";
import { ACType } from "./calculatorReducer";

export type CalculatorStateType = { expression: string, history: string[] }
export type CalculatorContextProps = {
    state: CalculatorStateType;
    dispatch: React.Dispatch<ACType>
}


export const CalculatorContext = createContext<CalculatorContextProps>({} as CalculatorContextProps);