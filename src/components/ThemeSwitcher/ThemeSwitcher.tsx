import { ButtonTheme } from "../../constants/ButtonOptions";
import { classNames } from "../../utils/classNames";
import { Theme, ThemeTitles } from "../../utils/themeContext";
import { useTheme } from "../../hooks/useTheme";
import Button from "../Button/Button"

type ThemeSwitcherProps = {
    className?: string;
    newTheme: Theme;
}

const ThemeSwitcher = ({ className, newTheme }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();
    const themeTitle = ThemeTitles[newTheme];
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