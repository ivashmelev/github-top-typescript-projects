import { FC, memo } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";
import { projectListLocator } from "../../../locators/projectListLocator";

export interface ProjectProps {
  author: string;
  date: string;
  stars: number;
  title: string;
  description?: string;
  link: string;
  authorAvatarLink?: string;
}

export const Project: FC<ProjectProps> = memo(
  ({ author, date, stars, title, description, link, authorAvatarLink }) => {
    return (
      <div className="grid gap-4 p-4 shadow-lg rounded-lg w-full sm:w-5/5 md:w-4/5 xl:w-[793px]">
        <div className="flex justify-between w-full">
          <div className="flex gap-4 items-center">
            {authorAvatarLink && (
              <img
                className="rounded w-8 h-8 bg-contain"
                src={authorAvatarLink}
                alt={`${author} avatar`}
              />
            )}
            <div>
              <p className="text-base font-semibold">{author}</p>
              <p className="text-slate-600 text-sm">
                {new Date(date).toLocaleDateString("ru")}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <AiOutlineStar size={20} />
            <p>{stars}</p>
          </div>
        </div>
        <div className="grid gap-2">
          <p className="text-2xl capitalize font-semibold">{title}</p>
          {description && (
            <p className="text-slate-600 leading-6">{description}</p>
          )}
        </div>
        <a
          data-testid={projectListLocator.itemLink}
          className="hover:text-blue-600 text-blue-900"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex gap-2">
            <GoMarkGithub size={24} />
            <p>Open GitHub </p>
          </div>
        </a>
      </div>
    );
  }
);

Project.displayName = "Project";
