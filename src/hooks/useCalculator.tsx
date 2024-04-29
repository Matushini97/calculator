import { useContext } from "react";
import { CalculatorContext, CalculatorStateType } from "../providers/calculatorProvider/calculatorContext";
import { ACType } from "../providers/calculatorProvider/calculatorReducer";

type UseCalculatorResult = {
    state: CalculatorStateType;
    dispatch: React.Dispatch<ACType>;
}

export function useCalculator(): UseCalculatorResult {
    const { state, dispatch } = useContext(CalculatorContext);

    return { state, dispatch };
}