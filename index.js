const express = require('express');
const mongoose = require("mongoose");
const cors =require("cors");
const billsRoute = require("./Routes/Bills.route");
const app = express();
const port = 8080;

mongoose.connect("mongodb://127.0.0.1:27017/Vendor")
.then(()=>console.log("db connected successfully"))
.catch((err)=>console.log(err));

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  console.log('homepage');
  res.send('Homepage'); 
});


app.use("/bill", billsRoute); // Use the router for "/bill" path



app.listen(port, () => console.log(`Server listening at http://localhost:8080`))