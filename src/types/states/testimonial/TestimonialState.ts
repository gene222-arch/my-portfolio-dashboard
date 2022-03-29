export type TestimonialItemType = {
    id: number,
    name: string,
    avatar_url: string,
    body: string,
    profession: string,
    rate: number
};

export type TestimonialState = {
    testimonials: TestimonialItemType[],
    isLoading: boolean,
    error: any
};