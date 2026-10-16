
import HomePage from "../pages/HomePage";
import SignupPage from "../pages/SignupPage";
import AccountInformationPage from "../pages/AccountInformationPage";
import AccountPage from "../pages/AccountPage";
import { createRegistrationUser } from "../helpers/userFactory";

describe("Automation Exercise - User Registration", () => {
  const homePage = new HomePage();
  const signupPage = new SignupPage();
  const accountInformationPage = new AccountInformationPage();
  const accountPage = new AccountPage();

  let user;

  beforeEach(() => {
    cy.fixture("registrationUser").then((defaults) => {
      user = createRegistrationUser(defaults);
    });
  });

  it("should register a new user, verify login, and delete the account", () => {
    // Step 1: Open and verify the home page
    cy.visit("/");
    homePage.verifyHomePage();

    // Step 2: Navigate to Signup/Login
    homePage.openSignupLogin();
    signupPage.verifyHeading();

    // Step 3: Enter signup details
    signupPage.enterSignupDetails(user.name, user.email);
    signupPage.clickSignup();

    // Step 4: Fill in account information
    accountInformationPage.verifyHeading();
    accountInformationPage.fillAccountInformation(user);
    accountInformationPage.selectSubscriptionPreferences();
    accountInformationPage.fillAddressInformation(user);

    // Step 5: Create and verify the account
    accountInformationPage.createAccount();
    accountInformationPage.verifyAccountCreated();
    accountInformationPage.continue();

    // Step 6: Verify the user is logged in
    homePage.verifyLoggedInUser(user.name);

    // Step 7: Delete the account
    homePage.deleteAccount();
    accountPage.verifyAccountDeleted();

  });
});
