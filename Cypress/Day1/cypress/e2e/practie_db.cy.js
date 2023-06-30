/// <reference types ='cypress' />



describe('Example to Demonstrate SQL Database Testing in Cypress', () => {

    xit('Create a Table', function () {
        const sql = 'select * from Persons;'
        cy.query(sql).then(res => {
        expect(res.affectedRows).to.equal(1) 
});
    })

    xit('Input Entries into the table', function () {
        cy.query(`INSERT INTO Persons (PersonID, FirstName, Address, City) VALUES
        (001, "John", "House No. 01", "Helsinki"),
        (002, "Pam", "House No. 02", "Espoo"),
        (003, "Dwight", "House No. 03", "Lapland"),
        (004, "Michael", "House No. 04", "Vantaa");`).then((result) => {
                expect(result.affectedRows).to.equal(4)
            })
    })

    xit('Create table', function (){
        cy.query('CREATE TABLE Orders(ord_no int, purch_amt int, ord_date DATE, customer_id int, salesman_id int)')
    })

    xit('Input Entries into the table', function () {
        cy.query(`INSERT INTO Orders (ord_no, purch_amt, ord_date, customer_id, salesman_id ) VALUES
        (7001, 150, "2012-10-05", 3005, 5002),
        (7009, 150, "2012-10-05", 3005, 5002),
        (7002, 150, "2012-10-05", 3005, 5002),
        (7004, 150, "2012-10-05", 3005, 5002),
        (7007, 150, "2012-10-05", 3005, 5002),
        (7005, 150, "2012-10-05", 3005, 5002),
        (7008, 150, "2012-10-05", 3005, 5002);`).then((result) => {
                expect(result.affectedRows).to.equal(7)
            })
    })

    it('find unique salesman id', function (){
        cy.query('SELECT DISTINCT salesman_id FROM Orders;')

    })

    it('find salesman deatils where city is paris', function (){
        cy.query('select salesman_id, name, city from Salesman where city="paris"').then((result) =>{
            cy.log(result.describe)
            expect(result[0].rowCount).to.equal(1)
        })
    })
});
