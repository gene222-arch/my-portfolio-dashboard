import { lazy } from "react";
import { Route } from "../types/route";
import { DASHBOARD_PATH, LOGIN_PATH, ACCOUNT_PATH, PROJECT_PATH, CREATE_PROJECT_PATH } from './path';
const DashboardPage = lazy(() => import('./../views/app/DashboardPage'));
const LoginPage = lazy(() => import('./../views/app/LoginPage'));
const AccountPage = lazy(() => import('./../views/app/AccountPage'));
/** Project */
const ProjectPage = lazy(() => import('./../views/app/project'));
const CreateProjectPage = lazy(() => import('../views/app/project/CreateProjectPage'));

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
        private: true
    },
    {
        key: 'Dashboard',
        path: DASHBOARD_PATH,
        component: DashboardPage,
        private: true
    },
    {
        key: 'Project',
        path: PROJECT_PATH,
        component: ProjectPage,
        private: true
    },
    {
        key: 'Create Project Page',
        path: CREATE_PROJECT_PATH,
        component: CreateProjectPage,
        private: true
    }
];