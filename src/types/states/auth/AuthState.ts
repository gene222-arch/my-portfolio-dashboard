import { User } from "./User";

export type AuthState = {
    user: User,
    isAuthenticated: boolean,
    isLoading: boolean,
    error: any
};