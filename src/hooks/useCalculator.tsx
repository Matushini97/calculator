import { useContext } from "react";
import { CalculatorContext, CalculatorStateType, PayLoadType } from "../providers/calculatorProvider/calculatorContext";
import { ActionType } from "../components/Calculator/Calculator";

type UseCalculatorResult = {
    state: CalculatorStateType | undefined;
    dispatch: React.Dispatch<{
        type: ActionType;
        payload: PayLoadType;
    }> | undefined;
}

export function useCalculator(): UseCalculatorResult {
    const { state, dispatch } = useContext(CalculatorContext);

    return { state, dispatch };
}