import { createSelector } from "reselect";
import { RootState } from "../../types/states/RootState";

const testimonial = (state: RootState) => state.testimonial;

export const testimonialSelector = createSelector(testimonial, testimonial => testimonial);