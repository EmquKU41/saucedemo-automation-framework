const { test, expect } = require('@playwright/test');
const { login } = require('../helpers/login'); //import login function helper
const { item_add } = require('../helpers/item_add'); //import login function helper


test('checkout', async ({ page }) => { //check for successful purchase after adding items to basket and checking out

    //#######MODULES##########

    //login
    await login(page); 
    //add item to basket
    await item_add(page);

    //#######MAIN##########

    //click cart button link
    await page.click(".shopping_cart_link");

    //Ensure that we entered the Cart webpage
    //checks if there's "cart" anywhere in the URL
    await expect(page).toHaveURL(/cart/); 

    //checks if there exists a text "Your Cart" on the page that is visible to user
    await expect(page.getByText("Your Cart")).toBeVisible();

    //click checkout button
    await page.click('#checkout');

    //Ensure that we entered the checkout webpage
    await expect(page).toHaveURL(/checkout/);
    await expect(page.getByText("checkout")).toBeVisible();

    //Fill in details and go to checkout
    await page.fill('#first-name','John')
    await page.fill('#last-name','Smith')
    await page.fill('#postal-code','LS6 4LN')
    await page.click('#continue')
    await page.click('#finish')

    //Ensure we're at completion webpage
    await expect(page).toHaveURL(/complete/);
    //checks if there exists a text "complete" on the page that is visible to user
    await expect(page.getByText("complete")).toBeVisible();









});