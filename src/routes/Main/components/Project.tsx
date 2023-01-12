import { FC } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";
import { projectListLocator } from "../../../locators/projectListLocator";

export const Project: FC = () => {
  return (
    <div
      data-testId={projectListLocator.paginationItem}
      className="grid gap-4 p-4 shadow-lg rounded-lg sm:w-5/5 md:w-4/5 xl:w-[793px]"
    >
      <div className="flex justify-between w-full">
        <div>
          <p className="text-base font-semibold">Yukihiro Matsumoto</p>
          <p className="text-slate-600 leading-6">December 21, 1995</p>
        </div>
        <div className="flex items-center gap-1">
          <AiOutlineStar size={20} />
          <p> 141</p>
        </div>
      </div>
      <div className="grid gap-2">
        <p className="text-lg font-semibold">Ruby</p>
        <p className="text-slate-600 leading-6">
          Ruby is a scripting language designed for simplified object-oriented
          programming. Ruby is a scripting language designed for simplified
          object-oriented programming. Ruby is a scripting language designed for
          simplified object-oriented programming.
        </p>
      </div>
      <a
        className="text-blue-600 hover:text-blue-600 visited:text-blue-900"
        href="https://github.com/topics/typescript"
        target="_blank"
      >
        <div className="flex gap-2">
          <GoMarkGithub size={24} />
          <p>Open GitHub </p>
        </div>
      </a>
    </div>
  );
};
