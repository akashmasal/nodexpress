const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();
const port = 2000;

hbs.registerPartials(__dirname+"/templates/partials");
app.use(express.static(path.join(__dirname+"/templates")));
app.set("views",path.join(__dirname+"/templates/views"));
app.set("view engine","hbs");

app.get("",(req,res)=>{
    res.render("home",{
        "navtab" : "express"
    });
});
// app.get("/",(req,res)=>{
//     res.send(200,"home page");
// });

app.get("*",(req,res)=>{
    res.send(404,"PAGE NOT FOUND");
});

app.listen(port,()=>{
    console.log(`app at port ${port}`);
});