import { createContext } from "react";

export enum Theme {
    LIGHT = 'app_light_theme',
    COLORED = 'app_colored_theme',
    DARK = 'app_dark_theme',
}

export type ThemeContextProps = {
    theme?: Theme
    setTheme?: (theme: Theme) => void
};

export const ThemeContext = createContext<ThemeContextProps>({});
export const LOCAL_STORAGE_THEME_KEY = 'theme';