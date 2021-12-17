var express = require("express");
var bodyParser = require("body-parser");


server = express();

server.use(express.static("Vue_Bootstrap"));//web root
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());

var DB = require("nedb-promises");
var Users = DB.create("users.db")
var Contact = DB.create("contact.db")

server.get("/portfolio", function(req, res){
    portfolios= [
        { href: "#portfolioModal1", imgSrc: "img/portfolio/roundicons.png", title: "Round Icons", text: "Graphic Design" },
        { href: "#portfolioModal2", imgSrc: "img/portfolio/startup-framework.png", title: "Startup Framework", text: "Website Design" },
        { href: "#portfolioModal3", imgSrc: "img/portfolio/treehouse.png", title: "Treehouse", text: "Website Design" },
        { href: "#portfolioModal1", imgSrc: "img/portfolio/roundicons.png", title: "Round Icons", text: "Graphic Design" },
        { href: "#portfolioModal2", imgSrc: "img/portfolio/startup-framework.png", title: "Startup Framework", text: "Website Design" },
        { href: "#portfolioModal3", imgSrc: "img/portfolio/treehouse.png", title: "Treehouse", text: "Website Design" }
    ]
   res.send(portfolios);
})

server.get("/users", function(req, res){
    Users.find({}).then( (result)=>{
        res.send(result);
    } )
})

server.get("/contact", function(req, res){
    console.log(req.query);
    res.redirect("/");
})

server.post("/contact_me", function(req, res){
    console.log(req.body);
    //check 
    Contact.insert(req.body);
    res.end()
})

server.listen(80, function(){
    console.log("Server is running at port 8080!")
})