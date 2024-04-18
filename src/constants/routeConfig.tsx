import { RouteProps } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import SettingsPage from "../pages/SettingsPage/SettingsPage";

export enum AppRoutes {
    // Header
    HOME = 'home',
    SETTINGS = 'settings',
}

export const enum RouteLinkNames {
    // Header
    HOME = 'Home',
    SETTINGS = 'Settings',
}

export const RoutePath: Record<AppRoutes, string> = {
    // Header
    [AppRoutes.HOME]: '/',
    [AppRoutes.SETTINGS]: '/settings',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <HomePage />,
    },
    [AppRoutes.SETTINGS]: {
        path: RoutePath.settings,
        element: <SettingsPage />,
    },
};