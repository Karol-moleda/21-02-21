const functions = require("./functions")
const express=require("express");
const path=require("path")
const app=express();
const port=process.env.PORT || 3000;

app.set("view engine","hbs");
app.use("/assets",express.static(path.join(__dirname,"./assets")));
app.use("/js",express.static(path.join(__dirname,"./js")));

app.get("/",function(req,res){
    res.render("index", {
        pageTitle:"Zajęcia 27.02",
        subTitle:functions.someText,
        subsubTitle:functions.someFunction
    })
});

app.get("/about", function(req,res){
    res.render("about",{
    mainName :"Karol Molęda"})
})
app.listen(port,(err)=>{
    if (err){return console.log(`wystąpił błąd ${err}`)}
    console.log(`aplikacja działa na porcie ${port}`)
});