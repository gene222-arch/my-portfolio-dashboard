import { FC } from 'react';
import { LOGIN_PATH, DASHBOARD_PATH, ACCOUNT_PATH, PROJECT_PATH } from './../routes/path';

export type Path = 
    | typeof LOGIN_PATH
    | typeof DASHBOARD_PATH
    | typeof ACCOUNT_PATH
    | typeof PROJECT_PATH;

export type Route =
{
    key: string,
    path: Path,
    component: FC,
    private: boolean
};