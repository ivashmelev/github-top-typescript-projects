import { FC } from "react";
import { Project } from "./Project";

export const ProjectList: FC = () => {
  return (
    <div className="flex flex-col gap-6 items-center">
      {new Array(2).fill(1).map(() => (
        <Project />
      ))}
    </div>
  );
};
