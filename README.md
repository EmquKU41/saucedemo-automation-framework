# Playwright Saucedemo Automation

E2E web automation testing project built with Playwright and Javascript.

The project focuses on demonstrating simple user flows, such as login, cart checking, and checkout of Saucedemo website.

---

Technologies used:
- Playwright
- JavaScript
- Node.js

---

## Test cases

### Login
- Valid login
- Invalid login validation

### Cart
- Add product to cart
- Verify cart badge count updates correctly

### Checkout
- Complete checkout process
- Verify successful order completion

---

## Project Structure

```
helpers/
│── login.js
│── item_add.js

tests/
│── login.spec.js
│── cart-badge.spec.js
│── checkout.spec.js

playwright.config.ts
package.json
README.md
```

## Installation

install node.js

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Running tests

un all tests:

```bash
npx playwright test
```

run tests with opened browsing:

```bash
npx playwright test --headed
```

HTML report:

```bash
npx playwright show-report
```
## Features

- Organized test structure
- HTML test reporting
- Using helpers

