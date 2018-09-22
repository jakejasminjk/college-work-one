let express = require("express"),
    app = express(),
    request= require("request"),
    mongoose = require("mongoose");
    

//Config    
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
let food_list = ["Mcdonalds", "Burger King"]

//Routes
app.get("/", (req, res) => {
    res.render("home");
});

(foodStuff) => {
    food_list.forEach((entry) => {
    app.get("entry", (req, res) => {
        res.render("food page", {food_list: food_list});
    })
});

}

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("fastfood_guru up");
});