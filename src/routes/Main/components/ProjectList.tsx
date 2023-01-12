import { FC, memo } from "react";
import { Project } from "./Project";
import { ProjectDto } from "../../../hooks/useProjects/types";
import { Loader } from "../../../components/Loader/Loader";
import { projectListLocator } from "../../../locators/projectListLocator";

export interface ProjectListProps {
  projects: ProjectDto[];
  isLoadingMoreProjects?: boolean;
}

export const ProjectList: FC<ProjectListProps> = memo(
  ({ projects, isLoadingMoreProjects }) => {
    return (
      <div
        data-testid={projectListLocator.list}
        className="flex flex-col gap-10 sm:gap-6 items-center h-full mb-12"
      >
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.name}
            date={project.created_at}
            author={project.owner?.login || ""}
            description={project.description || undefined}
            link={project.html_url}
            stars={project.stargazers_count}
            authorAvatarLink={project.owner?.avatar_url}
          />
        ))}
        <Loader visible={isLoadingMoreProjects} />
      </div>
    );
  }
);

ProjectList.displayName = "ProjectList";
