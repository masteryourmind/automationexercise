
class SignupPage {
  elements = {
    heading: () => cy.get(".signup-form h2"),
    nameInput: () => cy.get('[data-qa="signup-name"]'),
    emailInput: () => cy.get('[data-qa="signup-email"]'),
    signupButton: () => cy.get('[data-qa="signup-button"]'),
  };

  verifyHeading() {
    this.elements.heading()
      .should("be.visible")
      .and("contain.text", "New User Signup!");
  }

  enterSignupDetails(name, email) {
    this.elements.nameInput()
      .should("be.visible")
      .type(name);

    this.elements.emailInput()
      .should("be.visible")
      .type(email)
      .should("have.value", email);
  }

  clickSignup() {
    this.elements.signupButton()
      .should("be.enabled")
      .click();
  }
}

export default SignupPage;
