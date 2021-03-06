import { FC } from 'react';
import { 
    LOGIN_PATH, 
    DASHBOARD_PATH, 
    ACCOUNT_PATH, 
    PROJECT_PATH, 
    CREATE_PROJECT_PATH, 
    EDIT_PROJECT_PATH, 
    TESTIMONIAL_PATH, 
    CREATE_TESTIMONIAL_PATH, 
    EDIT_TESTIMONIAL_PATH, 
    EMAIL_PATH
} from './../routes/path';

export type Path = 
    | typeof LOGIN_PATH
    | typeof DASHBOARD_PATH
    | typeof ACCOUNT_PATH
    | typeof PROJECT_PATH
    | typeof CREATE_PROJECT_PATH
    | typeof EDIT_PROJECT_PATH
    | typeof TESTIMONIAL_PATH
    | typeof CREATE_TESTIMONIAL_PATH
    | typeof EDIT_TESTIMONIAL_PATH
    | typeof EMAIL_PATH;

export type Route =
{
    key: string,
    path: Path,
    component: FC,
    private: boolean
};