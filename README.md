# Cypress Automation Framework — Automation Exercise

## Overview

This project is a UI test automation framework built using **Cypress and JavaScript** to automate key user journeys on the [Automation Exercise](https://automationexercise.com/) website.

The goal of this project is to demonstrate practical QA automation skills, including end-to-end testing, Page Object Model (POM), reusable page methods, assertions, and test organization.

## Tech Stack

- **Automation Tool:** Cypress
- **Programming Language:** JavaScript
- **Test Framework:** Mocha (built into Cypress)
- **Design Pattern:** Page Object Model (POM)
- **Test Website:** [Automation Exercise](https://automationexercise.com/)
- **Version Control:** Git and GitHub

## Automated Test Scenarios

The project currently covers the following scenarios:

### User Registration
- Verify successful user registration.
- Validate account creation and account information.
- Verify the user can delete their account after registration.

### Login and Logout
- Verify login with valid credentials.
- Verify login with invalid credentials.
- Verify successful logout.

### Duplicate User Registration
- Verify registration is prevented when an email address is already registered.
- Verify the appropriate error message is displayed.

### Products and Shopping Cart
- Navigate to the Products page.
- Add products to the cart using their product IDs.
- Verify product names, prices, quantities, and line totals.
- Remove products from the cart and verify the cart is empty.

## Project Structure

```text
cypress/
├── e2e/
│   ├── registration.cy.js
│   ├── login.cy.js
│   ├── duplicateUserRegistration.cy.js
│   └── addProductsToCart.cy.js
├── fixtures/
│   ├── registrationUser.json
│   └── loginUser.json
├── helpers/
│   └── userFactory.js
├── pages/
│   ├── HomePage.js
│   ├── SignupPage.js
│   ├── AccountInformationPage.js
│   ├── AccountPage.js
│   ├── LoginPage.js
│   ├── ProductsPage.js
│   └── CartPage.js
└── support/
    └── e2e.js
```

**Folder descriptions:**

- `e2e/` — Contains test specifications organized by feature.
- `fixtures/` — Stores reusable test data.
- `helpers/` — Contains reusable utilities, such as test-user data generation.
- `pages/` — Contains page objects, selectors, and page interaction methods.
- `support/` — Contains Cypress support configuration and shared setup.

## Framework Design

The project follows the **Page Object Model (POM)** to separate test scenarios from page-specific interactions.

- **Page objects** encapsulate selectors and reusable actions.
- **Test specifications** describe the business scenario and its assertions.
- **Fixtures** provide reusable test data.
- **Helper functions** reduce duplication when generating test data.

This structure improves readability, maintainability, and reusability as additional test scenarios are introduced.

## Prerequisites

Install the following before running the tests:

- Node.js
- npm
- Git

## Installation

Clone the repository:

```bash
git clone https://github.com/masteryourmind/automationexercise.git
```

Navigate to the project directory:

```bash
cd automationexercise
```

Install dependencies:

```bash
npm install
```

## Running Tests

### Open Cypress Test Runner

```bash
npx cypress open
```

### Run all tests in headless mode

```bash
npx cypress run
```

### Run a specific test

For example, to run the shopping cart test:

```bash
npx cypress run --spec "cypress/e2e/add-products-to-cart.cy.js"
```

To run the registration test:

```bash
npx cypress run --spec "cypress/e2e/registration.cy.js"
```

## Test Data and Configuration

The base URL is configured in `cypress.config.js`:

```javascript
module.exports = {
  e2e: {
    baseUrl: "https://automationexercise.com",
  },
};
```

Tests can navigate to the website using:

```javascript
cy.visit("/");
```

Registration tests use generated user details to reduce duplicate-email conflicts. Login tests require valid credentials for an existing test account configured in the relevant fixture.

**Important:** Use test accounts and credentials intended for automation. Do not commit passwords, tokens, or other sensitive credentials to a public repository.

## Future Improvements

Potential improvements include:

- Add more negative and edge-case scenarios.
- Introduce API testing using Cypress or Postman.
- Integrate automated test execution into a CI/CD pipeline.
- Publish test reports and screenshots as build artifacts.
- Improve test-data management and environment configuration.
- Expand reusable page objects as the application coverage grows.

## Author

QA Automation Portfolio Project

Built to demonstrate hands-on experience in Cypress, JavaScript, UI automation, test design, and maintainable automation frameworks.
