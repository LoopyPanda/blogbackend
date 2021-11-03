const express = require('express');
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3001;
const pool = require("./client");
const cors = require('cors');
const path = require('path')

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

//router for joing two table
app.get("/api/blog", (req,res) => {
    console.log("fjkshjsf");
    pool.query('SELECT * FROM authors JOIN posts ON authors.id = posts.author_id')
    // SELECT * FROM authors JOIN posts ON authors.authors.id = posts.author_id
    // Xoli = SELECT ID, authors.Name, authors.Email FROM authors INNER JOIN posts ON authors.id = posts.id
    .then((data) => res.json(data.rows))                                                                                                        
    .catch((err) => {
        console.log(err);
        res.sendStatus(500)});
});

//home router
app.get("/",(req,res) =>{
    res.send("Welcome to our Blog");
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
