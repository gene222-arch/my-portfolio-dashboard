import { lazy } from "react";
import { Route } from "../types/route";
import { DASHBOARD_PATH, LOGIN_PATH, ACCOUNT_PATH } from './path';
const DashboardPage = lazy(() => import('./../views/app/DashboardPage'));
const LoginPage = lazy(() => import('./../views/app/LoginPage'));
const AccountPage = lazy(() => import('./../views/app/AccountPage'));

export const publicRoutes: Route[] = 
[
    {
        key: 'Login',
        path: LOGIN_PATH,
        component: LoginPage,
        private: false
    }
];

export const privateRoutes: Route[] = 
[
    {
        key: 'Account',
        path: ACCOUNT_PATH,
        component: AccountPage,
        private: false
    },
    {
        key: 'Dashboard',
        path: DASHBOARD_PATH,
        component: DashboardPage,
        private: false
    }
];