import express from "express";
const app=express();
import fetch from "node-fetch";

app.use(express.json());

app.post("/api",async(req,res)=>{
    const city=req.body.city;
    
    const resp=await fetch(`https://api.weatherapi.com/v1?key=84656578ef6545b0b7c163542220703&q=${city}`);
    const data=await resp.json();
    res.send(data);
})

const PORT=process.env.PORT || 3000;
app.listen(PORT,(req,res)=>{
    console.log(`Server running at port ${PORT}`);
})