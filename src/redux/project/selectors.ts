import { createSelector } from "reselect";
import { RootState } from "../../types/states/RootState";

const pageProject = (state: RootState) => state.project;

export const pageProjectSelector = createSelector(pageProject, pageProject => pageProject);