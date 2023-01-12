import test, { expect, Page } from "@playwright/test";
import { projectListLocator } from "../src/locators/projectListLocator";
import { baseUrl } from "./constants";

const waitForGetProjectListResponse = (page: Page) => {
  return page.waitForResponse(
    (response) =>
      response.url().includes("search/topics") && response.status() === 200
  );
};

test.describe("Main page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
  });

  test.describe("Top projects", () => {
    test("Top projects list is rendered", async ({ page }) => {
      await waitForGetProjectListResponse(page);

      const projectList = await page.getByTestId(projectListLocator.itemLink);

      await expect(projectList).toBeVisible();
    });

    test("Go to the link of the project list item", async ({
      page,
      context,
    }) => {
      const pagePromise = context.waitForEvent("page");

      await page.getByTestId(projectListLocator.itemLink).click();

      const newPage = await pagePromise;

      await newPage.waitForLoadState();

      await expect(newPage.url()).toContain("github");
    });

    test("Click to pagination item", async ({ page }) => {
      await page.getByTestId(projectListLocator.paginationItem).nth(1).click();

      await waitForGetProjectListResponse(page);

      await expect(page.url()).toContain("?page=2");
    });

    test("Select pagination size", async ({ page }) => {
      await page.getByTestId(projectListLocator.paginationSize).nth(1).click();

      await waitForGetProjectListResponse(page);

      await expect(page.url()).toContain("?pageSize=10");
    });
  });
});
