import { classNames } from '../../../utils/classNames';
import s from './History.module.scss'
export const History = ({history}) => {
    return (
        <>
            <h3 className={classNames('', {}, [s.history])}>
                History
            </h3>
            <ul>
                {history.map((expression, index) => <li key={index}>{expression}</li>)}
            </ul>
        </>
    );
}

