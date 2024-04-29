import s from "./Calculator.module.scss";
import { NumPad } from "./NumPad/NumPad";
import { Screen } from "./Screen/Screen";
import { History } from "./History/History";
import { useCalculator } from "../../hooks/useCalculator";

export const Calculator = () => {
    const {state, dispatch} = useCalculator();
    const { expression, history } = state;
    return (
        <main className={s.container}>
            <section className={s.itemOne}><Screen expression={expression}/></section>
            <section className={s.itemTwo}><NumPad dispatch={dispatch}/></section>
            <section className={s.itemThree}><History history={history}/></section>
        </main>
    );
};