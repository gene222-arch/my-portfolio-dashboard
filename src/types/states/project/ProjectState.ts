export type ProjectItemImage = {
    id?: number,
    project_id?: string,
    image_url: string
};

export type ProjectItemType = {
    id?: number,
    image_url: string,
    website_url?: string,
    title: string,
    description: string,
    client_feedback: string,
    created_at: string,
    updated_at: string,
    images: ProjectItemImage[]
};

export type ProjectState = 
{
    projects: ProjectItemType[],
    isLoading: boolean,
    error: any
};