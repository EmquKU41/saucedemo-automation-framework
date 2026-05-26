const { test, expect } = require('@playwright/test');
const { login } = require('../helpers/login'); //import login function helper
const { item_add } = require('../helpers/item_add'); //import login function helper


test('checkout', async ({ page }) => { //check for successful purchase after adding items to basket and checking out

    //#######MODULES##########

    //login
    await login(page); 
    //add item to basket
    await item_add(page);

    //#######CODE##########

    //click cart button link
    await page.click(".shopping_cart_link");

    //checks if there's "cart" anywhere in the URL
    await expect(page).toHaveURL(/cart/); 

    //checks if there exists a text "Your Cart" on the page that is visible to user
    await expect(page.getByText("Your Cart")).toBeVisible();

});