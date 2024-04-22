import { useState } from "react";
import { Theme } from "../../utils/themeContext";
import s from "./ThemeSelect.module.scss";
import { classNames } from "../../utils/classNames";
export type ThemeLabels = "Light" | "Dark" | "Colored";
export type SelectOption = {
    label: ThemeLabels;
    value: Theme;
}
type ThemeSelectProps = {
    value: SelectOption;
    onChange: (theme: Theme) => void;
    options: SelectOption[];
    className?: string
}
export const ThemeSelect = ({ options, value, onChange, className }: ThemeSelectProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const leftOptions = options.filter((option) => value.value !== option.value);

    const selectOption = (theme: Theme) => {
        onChange(theme);
        console.log(theme);
    };
    return (
        <div className={classNames('', {}, [className])}>
            <label>Switch Theme</label>
            <div
                className={classNames(s.container, {}, [])}
                tabIndex={0}
                onBlur={() => setIsOpen(false)}
                onClick={() => {
                    setIsOpen(!isOpen)
                }}
            >
                <span>{value.label} Theme</span>
                <div className={classNames(s.caret, {}, [])}></div>
                <ul className={classNames('', {}, [s.options, isOpen ? s.show : ''])}>
                    {leftOptions.map(({ label, value }) => (
                        <li
                            key={label}
                            className={classNames('', {}, [s.option])}
                            onClick={() => {
                                selectOption(value)
                            }}
                        >
                                {label} Theme
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}