import { createSelector } from "reselect";
import { RootState } from "../../types/states/RootState";

const pageReport = (state: RootState) => state.pageReport;

export const pageReportSelector = createSelector(pageReport, pageReport => pageReport);