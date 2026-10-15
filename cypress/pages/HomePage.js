
class HomePage {
  elements = {
    homeLink: () => cy.contains("#header a", /^ Home$/),
    signupLoginLink: () => cy.get('#header a[href="/login"]'),
    loggedInUser: (username) => cy.contains("#header a", `Logged in as ${username}`),
    deleteAccountLink: () => cy.contains("#header a", "Delete Account"),
  };

  verifyHomePage() {
    cy.title().should("contain", "Automation Exercise");
    this.elements.homeLink().should("be.visible");
  }

  openSignupLogin() {
    this.elements.signupLoginLink()
      .should("be.visible")
      .click();
  }

  verifyLoggedInUser(username) {
    this.elements.loggedInUser(username).should("be.visible");
  }

  deleteAccount() {
    this.elements.deleteAccountLink()
      .should("be.visible")
      .click();
  }
}

export default HomePage;
