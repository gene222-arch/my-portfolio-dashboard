export type User = {
    id: number,
    name: string,
    email: string,
    address?: {
        address?: string,
        city?: string,
        state?: string,
        zip_code?: number,
        country?: string
    },
    details?: {
        phone_number: string
    },
    social_media_accounts?: {
        id?: number,
        user_id?: number,
        name?: string,
        email?: string,
        url?: string,
    }
};