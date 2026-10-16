
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

describe("Automation Exercise - Login", () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();

  it("should log in with valid credentials", () => {
    cy.fixture("loginUser").then((user) => {
      // Step 1: Open and verify the home page
      cy.visit("/");
      homePage.verifyHomePage();

      // Step 2: Navigate to Signup/Login
      homePage.openSignupLogin();
      loginPage.verifyHeading();

      // Step 3: Log in with valid credentials
      loginPage.login(user.email, user.password);

      // Step 4: Verify successful login
      homePage.verifyLoggedInUser(user.name);
    });
  });

  it("should display an error for invalid credentials", () => {
    cy.fixture("loginUser").then((user) => {
      // Step 1: Open the login page
      cy.visit("/");
      homePage.openSignupLogin();
      loginPage.verifyHeading();

      // Step 2: Enter an incorrect password
      loginPage.login(user.email, `${user.password}_wrong`);

      // Step 3: Verify the error message
      loginPage.verifyInvalidCredentialsMessage();
    });
  });


  it("should log out successfully after logging in", () => {
    cy.fixture("loginUser").then((user) => {
      // Step 1: Open the application
      cy.visit("/");

      // Step 2: Navigate to Login
      homePage.openSignupLogin();
      loginPage.verifyHeading();

      // Step 3: Log in with valid credentials
      loginPage.login(user.email, user.password);

      // Step 4: Verify the user is logged in
      homePage.verifyLoggedInUser(user.name);

      // Step 5: Log out
      homePage.logout();

      // Step 6: Verify logout redirects to the login page
      cy.url().should("include", "/login");
      loginPage.verifyHeading();
    });
  });


});
