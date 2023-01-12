import { components } from "@octokit/openapi-types";

export type ProjectDto = components["schemas"]["repo-search-result-item"];

export interface UseProjects {
  projects: ProjectDto[];
  isLoading: boolean;
  isLoadingMoreProjects: boolean;
  error: string | undefined;
  getMoreProjects: (increasePage?: boolean) => Promise<void>;
}
