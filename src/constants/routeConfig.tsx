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

type RoutePath = {
    label: string;
    path: string;
}

export const RoutePaths: Record<AppRoutes, RoutePath> = {
    // Header
    [AppRoutes.HOME]: {label: RouteLinkNames.HOME, path: '/'},
    [AppRoutes.SETTINGS]: {label: RouteLinkNames.SETTINGS, path: '/settings'},
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePaths.home.path,
        element: <HomePage />,
    },
    [AppRoutes.SETTINGS]: {
        path: RoutePaths.settings.path,
        element: <SettingsPage />,
    },
};