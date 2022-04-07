import { PageReportState } from "../../types/states/page-report/PageReportState";
import { ActionType, GET_PAGE_REPORT_FAILED, GET_PAGE_REPORT_START, GET_PAGE_REPORT_SUCCEEDED } from "./action.types";

const isLoading = false;
const error = undefined;

const initialState: PageReportState = {
    pageReport: {
        id: 0,
        likes: 0,
        views: 0,
        sent_mails: 0,
        projects: 0,
        testimonials: 0,
    },
    isLoading,
    error
};

export default (state = initialState, action: ActionType) => 
{
    switch (action.type) 
    {
        case GET_PAGE_REPORT_START:
            return { 
                ...state, 
                isLoading: true,
                error
            };

        case GET_PAGE_REPORT_SUCCEEDED:
            return {
                ...state,
                pageReport: action.payload.data,
                isLoading: false,
                error
            };

        case GET_PAGE_REPORT_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload.message
            };

        default:
            return state
    }
};
