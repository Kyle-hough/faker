const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

//class 
class User {
    constructor(){
        this.password = faker.internet.password()
        this.email = faker.internet.email()
        this.phoneNumber = faker.phone.phoneNumber()
        this.lastName = faker.name.lastName()
        this.firstName = faker.name.firstName()
        this._id = faker.datatype.string(5)
    }
}

class Company {
    constructor(){
        this._id = faker.datatype.string(5)
        this.name = faker.name.firstName()
        this.address = {street:faker.address.streetAddress(), city: faker.address.city(), state: faker.address.stateAbbr(), zip: faker.address.zipCode(), country: faker.address.country()}
    }
}


app.get("/api/users/new", (req, res) => {
    const newUser = new User()
    res.json(newUser)
})

app.get("/api/companies/new", (req, res) => {
    const newCompany = new Company()
    res.json(newCompany)
})

app.get("/api/user/company", (req, res) => {
    const newUser = new User()
    const newCompany = new Company()
    res.json({newUser, newCompany})
})
app.listen(8000, () => console.log('listening on http://localhost:8000'))