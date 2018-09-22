let express = require("express"),
    app = express(),
    mongoose = require("mongoose");
    

//Config    
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//Routes
app.get("/", (req, res) => {
    res.render("home");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("fastfood_guru up");
});