import { SelectOption } from "../components/ThemeSelect/ThemeSelect";
import { Theme } from "../providers/themeProvider/themeContext";

export const ThemeOptions: SelectOption[] = [
    { label: 'Light', value: Theme.LIGHT },
    { label: 'Dark', value: Theme.DARK },
    { label: 'Colored', value: Theme.COLORED },
]