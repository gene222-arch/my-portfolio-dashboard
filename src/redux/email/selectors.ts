import { createSelector } from "reselect";
import { RootState } from "../../types/states/RootState";

const email = (state: RootState) => state.email;

export const emailSelector = createSelector(email, email => email);