import { ButtonTheme } from "../../../constants/ButtonOptions"
import { ButtonsList } from "../../../constants/buttonList"
import { ACType } from "../../../providers/calculatorProvider/calculatorReducer"
import Button from "../../Button/Button"
import s from "./NumPad.module.scss"

type NumPadType = {
    dispatch: React.Dispatch<ACType>
}

export const NumPad = ({dispatch}: NumPadType) => {
    return (
        <div className={s.container}>
            {ButtonsList.map(({ symbol, action }) => {
                return (
                    <Button
                        key={symbol}
                        theme={ButtonTheme.NUMPAD}
                        onClick={() => dispatch(action)}
                    >
                        {symbol}
                    </Button>
                )})}
        </div>
    )
}