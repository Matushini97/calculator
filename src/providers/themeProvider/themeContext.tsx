import { createContext } from "react";
import { ThemeLabels } from "../../components/ThemeSelect/ThemeSelect";

type ThemeTitles = {
    [key in Theme]: ThemeLabels;
};

export enum Theme {
    LIGHT = 'app_light_theme',
    COLORED = 'app_colored_theme',
    DARK = 'app_dark_theme',
}

export const ThemeTitles: ThemeTitles = {
    [Theme.LIGHT]: "Light",
    [Theme.DARK]: "Dark",
    [Theme.COLORED]: "Colored",
}

export type ThemeContextProps = {
    theme?: Theme
    setTheme?: (theme: Theme) => void
};

export const ThemeContext = createContext<ThemeContextProps>({});
export const LOCAL_STORAGE_THEME_KEY = 'theme';