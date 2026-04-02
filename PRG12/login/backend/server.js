const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const products = [
    { id: 1, name: "Laptop", price: 60000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 }
];
app.get("/products", (req, res) => {
    res.json(products);
});
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
