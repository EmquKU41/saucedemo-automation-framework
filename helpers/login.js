//this is the login function, annotated version in tests/login.spec.js 
const { expect } = require('@playwright/test');

async function login(page) {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL(/inventory/); //ensures the new page is inventory
}

module.exports = { login }; //export as a module