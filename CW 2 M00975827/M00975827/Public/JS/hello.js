console.log('Hello, world!');

//import express from'express';
const express = require('express');
//import pino from 'pino';
const pino = require('pino');

//can also use import{express} from 'express' instead of require;

const app = express();

app.use(express.static('public'));

const logger = pino();

const PORT=9999;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});



app.get('/M00975827', (req,res)=>{
    res.send('Hello M00975827');
});