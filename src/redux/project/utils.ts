import { ProjectItemType } from "types/states/project";

export const destroyProjects = (projects: ProjectItemType[], ids: number[]): ProjectItemType[] =>
{
    return projects.filter(({ id }) => !ids.includes(id as number));
}