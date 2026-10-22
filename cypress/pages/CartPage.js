
class CartPage {
  elements = {
    cartTable: () => cy.get("#cart_info_table"),
    cartRows: () => cy.get("#cart_info_table tbody tr"),
    productRow: (productId) => cy.get(`#product-${productId}`),
    productName: (productId) =>
      cy.get(`#product-${productId} .cart_description h4 a`),
    productPrice: (productId) =>
      cy.get(`#product-${productId} .cart_price p`),
    productQuantity: (productId) =>
      cy.get(`#product-${productId} .cart_quantity button`),
    productTotal: (productId) =>
      cy.get(`#product-${productId} .cart_total_price`),
    deleteProduct: (productId) =>
      cy.get(`#product-${productId} td.cart_delete a.cart_quantity_delete`),
  };

  verifyCartIsVisible() {
    this.elements.cartTable().should("be.visible");
  }

  verifyNumberOfProducts(count) {
    this.elements.cartRows().should("have.length", count);
  }

  verifyProduct(productId, name, price) {
    this.elements.productRow(productId).should("be.visible");
    this.elements.productName(productId).should("have.text", name);
    this.elements.productPrice(productId).should("have.text", `Rs. ${price}`);
    this.elements.productQuantity(productId).should("have.text", "1");
    this.elements.productTotal(productId).should("have.text", `Rs. ${price}`);
  }

  removeProduct(productId) {
    this.elements.deleteProduct(productId).click();
    this.elements.productRow(productId).should("not.exist");
  }
}

export default CartPage;
