
const { test, expect } = require('@playwright/test');

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('https://cmeducations.se/');

  // Expect a title "to contain" a substring.
  const firstHeader = page.locator("h1").first()

  await expect(firstHeader).toHaveText("Vi är Changemakers")

  // create a locator
  const button = page.locator("body > section.hero.home.bg-white.has-hl > div > div.wrap.text-wrap > div > div > div > div > div.cta-wrap > a:nth-child(2)")

  // Expect an attribute "to be strictly equal" to the value.
  await expect(button).toHaveAttribute('href', 'https://cmeducations.se/utbildningar');

  // Click the get started link.
  await button.click();
  
  // Expects the URL to contain intro.
  const secondHeader = page.locator("h3").nth(0)
  await expect(secondHeader).toHaveText("Våra utbildningar");
});
