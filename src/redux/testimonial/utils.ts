import { TestimonialItemType } from "types/states/testimonial";

export const deleteTestimonials = (testimonials: TestimonialItemType[], ids: number[]) =>
{
    return testimonials.filter(({ id }) => !ids.includes(id));
};