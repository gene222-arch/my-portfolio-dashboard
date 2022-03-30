import { EmailItemType } from "types/states/email/EmailState";

export const destroyEmails = (emails: EmailItemType[], ids: number[]): EmailItemType[] =>
{
    return emails.filter(({ id }) => !ids.includes(id));
}