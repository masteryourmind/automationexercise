
class AccountInformationPage {
  elements = {
    heading: () => cy.contains("b", "Enter Account Information"),

    titleMr: () => cy.get("#id_gender1"),
    nameInput: () => cy.get('[data-qa="name"]'),
    emailInput: () => cy.get('[data-qa="email"]'),
    passwordInput: () => cy.get('[data-qa="password"]'),

    dayDropdown: () => cy.get('[data-qa="days"]'),
    monthDropdown: () => cy.get('[data-qa="months"]'),
    yearDropdown: () => cy.get('[data-qa="years"]'),

    newsletterCheckbox: () => cy.get("#newsletter"),
    offersCheckbox: () => cy.get("#optin"),

    firstNameInput: () => cy.get('[data-qa="first_name"]'),
    lastNameInput: () => cy.get('[data-qa="last_name"]'),
    companyInput: () => cy.get('[data-qa="company"]'),
    addressInput: () => cy.get('[data-qa="address"]'),
    address2Input: () => cy.get('[data-qa="address2"]'),
    countryDropdown: () => cy.get('[data-qa="country"]'),
    stateInput: () => cy.get('[data-qa="state"]'),
    cityInput: () => cy.get('[data-qa="city"]'),
    zipcodeInput: () => cy.get('[data-qa="zipcode"]'),
    mobileInput: () => cy.get('[data-qa="mobile_number"]'),

    createAccountButton: () => cy.get('[data-qa="create-account"]'),
    accountCreatedHeading: () => cy.get('h2[data-qa="account-created"]'),
    continueButton: () => cy.get('[data-qa="continue-button"]'),
  };

  verifyHeading() {
    this.elements.heading().should("be.visible");
  }

  verifyPrefilledDetails(user) {
    this.elements.nameInput()
      .should("have.value", user.name);

    this.elements.emailInput()
      .should("have.value", user.email)
      .and("be.disabled");
  }

  fillAccountInformation(user) {
    this.elements.titleMr().check();

    this.verifyPrefilledDetails(user);

    this.elements.passwordInput()
      .should("be.visible")
      .type(user.password);

    this.elements.dayDropdown().select("10");
    this.elements.monthDropdown().select("5");
    this.elements.yearDropdown().select("1995");
  }

  selectSubscriptionPreferences() {
    this.elements.newsletterCheckbox()
      .check()
      .should("be.checked");

    this.elements.offersCheckbox()
      .check()
      .should("be.checked");
  }

  fillAddressInformation(user) {
    this.elements.firstNameInput().type(user.firstName);
    this.elements.lastNameInput().type(user.lastName);
    this.elements.companyInput().type(user.company);
    this.elements.addressInput().type(user.address);
    this.elements.address2Input().type(user.address2);

    this.elements.countryDropdown().select(user.country);

    this.elements.stateInput().type(user.state);
    this.elements.cityInput().type(user.city);
    this.elements.zipcodeInput().type(user.zipcode);
    this.elements.mobileInput().type(user.mobile);
  }

  createAccount() {
    this.elements.createAccountButton()
      .should("be.visible")
      .and("be.enabled")
      .click();
  }

  verifyAccountCreated() {
    this.elements.accountCreatedHeading()
      .should("be.visible")
      .and("contain.text", "Account Created!");
  }

  continue() {
    this.elements.continueButton()
      .should("be.visible")
      .click();
  }
}

export default AccountInformationPage;
