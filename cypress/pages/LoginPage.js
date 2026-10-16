
class LoginPage {
  elements = {
    heading: () => cy.get(".login-form h2"),
    emailInput: () => cy.get('[data-qa="login-email"]'),
    passwordInput: () => cy.get('[data-qa="login-password"]'),
    loginButton: () => cy.get('[data-qa="login-button"]'),
    errorMessage: () => cy.get(".login-form form p"),
  };

  verifyHeading() {
    this.elements.heading()
      .should("be.visible")
      .and("contain.text", "Login to your account");
  }

  enterCredentials(email, password) {
    this.elements.emailInput()
      .should("be.visible")
      .type(email);

    this.elements.passwordInput()
      .should("be.visible")
      .type(password, { log: false });
  }

  clickLogin() {
    this.elements.loginButton()
      .should("be.visible")
      .and("be.enabled")
      .click();
  }

  verifyInvalidCredentialsMessage() {
    this.elements.errorMessage()
      .should("be.visible")
      .and("contain.text", "Your email or password is incorrect!");
  }

  login(email, password) {
    this.enterCredentials(email, password);
    this.clickLogin();
  }
}

export default LoginPage;
