import { Locators } from "./types";
import { concatenateLocators } from "../utils/concatenateLocators";

interface ProjectListLocator {
  list: string;
  itemLink: string;
}

const prefix = concatenateLocators(Locators.Project, Locators.List);

export const projectListLocator: ProjectListLocator = {
  list: prefix,
  itemLink: concatenateLocators(prefix, Locators.Item, Locators.Link),
};
