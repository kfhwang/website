var express = require("express");

server = express();

server.use(express.static("Vue_Bootstrap"));//web root

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

server.get("/contact", function(req, res){
    console.log(req.query);
    res.redirect("/");
})

server.listen(80, function(){
    console.log("Server is running at port 8080!")
})