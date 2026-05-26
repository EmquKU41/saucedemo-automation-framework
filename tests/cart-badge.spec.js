const { test, expect } = require('@playwright/test');
const { login } = require('../helpers/login'); //import login function helper


test('shopping cart badge value', async ({ page }) => { //check if after adding a BACKPACK to cart, the number at the badge increases
    
    //########MODULES#######

    //login
    await login(page);

    //######MAIN#######

    //find the class called "inventory_item" that contains text "Backpack"
    const inventoryItem = page.locator('.inventory_item', {hasText: "Backpack"});

    //in the parent class, find a button and click it
    const inventoryItemButton = inventoryItem.locator(".btn");
    await inventoryItemButton.click();

    //#####find shopping cart icon text and check values#####
    const cartBadge = page.locator('.shopping_cart_badge'); //finds the shopping cart badge
    await expect(cartBadge).toHaveText('1'); //checks if value inside is == 1


});