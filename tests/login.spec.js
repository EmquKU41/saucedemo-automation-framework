const { test, expect } = require('@playwright/test');


test('successful login', async ({ page }) => { //run a test "successful login" on a page
    //open saucedemo.com
    await page.goto('https://saucedemo.com/');

    //where ID = user-name, fill it with "standard_user"
    await page.fill('#user-name','standard_user');

    //password fill it with "secret_sauce"
    await page.fill('#password','secret_sauce');

    //click login
    await page.click('#login-button');

    //check if the new url has the word "inventory" meaning successful login
    await expect(page).toHaveURL(/inventory/);

});
