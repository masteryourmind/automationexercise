describe("Automation Exercise - Home Page", () => {

  it("should load the home page", () => {
    cy.visit("/");
    cy.title().should("contain", "Automation Exercise");
  });

});