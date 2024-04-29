import { classNames } from '../../../utils/classNames';
import s from './History.module.scss'

type HistoryPropsType = {
    history: string[]
}
export const History = ({history}: HistoryPropsType) => {
    return (
        <section>
            <h3 className={classNames('', {}, [s.history])}>
                History
            </h3>
            <ul>
                {history.map((expression, index) => <li key={index}>{expression}</li>)}
            </ul>
        </section>
    );
}

