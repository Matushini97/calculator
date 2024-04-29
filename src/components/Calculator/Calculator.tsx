import s from "./Calculator.module.scss";
import { NumPad } from "./NumPad/NumPad";
import { Screen } from "./Screen/Screen";
import { History } from "./History/History";
import { useCalculator } from "../../hooks/useCalculator";

export const Calculator = () => {
    const {state, dispatch} = useCalculator();
    const { expression, history } = state;
    return (
        <div className={s.container}>
            <div className={s.itemOne}><Screen expression={expression}/></div>
            <div className={s.itemTwo}><NumPad dispatch={dispatch}/></div>
            <div className={s.itemThree}><History history={history}/></div>
        </div>
    );
};