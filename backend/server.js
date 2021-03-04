import express from 'express';
import data from './data.js';

const app=express();

app.get('/',(req,res)=>{
    res.send("server is running");
})
app.get('/api/products',(req,res)=>{
    res.send(data.products);
})

const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`server on PORT  ${PORT}`);
});