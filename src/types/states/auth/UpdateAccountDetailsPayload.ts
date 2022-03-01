export type UpdateAccountDetailsPayload = 
{
    id: number,
    name: string,
    email: string,
    address: string,
    city: string,
    state: string,
    zip_code: number,
    country: string,
    phone_number: string,
    social_media_accounts?: {
        name?: string,
        email?: string,
        url?: string,
    }[]
};