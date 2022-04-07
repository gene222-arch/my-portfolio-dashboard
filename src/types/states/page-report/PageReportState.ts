export type PageReport = {
    id: number;
    likes: number;
    views: number;
    sent_mails: number;
    projects: number;
    testimonials: number;
};

export type PageReportState = {
    pageReport: PageReport,
    isLoading: boolean,
    error: any
};