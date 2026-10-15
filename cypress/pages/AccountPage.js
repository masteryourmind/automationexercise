
class AccountPage {
  elements = {
    accountDeletedHeading: () => cy.get('h2[data-qa="account-deleted"]'),
    continueButton: () => cy.get('[data-qa="continue-button"]'),
  };

  verifyAccountDeleted() {
    this.elements.accountDeletedHeading()
      .should("be.visible")
      .and("contain.text", "Account Deleted!");
  }

  continue() {
    this.elements.continueButton()
      .should("be.visible")
      .click();
  }
}

export default AccountPage;
