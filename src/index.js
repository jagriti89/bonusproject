const express=require('express')
const mongoose=require('mongoose')
const route=require("./route.js")
const app=express()
app.use(express.json())
mongoose.set('strictQuery',true)
mongoose.connect("mongodb+srv://jagriti:Jaggu123@cluster0.nf3nfa7.mongodb.net/bonusfruit",{
    useNewUrlParser:true
})
.then(()=>console.log("mongodb  is connect"))
.catch(err => console.log(err))
app.use('/',route)
app.listen(3000,function(){
    console.log("running on",+3000)
})