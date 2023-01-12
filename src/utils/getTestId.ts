export const getTestId = (...locators: string[]) => {
  return locators.join("-");
};
