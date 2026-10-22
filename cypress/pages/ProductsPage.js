
class ProductsPage {
  elements = {
    productsLink: () => cy.get('#header a[href="/products"]'),
    productInfo: () => cy.get(".productinfo.text-center"),
    addToCartButton: (productId) =>
      cy.get(`a.add-to-cart[data-product-id="${productId}"]`),
    cartModal: () => cy.get("#cartModal"),
    continueShoppingButton: () => cy.get("#cartModal .close-modal"),
    viewCartLink: () => cy.get('#cartModal a[href="/view_cart"]'),
  };

  openProductsPage() {
    this.elements.productsLink().should("be.visible").click();
    cy.url().should("include", "/products");
  }

  addProductToCart(productId) {
    this.elements.addToCartButton(productId)
      .last()
      .click({ force: true });

    this.elements.cartModal().should("be.visible");
  }

  continueShopping() {
    this.elements.continueShoppingButton().should("be.visible").click();
    this.elements.cartModal().should("not.be.visible");
  }

  openCart() {
    this.elements.viewCartLink().should("be.visible").click();
    cy.url().should("include", "/view_cart");
  }
}

export default ProductsPage;
