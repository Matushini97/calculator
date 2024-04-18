import { ButtonTheme } from "../../../constants/ButtonOptions"
import { ButtonsList } from "../../../constants/buttonList"
import Button from "../../Button/Button"
import s from "./NumPad.module.scss"

export const NumPad = () => {
    return (
        <div className={s.container}>
            {ButtonsList.map((btn) => {
                return (
                    <Button
                        key={btn}
                        theme={ButtonTheme.NUMPAD}
                    >
                        {btn}
                    </Button>
                )})}
        </div>
    )
}