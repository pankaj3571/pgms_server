const express=require('express');
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express();
app.use(cors())
const routes = require('./routes/route')
mongoose.connect('mongodb://127.0.0.1:27017/pgms',{useNewUrlParser: true,useCreateIndex: true,}).then(()=>{
    console.log('connected to database')
}).catch((err)=>{
    console.log('error',err)
})
//controller
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
//routes
app.use(routes);
app.listen(2700,(err)=>{
    if(!err){
        console.log('server running on port no 2700')
    }
    else{
        console.log('error',err)
    }
});