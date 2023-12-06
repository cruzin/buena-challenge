describe('Test multistep form', () => {
    it('Fills out step1', () => {
        cy.visit('http://localhost:3000')
        cy.get('input[type="firstName"]').type('John')
        cy.get('input[type="lastName"]').type('Doe')
        cy.get('input[type="email"]').type('testEmail@example.com')
    })

    it('Fills out step 2 and shows values on step 3', () => {
        cy.visit('http://localhost:3000');
        cy.get('input[type="firstName"]').type('John')
        cy.get('input[type="lastName"]').type('Doe')
        cy.get('input[type="email"]').type('testEmail@example.com')
        cy.get('button').contains('Next').click();
        cy.get("#phone").type("1234567890");
        cy.contains('3000-4000').click();
        cy.get('button').contains('Next').click();

        cy.contains('John');
        cy.contains('Doe');
        cy.contains('1234567890');
        cy.contains('3000-4000');
    });
})