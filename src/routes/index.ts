import { lazy } from "react";
import { Route } from "../types/route";
import { 
    DASHBOARD_PATH, 
    LOGIN_PATH, 
    ACCOUNT_PATH, 
    PROJECT_PATH, 
    CREATE_PROJECT_PATH, 
    EDIT_PROJECT_PATH, 
    TESTIMONIAL_PATH, 
    CREATE_TESTIMONIAL_PATH, 
    EDIT_TESTIMONIAL_PATH 
} from './path';

const DashboardPage = lazy(() => import('./../views/app/DashboardPage'));
const LoginPage = lazy(() => import('./../views/app/LoginPage'));
const AccountPage = lazy(() => import('./../views/app/AccountPage'));
/** Project */
const ProjectPage = lazy(() => import('./../views/app/project'));
const CreateProjectPage = lazy(() => import('../views/app/project/CreateProjectPage'));
const EditProjectPage = lazy(() => import('../views/app/project/EditProjectPage'));
/** Testimonial */
const TestimonialPage = lazy(() => import('./../views/app/testimonial'));
const CreateTestimonialPage = lazy(() => import('../views/app/testimonial/CreateTestimonialPage'));
const EditTestimonialPage = lazy(() => import('../views/app/testimonial/EditTestimonialPage'));

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
    },
    {
        key: 'Edit Project Page',
        path: EDIT_PROJECT_PATH,
        component: EditProjectPage,
        private: true
    },
    {
        key: 'Testimonial',
        path: TESTIMONIAL_PATH,
        component: TestimonialPage,
        private: true
    },
    {
        key: 'Create Testimonial Page',
        path: CREATE_TESTIMONIAL_PATH,
        component: CreateTestimonialPage,
        private: true
    },
    {
        key: 'Edit Testimonial Page',
        path: EDIT_TESTIMONIAL_PATH,
        component: EditTestimonialPage,
        private: true
    }
];