export type CreateProjectPayload = {
    title: string,
    image_url: string;
    website_url: string;
    description: string;
    client_feedback?: string;
    sub_image_urls: string[];
}