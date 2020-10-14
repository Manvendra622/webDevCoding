const express=require('express');
const bodyParser=require('body-parser');

const resRoutes=require('./Routes/restaurant');
const hostName='localhost';

const port=5400;
const app=express();

app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Method','GRT,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Header','Content-type,Authorization');
    next();
})

app.use('/api',resroutes);

app.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostName}:${port}/`)
})