let express     = require("express"),
    app         = express(),
    request     = require("request"),
    rp          = require("request-promise"),
    mongoose    = require("mongoose"),
    cheerio     = require("cheerio");

//https://codeburst.io/an-introduction-to-web-scraping-with-node-js-1045b55c63f7
//https://www.esquire.com/food-drink/restaurants/a15120/biggest-fast-food-11215111/

//Config    
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
let food_list = ["Mcdonalds", "Burger King"]

//Routes
app.get("/", (req, res) => {
    res.render("home");
});

function foodStuff() {
    food_list.forEach((entry) => {
    app.get(`/entry`, (req, res) => {
        res.render("foodPage", {food_list: food_list});
    })
});
}
foodStuff();


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("fastfood_guru up");
});