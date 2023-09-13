const express = require('express');
const mongoose = require("mongoose");
const app = express();
const port = 8080;

mongoose.connect("mongodb://127.0.0.1:27017/Vendor")
.then(()=>console.log("db connected successfully"))
.catch((err)=>console.log(err));

app.get('/', (req, res) => {
    console.log('homepage');
    res.send('Homepage'); 
  });


app.listen(port, () => console.log(`Server listening at http://localhost:8080`))