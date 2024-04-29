import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import { ButtonTheme, ButtonSize } from '../../constants/ButtonOptions';
import s from './Button.module.scss'
import { Mods, classNames } from '../../utils/classNames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
    symbol?: string;
}

const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.CLEAR,
        square,
        disabled,
        size = ButtonSize.M,
        symbol: digit,
        ...otherProps
    } = props;

    const mods: Mods = {
        [s[theme]]: true,
        [s.square]: square,
        [s[size]]: true,
        [s.disabled]: disabled,
    };
    const isDigit = digit ? digit : children;
        return (
        <button
            className={classNames(s.button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {isDigit}
        </button>
    );
});

export default Button;