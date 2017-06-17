const express=require("express");
const hbs=require("hbs");
const fs=require("fs");
var app=express();
hbs.registerPartials(__dirname+"/views/partial");
hbs.registerHelper("Title",(name)=>{
  return name;
})

app.use((req,res,next)=>{
  var date=new Date().toString()
  console.log(date);
  //res.render("busy.hbs")
  fs.appendFileSync("server.log","\n"+date);
  next();
})
app.use(express.static(__dirname+"/public"));
app.set("view engine","hbs");
app.get("/",(req,res)=>{
  res.send("Server Starting")
})
app.get("/",(req,res)=>{
  res.render("home.hbs",{Year});
})
app.listen(3001,()=>{
  console.log("Starting app")
})