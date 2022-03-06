export type TestimonialItemType = {
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