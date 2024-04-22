import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../utils/themeContext';

type UseThemeResult = {
    toggleTheme: (theme: Theme) => void
    theme: Theme
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (theme: Theme) => {
        setTheme?.(theme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    };
    return { theme: theme || Theme.LIGHT, toggleTheme };
}