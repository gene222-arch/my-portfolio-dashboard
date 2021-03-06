import { GetTestimonialsFailedResponse } from '../types/states/testimonial/GetTestimonialsFailedResponse';
import { GetTestimonialsSuccessResponse } from '../types/states/testimonial/GetTestimonialsSuccessResponse';
import { CreateTestimonialFailedResponse } from '../types/states/testimonial/CreateTestimonialFailedResponse';
import { CreateTestimonialSuccessResponse } from '../types/states/testimonial/CreateTestimonialSuccessResponse';
import axiosInstance from '../utils/axiosInstance';
import { TestimonialItemType } from '../types/states/testimonial/TestimonialState';
import { EditTestimonialSuccessResponse } from '../types/states/testimonial/EditTestimonialSuccessResponse';
import { EditTestimonialFailedResponse } from '../types/states/testimonial/EditTestimonialFailedResponse';
import { UploadAvatarSuccessResponse } from 'types/states/testimonial/UploadAvatarSuccessResponse';
import { UploadAvatarFailedResponse } from 'types/states/testimonial/UploadAvatarFailedResponse';
import { DeleteTestimonialsFailedResponse, DeleteTestimonialsPayload, DeleteTestimonialsSuccessResponse } from 'types/states/testimonial/DeleteTestimonialResponse';

export const getTestimonials = async (): Promise<GetTestimonialsSuccessResponse | GetTestimonialsFailedResponse> => 
{
    return await axiosInstance()
        .get('/testimonials')
        .then((response: { data: GetTestimonialsSuccessResponse }) => response.data)
        .catch((error: { response: { data: GetTestimonialsFailedResponse }}) => Promise.reject(error.response.data))
};

export const store = async (payload: TestimonialItemType): Promise<CreateTestimonialSuccessResponse | CreateTestimonialFailedResponse> => 
{
    return await axiosInstance()
        .post('/testimonials', payload)
        .then((response: { data: CreateTestimonialFailedResponse }) => response.data)
        .catch((error: { response: { data: CreateTestimonialSuccessResponse }}) => Promise.reject(error.response.data))
};

export const uploadAvatar = async (payload: FormData): Promise<UploadAvatarSuccessResponse> => 
{
    return await axiosInstance()
        .post('/testimonials/upload-avatar', payload, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        .then((response: { data: UploadAvatarSuccessResponse }) => response.data)
        .catch((error: { response: { data: UploadAvatarFailedResponse }}) => Promise.reject(error.response.data))
};

export const update = async (payload: Partial<TestimonialItemType>): Promise<EditTestimonialSuccessResponse | EditTestimonialFailedResponse> => 
{
    return await axiosInstance()
        .put(`/testimonials/${ payload.id }`, payload)
        .then((response: { data: EditTestimonialFailedResponse }) => response.data)
        .catch((error: { response: { data: EditTestimonialSuccessResponse }}) => Promise.reject(error.response.data))
};

export const destroy = async (payload: DeleteTestimonialsPayload): Promise<DeleteTestimonialsSuccessResponse> => 
{
    return await axiosInstance()
        .delete(`/testimonials`, {
            data: payload
        })
        .then((response: { data: DeleteTestimonialsSuccessResponse }) => response.data)
        .catch((error: { response: { data: DeleteTestimonialsFailedResponse }}) => Promise.reject(error.response.data))
};