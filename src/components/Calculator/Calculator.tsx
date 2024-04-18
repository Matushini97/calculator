import s from "./Calculator.module.scss"
import { NumPad } from "./NumPad/NumPad";
import { Screen } from "./Screen/Screen";
import { History } from "./History/History";

export const Calculator = () => {
    return (
        <div className={s.container}>
            <div className={s.itemOne}><Screen/></div>
            <div className={s.itemTwo}><NumPad /></div>
            <div className={s.itemThree}><History /></div>
        </div>
    );
};