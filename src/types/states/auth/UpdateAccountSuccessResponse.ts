import { TypeOverride } from "../../TypeOverride";
import { ApiBaseResponse } from "../ApiBaseResponse";

export type UpdateAccountSuccessResponse = TypeOverride<ApiBaseResponse, {
    data: {
        id: number,
        name: string,
        email: string,
        address: {
                address: string,
                city: string,
                state: string,
                zip_code: number,
                country: string,
        },
            details: {
                phone_number: string,
            },
            social_media_accounts?: {
                name?: string,
                email?: string,
                url?: string,
            }[]
    };
    message: string;
}>;