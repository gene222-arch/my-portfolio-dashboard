import { createSelector } from "reselect";
import { RootState } from "../../types/states/RootState";

const project = (state: RootState) => state.project;

export const projectSelector = createSelector(project, project => project);