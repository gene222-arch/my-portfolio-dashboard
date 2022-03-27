import { TypeOverride } from "types/TypeOverride";
import { DefaultStateProps } from "../DefaultStateProps";

export type EmailItemType = {
    id: number;
    name: string,
    email: string,
    message: string,
    updated_at: string,
    created_at: string,
};

export type EmailState = TypeOverride<DefaultStateProps, {
    emails: EmailItemType[]
}>;