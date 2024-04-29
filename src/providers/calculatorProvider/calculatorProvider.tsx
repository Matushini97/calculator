import { FC, useMemo, useReducer } from "react";
import { CalculatorContext } from "./calculatorContext";
import { reducer } from "./calculatorReducer";

type CalculatorProviderProps = {
    children: React.ReactNode;
};

const initialState = {expression: '', history: []}

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

