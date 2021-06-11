const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(express.json())
app.use(cors());

app.get('/api/hello' , (req , res)=>{
    res.json('hello from my awesome server hehehehe')
})

app.post('/api/name' , (req , res)=>{
    let name = req.body.name;
    res.json(`Hello my name is ${name} Reaza`)

})

app.listen(port, ()=>{
    console.log("Esta wea jala en el puerto: ", port)
})