const express = require("express");
const dot = require("dotenv").config();
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static(__dirname + "/public/"));

app.get("/", (req, res) => {
  res.render("home", {
    title: "Elon Musk",
  });
});

app.get("/blog", (req, res) => {
  res.render("blog", {
    title: "Elon's blog!",
    url: "/teslandbitcoin",
    url2: "/doge",
  });
});

app.get("/teslandbitcoin", (req, res) => {
  res.render("entry", {
    entry: {
      url: "teslaandbitcoin",
      title: "Tesla & Bitcoin",
      img: "./assets/teslandbitcoin.jpeg",
      p1: "Tesla has suspended vehicle purchases using Bitcoin. We are concerned about rapidly increasing use of fossil fuiles for Bitcoin mining and transactions, especially coal, which has the worst emissions of any fuel.",
      p2: "Cryptocurrency is a good idea on many levels and we believe it has a promising future, but this cannot come at great cost to the enviroment.",
    },
  });
});

app.get("/doge", (req, res) => {
  res.render("entry", {
    entry: {
      url: "doge",
      title: "SpaceX launching satellite Doge-1 to the moon next year",
      img: "./assets/elondoge.jpg",
      p1: "SpaceX will launch a satellite to the Moon next year funded entirely with the cryptocurrency Dogecoin.",
      p2: "The satellite, dubbed DOGE-1, will be launched aboard a SpaceX Falcon 9 rocket in the first quarter of 2022.",
    },
  });
});

app.listen(port, () => {
  console.log("Server listening on port:" + port);
});
