const express=require('express');
const morgan =require('morgan');
const dotenv =require('dotenv')
const app =express();

dotenv.config({path:'./config.env'});

if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'))
}
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    next();
});

app.use('/api/v1/profile' ,require('./routes/profile'));

if(process.env.NODE_ENV==='production'){
    app.use(express.static(__dirname+'/public/'));

    app.get(/.*/,(req,res)=>res.sendFile(__dirname+'/public/index.html'));
}
const port=process.env.PORT||8000
app.listen (port,()=>{
    console.log(`listening ${process.env.NODE_ENV}`)
})