
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";

describe("Add Products to Cart", () => {
  const homePage = new HomePage();
  const productsPage = new ProductsPage();
  const cartPage = new CartPage();

  it("should add two products, verify cart details, and clear the cart", () => {
    // Step 1: Open the Products page
    cy.visit("/");
    homePage.verifyHomePage();
    productsPage.openProductsPage();

    // Step 2: Add Blue Top (Product ID: 1)
    productsPage.addProductToCart(1);
    productsPage.continueShopping();

    // Step 3: Add Men Tshirt (Product ID: 2)
    productsPage.addProductToCart(2);
    productsPage.openCart();

    // Step 4: Verify cart details
    cartPage.verifyCartIsVisible();
    cartPage.verifyNumberOfProducts(2);

    cartPage.verifyProduct(1, "Blue Top", 500);
    cartPage.verifyProduct(2, "Men Tshirt", 400);

    // Step 5: Remove both products
    cartPage.removeProduct(1);
    cartPage.removeProduct(2);
    cartPage.verifyNumberOfProducts(0);
  });
});
