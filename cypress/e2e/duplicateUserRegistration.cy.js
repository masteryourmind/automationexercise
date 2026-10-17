
import HomePage from "../pages/HomePage";
import SignupPage from "../pages/SignupPage";

describe("Duplicate User Registration", () => {
  const homePage = new HomePage();
  const signupPage = new SignupPage();

  it("should display an error when registering with an existing email", () => {
    // Step 1–2: Launch browser and navigate to the home page
    cy.visit("/");

    // Step 3: Verify that the home page is visible
    homePage.verifyHomePage();

    // Step 4: Click Signup / Login
    homePage.openSignupLogin();

    // Step 5: Verify New User Signup! is visible
    signupPage.verifyHeading();

    // Step 6: Enter the existing name and email address
    signupPage.enterSignupDetails(
      "Automation Test",
      "automationtest@auto.com"
    );

    // Step 7: Click Signup
    signupPage.clickSignup();

    // Step 8: Verify duplicate email error
    signupPage.verifyDuplicateEmailError();
  });
});
