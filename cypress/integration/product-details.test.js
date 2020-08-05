describe('Product details test', () => {
  beforeEach(() => {
    const horondi = {
      accessToken: null,
      _id: null,
      wishlist: [],
      language: 0,
      cart: []
    };
    localStorage.setItem('horondi', JSON.stringify(horondi));
  });

  it('product info should be visible', () => {
    cy.visit('/backpacks/c3a84a5b9866c30390366168');
    cy.contains('Ролтоп сірий 1');
    cy.contains('Опис продукту');
    cy.contains('Внутрішній матеріал');
    cy.contains('Основна тканина');
    cy.contains('Довжина лямок');
    cy.contains('Ціна');
    cy.contains(`Об'єм`);
    cy.contains('Вага');
    cy.contains('Колір');
    cy.contains('Візерунок');
  });

  it(`throw an error if size isn't selected`, () => {
    cy.contains('В кошик').click();
    cy.contains('Виберіть розмір продукту');
  });

  it('should add and remove product wishful', () => {
    cy.get('#wishful')
      .click()
      .should(() => {
        expect(
          JSON.parse(localStorage.getItem('horondi')).wishlist
        ).to.have.length(1);
      });
    cy.get('#wishful')
      .click()
      .should(() => {
        expect(
          JSON.parse(localStorage.getItem('horondi')).wishlist
        ).to.have.length(0);
      });
  });

  it('should add product to cart', () => {
    cy.get('#sizes').click();
    cy.contains('В кошик')
      .click()
      .should(() => {
        expect(JSON.parse(localStorage.getItem('horondi')).cart).to.have.length(
          1
        );
      });
  });

  it('should redirect to checkout page', () => {
    cy.get('#sizes').click();
    cy.contains('Купити зараз').click().url().should('include', '/checkout');
  });

  it('should change price when pocket checked', () => {
    cy.visit('/backpacks/c3a84a5b9866c30390366168');
    cy.contains('Кишеня').click();
    cy.get('#price').contains('1550');
    cy.contains('Кишеня').click();
    cy.get('#price').contains('1450');
  });

  it('should change price when bag bottom selected', () => {
    cy.get('#productSelect').click();
    cy.contains('Натуральна шкіра').click();
    cy.get('#price').contains('1800');
    cy.get('#productSelect').click();
    cy.contains('Жоден').click();
    cy.get('#price').contains('1450');
  });
});
