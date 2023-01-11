import { getTestId } from "../utils/getTestId";
import { Locators } from "../types";

interface ProjectListLocator {
  itemLink: string;
  paginationItem: string;
  paginationSize: string;
}

const prefix = getTestId(Locators.Project, Locators.List);

export const projectListLocator: ProjectListLocator = {
  itemLink: getTestId(prefix, Locators.Item, Locators.Link),
  paginationItem: getTestId(prefix, Locators.Pagination, Locators.Item),
  paginationSize: getTestId(prefix, Locators.Pagination, Locators.Size),
};
