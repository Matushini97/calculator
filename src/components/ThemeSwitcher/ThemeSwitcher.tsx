import { ButtonTheme } from "../../constants/ButtonOptions";
import { classNames } from "../../utils/classNames";
import { Theme } from "../../utils/themeContext";
import { useTheme } from "../../utils/useTheme";
import Button from "../Button/Button"

type ThemeSwitcherProps = {
    className?: string;
    newTheme: Theme;
}

const ThemeSwitcher = ({ className, newTheme }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();

    const themeTitle = newTheme === Theme.LIGHT ? 'Light' : newTheme === Theme.DARK ? 'Dark' : 'Colored';

    return (
        <Button
            theme={ButtonTheme.THEME}
            onClick={() => toggleTheme(newTheme)}
            className={classNames('', {}, [className])}
        >
            {themeTitle} Theme
        </Button>
    )
}

export default ThemeSwitcher;