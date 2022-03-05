export type PageReportState = {
    pageReport: {
        id: number,
        likes: number,
        views: number,
        sent_mails: number,
        projects: number
    },
    isLoading: boolean,
    error: any
};