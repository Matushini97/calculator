import { ButtonTheme } from "../../../constants/ButtonOptions"
import Button from "../../Button/Button"
import { ActionType } from "../Calculator"
import s from "./NumPad.module.scss"

export const NumPad = ({dispatch}) => {
    return (
        <div className={s.container}>
            <Button theme={ButtonTheme.NUMPAD} onClick={()=> dispatch({type: ActionType.DELETE_SYMBOL})}>C</Button>
            <Button theme={ButtonTheme.NUMPAD} onClick={()=> dispatch({type: ActionType.ADD_SYMBOL, payload: "7"})}>7</Button>
            <Button theme={ButtonTheme.NUMPAD} onClick={()=> dispatch({type: ActionType.ADD_SYMBOL, payload: "8"})}>8</Button>
            <Button theme={ButtonTheme.NUMPAD} onClick={()=> dispatch({type: ActionType.ADD_SYMBOL, payload: "9"})}>9</Button>
            <Button theme={ButtonTheme.NUMPAD} onClick={()=> dispatch({type: ActionType.ADD_SYMBOL, payload: "*"})}>*</Button>
            <Button theme={ButtonTheme.NUMPAD} onClick={()=> dispatch({type: ActionType.ADD_SYMBOL, payload: "-"})}>-</Button>
            <Button theme={ButtonTheme.NUMPAD} onClick={()=> dispatch({type: ActionType.ADD_SYMBOL, payload: "4"})}>4</Button>
            <Button theme={ButtonTheme.NUMPAD} onClick={()=> dispatch({type: ActionType.ADD_SYMBOL, payload: "5"})}>5</Button>
            <Button theme={ButtonTheme.NUMPAD} onClick={()=> dispatch({type: ActionType.ADD_SYMBOL, payload: "6"})}>6</Button>
            <Button theme={ButtonTheme.NUMPAD} onClick={()=> dispatch({type: ActionType.ADD_SYMBOL, payload: "/"})}>/</Button>
            <Button theme={ButtonTheme.NUMPAD} onClick={()=> dispatch({type: ActionType.ADD_SYMBOL, payload: "+"})}>+</Button>
            <Button theme={ButtonTheme.NUMPAD} onClick={()=> dispatch({type: ActionType.ADD_SYMBOL, payload: "1"})}>1</Button>
            <Button theme={ButtonTheme.NUMPAD} onClick={()=> dispatch({type: ActionType.ADD_SYMBOL, payload: "2"})}>2</Button>
            <Button theme={ButtonTheme.NUMPAD} onClick={()=> dispatch({type: ActionType.ADD_SYMBOL, payload: "3"})}>3</Button>
            <Button theme={ButtonTheme.NUMPAD} onClick={()=> dispatch({type: ActionType.EVALUATE})}>=</Button>
            <Button theme={ButtonTheme.NUMPAD} onClick={()=> dispatch({type: ActionType.ADD_SYMBOL, payload: '.'})}>.</Button>
            <Button theme={ButtonTheme.NUMPAD} onClick={()=> dispatch({type: ActionType.ADD_SYMBOL, payload: '('})}>(</Button>
            <Button theme={ButtonTheme.NUMPAD} onClick={()=> dispatch({type: ActionType.ADD_SYMBOL, payload: '0'})}>0</Button>
            <Button theme={ButtonTheme.NUMPAD} onClick={()=> dispatch({type: ActionType.ADD_SYMBOL, payload: ')'})}>)</Button>
            <Button theme={ButtonTheme.NUMPAD} onClick={()=> dispatch({type: ActionType.CLEAR})}>CE</Button>
        </div>
    )
}

// {ButtonsList.map((btn) => {
//     return (
//         <Button
//             key={btn}
//             theme={ButtonTheme.NUMPAD}
//         >
//             {btn}
//         </Button>
//     )})}