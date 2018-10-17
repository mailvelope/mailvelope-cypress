describe('Mailvelope demo is up', () => {
  it('Visit the mailvelope demo site', () => {
    cy.visit('https://demo.mailvelope.com');
    cy.contains('Start unit tests')
      .click();
    cy.url().should('include', '/unit');
  });
});
