import test, { expect, Page } from "@playwright/test";
import { projectListLocator } from "../src/locators/projectListLocator";
import { baseUrl } from "./constants";

const waitForGetProjectListResponse = (page: Page) => {
  return page.waitForResponse(
    (response) =>
      response.url().includes("search/repositories") &&
      response.status() === 200
  );
};

test.describe("Main page", () => {
  test.beforeEach(async ({page}) => {
    await page.goto(baseUrl);
  });

  test.describe("Top projects", () => {
    test("Top projects list is rendered", async ({page}) => {
      await waitForGetProjectListResponse(page);

      const projectList = await page.getByTestId(projectListLocator.list);

      await expect(projectList).toBeVisible();
    });

    test("Go to the link of the project list item", async ({page}) => {
      await waitForGetProjectListResponse(page);

      await page.$eval(
        `a[data-testid="${projectListLocator.itemLink}"]`,
        (element) => element.removeAttribute("target")
      );

      await page.getByTestId(projectListLocator.itemLink).first().click();
      await expect(page.url()).toContain("github");
    });

    test("Get more project when scroll to end of page", async ({page}) => {
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      const response = await waitForGetProjectListResponse(page)

      await expect(response.status()).toEqual(200)
    });
  });
});
