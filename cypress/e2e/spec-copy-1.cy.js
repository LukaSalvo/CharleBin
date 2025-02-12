describe("CharleBin Paste Test", () => {
    it("should create a paste, retrieve it, enter the password, and verify the message", () => {
        cy.visit("http://localhost:8088/");
        cy.get("#passwordinput").clear('');
        cy.get("#message").type("Ceci est un test");
        cy.get("#passwordinput").type("monMotDePasse");
        cy.get("#sendbutton").click();
        cy.wait(100);

        cy.get("#pasteurl").click();
        cy.get("#passworddecrypt").clear("monMotDePasse");
        cy.get("#passworddecrypt").type("monMotDePasse");

        cy.get("#passwordform >.btn").click();
        cy.get("#prettyprint").should("have.text", "Ceci est un test");
        cy.get('img').click();

    });
});