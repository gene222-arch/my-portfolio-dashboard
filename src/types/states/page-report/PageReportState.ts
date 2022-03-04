export type PageReportState = {
    pageReport: {
        id: number,
        likes: number,
        views: number,
        sent_mails: number
    },
    isLoading: boolean,
    error: any
};