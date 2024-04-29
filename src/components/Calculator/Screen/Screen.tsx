import { classNames } from '../../../utils/classNames';
import s from './Screen.module.scss';

type ScreenProps = {
    expression: string
}

export const Screen = ({ expression}: ScreenProps) => {
    return (
        <section className={classNames('', {}, [s.screen])}>
            {expression}
        </section>
    );
}

