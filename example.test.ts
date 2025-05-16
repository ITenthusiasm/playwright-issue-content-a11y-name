import { expect, test as it } from "@playwright/test";

it.describe("Failing Use Cases for Accessible Names and `content` in Playwright", () => {
  it("Correctly determines accessible names for fields using `content`", async ({ page }) => {
    await page.goto("/");
    const lastNameLabel = "Last Name*";
    const firstNameLabel = "First Name";

    const lastName = page.getByRole("textbox", { name: lastNameLabel });
    await expect(lastName).toHaveAccessibleName(lastNameLabel);

    const firstName = page.getByRole("textbox", { name: firstNameLabel });
    await expect(firstName).toHaveAccessibleName(firstNameLabel);
  });
});
