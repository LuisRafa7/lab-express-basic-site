const express = require("express");
const app = express();
const port = 5000;

app.use(express.static(__dirname + "/public"));

app.get("/public/stylehome.css", (req, res) => {
    res.sendFile(__dirname + "/public/stylehome.css");
});

app.get("/public/styleabout.css", (req, res) => {
    res.sendFile(__dirname + "/public/styleabout.css");
});

app.get("/public/stylegallery.css", (req, res) => {
    res.sendFile(__dirname + "/public/stylegallery.css");
});

app.get("/homepage", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html");
});

app.get("/gallery", (req, res) => {
    res.sendFile(__dirname + "/views/gallery.html");
});

app.get("/public/1.jpg", (req, res) => {
    res.sendFile(__dirname + "/public/1.jpg");
});

app.get("/public/2.jpg", (req, res) => {
    res.sendFile(__dirname + "/public/2.jpg");
});

app.get("/public/3.jpg", (req, res) => {
    res.sendFile(__dirname + "/public/3.jpg");
});

app.get("/public/4.jpg", (req, res) => {
    res.sendFile(__dirname + "/public/4.jpg");
});

app.get("/public/5.jpg", (req, res) => {
    res.sendFile(__dirname + "/public/5.jpg");
});

app.get("/public/6.jpg", (req, res) => {
    res.sendFile(__dirname + "/public/6.jpg");
});

app.get("/public/7.jpg", (req, res) => {
    res.sendFile(__dirname + "/public/7.jpg");
});

app.get("/public/paw.jpg", (req, res) => {
    res.sendFile(__dirname + "/public/paw.jpg");
});


app.listen(port, ()=>{
    console.log("connected", port);
})