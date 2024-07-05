describe('Dynamic Table Test', () => {
  const data = [
    { name: "Bob", age: 20, gender: "male" },
    { name: "George", age: 42, gender: "male" },
    { name: "Sara", age: 42, gender: "female" },
    { name: "Conor", age: 40, gender: "male" },
    { name: "Jennifer", age: 42, gender: "female" }
  ];

  it('should populate and validate the dynamic table', () => {
    // Step 1: Visit the URL
    cy.visit('https://testpages.herokuapp.com/styled/tag/dynamic-table.html');

    // Step 2: Click on the Table Data button
    cy.get("div[class='centered'] details summary").click();

     // Step 3: Enter data into the input text box and refresh the table
     const jsonData = JSON.stringify(data);
     cy.get('#jsondata').invoke('val', jsonData);
     cy.get('#refreshtable').click();

    // Step 4: Assert the data in the table
    cy.get('#dynamictable tr').should('have.length', data.length + 1); // +1 for the header row

    // Step 4: Assert the data in the table
    data.forEach((item, index) => {
      cy.get('#dynamictable tr').eq(index + 1).within(() => { // +1 to skip the header row
        cy.get('td').eq(0).should('have.text', item.name);
        cy.get('td').eq(1).should('have.text', item.age.toString());
        cy.get('td').eq(2).should('have.text', item.gender);
      });
    });
  });
});
