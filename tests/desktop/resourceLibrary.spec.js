const { test, expect } = require('@playwright/test');

test.describe('Sitoo Resource Library Tests - Desktop', () => {
    // Upstreamed neede steps for all the tests
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sitoo.com/');
        await page.click('text=Resources');
        await page.waitForLoadState('networkidle');
        await page.click('text=Resource library');
        await page.waitForLoadState('networkidle');
    });

    test('Filter by Resource type', async ({ page }) => {
        
        // Verify that Resource Library page is loaded by checking the presence of a filter element
        // Select "Blog posts" from the Resource type dropdown
        await page.selectOption('select[name="plcf_resource_type_taxonomy"]', '5048d8d6-5964-45e2-8a7b-62dcea566131');
        
        // You may need to wait for the page to update after applying the filter
        await page.waitForTimeout(100); // Adjust the wait time based on how the page updates

        // Locate the element containing "Blog post" text in the filtered content
        const blogPostLabel = await page.locator('span.Teaser_pretitle__PiGHG.text--pretitle');

        // Assert that at least one "Blog post" label is visible, indicating that Blog post content is shown
        await expect(blogPostLabel.first()).toHaveText('Blog post');
        // Additional checks can be added here as needed for filters or resources list
    });

    test('Filter by Topic', async ({ page }) => {
        // Select "Blog posts" from the Resource type dropdown
        await page.selectOption('select[name="plcf_resource_type_taxonomy"]', '5048d8d6-5964-45e2-8a7b-62dcea566131');
        
        // You may need to wait for the page to update after applying the filter
        await page.waitForTimeout(100); // Adjust the wait time based on how the page updates
      
        // Select "Customer experience" from the Topic dropdown
        await page.selectOption('select[name="plcf_topic_taxonomy"]', '100163ae-a23a-4d99-aaf7-03a81522588c');
        
        // You may need to wait for the page to update after applying the filter
        await page.waitForTimeout(100); // Adjust the wait time based on how the page updates
      
        // Verify that the selected topic filter is applied
        const content = await page.locator('h3.h5'); // Adjust this locator based on actual page content
        await expect(content.first()).toHaveText('Elevating the shopping experience beyond the expectations');
      });
      
    test('Select All options in Resource type dropdown', async ({ page }) => {
            
        // Select "All" from the Resource type dropdown (empty value)
        await page.selectOption('select[name="plcf_resource_type_taxonomy"]', '');
      
        // Locate the grid container
        const gridContainer = page.locator(
            'div.Grid_grid__bacCY.Grid_vertical-alignment--top__34TCh.Grid_horizontal-alignment--left__coKmi.Grid_gutter-width__wpuc1.Grid_gutter-width--default__rXogM.Grid_direction--default__FKV13'
        );
        
        // Get the number of grid items inside the container
        const gridItems = gridContainer.locator('div'); // Adjust selector if needed to target specific grid items
        const gridCount = await gridItems.count();
        
        // Log the number of grid items
        console.log(`Number of grid items: ${gridCount}`);
        // Assertion: Check that the grid count is exactly 303 - 
        // This logic can be modified based on the elemnt identifies
        await expect(gridItems).toHaveCount(303);
    });
      
});

