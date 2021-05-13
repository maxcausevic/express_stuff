const express = require("express");
const { company } = require("faker");
const faker = require("faker");
const port = 8000;
const app = express();

class User {
    constructor() {
        this.id = faker.random.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();

    }
}

class Company {
    constructor() {
        this.id = faker.random.uuid();
        this.address = faker.address.streetAddress();
        this.street = faker.address.streetName();
        this.city = faker.address.cityName();
        this.state = faker.address.state();
        this.zipcode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "hello" });
});

app.get("/api/user/new", (req, res) => {
    res.json({ user: new User()})
})

app.get("/api/company/new", (req, res) =>{
    res.json({ company: new Company()})
})

app.get("/api/user/company", (req, res) =>{
    res.json({user: new User(), company: new Company()})
})
// app.get("/api/user/:id", (req, res) => {
//     res.json({ result: user[req.params.id] })
// })

// app.post("/api/user", (req, res) => {
//     user.push(req.body)
//     res.json({ msg: "posted" })
// })

// app.put("/api/user/:id", (req, res) => {
//     console.log(req.params.id)
//     user[req.params.id] = req.body
//     res.json({ msg: "updated!" })
// })

// app.delete("/api/user/:id", (req, res) => {
//     user.splice(req.params.id)
// })

app.listen(port, () => console.log(`Listening on port ${port}`));
