//this function adds item to a basket, 
// contains items from cart-badge function, annotated version in /tests/cart-badge.spec.js
async function item_add(page) {
    //######FIND BACKPACK CLASS#######
    //find the class called "inventory_item" that contains text "Backpack"
    const inventoryItem = page.locator('.inventory_item', {hasText: "Backpack"});

    //in the parent class, find a button and click it
    const inventoryItemButton = inventoryItem.locator(".btn");
    await inventoryItemButton.click();
}

module.exports = { item_add }; //export as a module