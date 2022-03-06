export type TestimonialItemType = {
    id?: number,
    name: string,
    body: string,
    profession: string,
    rate: number
};

export type TestimonialState = {
    testimonials: TestimonialItemType[],
    isLoading: boolean,
    error: any
};