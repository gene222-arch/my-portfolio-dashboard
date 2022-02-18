import { createSelector } from "reselect";
import { RootState } from "../../types/states/RootState";

const auth = (state: RootState) => state.auth;

export const authSelector = createSelector(auth, auth => auth);
export const userSelector = createSelector(auth, auth => auth.user);
export const errorSelector = createSelector(auth, auth => auth.error);