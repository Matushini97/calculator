import { ButtonTheme } from "../../constants/ButtonOptions";
import { ThemeOptions } from "../../constants/ThemeOptions";
import { Themes } from "../../constants/Themes";
import { classNames } from "../../utils/classNames";
import { Theme } from "../../utils/themeContext";
import { useTheme } from "../../utils/useTheme";
import Button from "../Button/Button";
import { SelectOption, ThemeSelect } from "../ThemeSelect/ThemeSelect";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import s from "./Settings.module.scss"

type SettingsProps = {
    className?: string;
  }
export const Settings = ({ className }: SettingsProps) => {
    const { theme, toggleTheme } = useTheme();
    const themeLabel = theme === Theme.LIGHT ? 'Light' : theme === Theme.DARK ? 'Dark' : 'Colored';
    const themeValue: SelectOption = {label: themeLabel, value: theme}
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
                {Themes.map((theme) => (
                    <ThemeSwitcher
                    key={theme}
                    className={classNames('', {}, [className])}
                    newTheme={theme === 'Light' ? Theme.LIGHT : theme === 'Dark' ? Theme.DARK : Theme.COLORED}
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