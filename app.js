import express from "express";
const app=express();
const api="api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=487d8110cba67e50afc9b4200b40c7be";
import fetch from "node-fetch";

app.use(express.json());

app.post("/api",async(req,res)=>{
    const city=req.body.city;
    
    const resp=await fetch(api);
    const data=await resp.json();
    res.send(data);
})

const PORT=process.env.PORT || 3000;
app.listen(PORT,(req,res)=>{
    console.log(`Server running at port ${PORT}`);
})