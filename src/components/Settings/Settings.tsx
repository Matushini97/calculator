import { ButtonTheme } from "../../constants/ButtonOptions";
import { ThemeOptions } from "../../constants/ThemeOptions";
import { classNames } from "../../utils/classNames";
import { ThemeTitles } from "../../utils/themeContext";
import { useTheme } from "../../hooks/useTheme";
import Button from "../Button/Button";
import { SelectOption, ThemeSelect } from "../ThemeSelect/ThemeSelect";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import s from "./Settings.module.scss"

type SettingsProps = {
    className?: string;
}
export const Settings = ({ className }: SettingsProps) => {
    const { theme, toggleTheme } = useTheme();
    const themeValue: SelectOption = {label: ThemeTitles[theme], value: theme}
    return (
        <div className={classNames('', {}, [className, s.settings])}>
            <h2 className={classNames('', {}, [className, s.text])}>Settings</h2>
            <div>
            <ThemeSelect
                className={classNames('', {}, [s.select, className])}
                options={ThemeOptions}
                value={themeValue}
                onChange={theme => toggleTheme(theme)}
            />
            <div className={classNames('', {}, [s.themeButtons, className])}>
                {ThemeOptions.map(({ value }) => (
                    <ThemeSwitcher
                        key={value}
                        className={classNames('', {}, [className])}
                        newTheme={value}
                    />
                ))}
            </div>
            <Button
                theme={ButtonTheme.CLEAR}
                className={classNames('', {}, [className])}
            >
                    Clear All History
            </Button>
            </div>
        </div>
    );
}