const { test, expect, devices } = require('@playwright/test');

test.use({ viewport: devices['iPhone 12'].viewport });

test.describe('Sitoo Resource Library Tests - Mobile', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sitoo.com/');
    });

    test('Navigate to Resource Library and verify filters on mobile', async ({ page }) => {
        await page.click('text=Resources');
        await page.waitForLoadState('networkidle');

        // Verify that Resource Library page is loaded by checking the presence of a filter element
        //const filterElement = await page.$('selector-for-filter-element');  // replace with actual selector
        //expect(filterElement).toBeTruthy();
    });
});
