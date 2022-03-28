// Require Pagackes and data files
const express = require("express");
const path = require('path');
const cors = require("cors")
const http = require('http')
const appLocation = "app"

const port = process.env.PORT || 8000;
const app = express();

//Cors-policy
//the "*" makes it for all ports to bi-pass CORS Policy
app.use(cors({origin: "*",}))   // OR    //app.use(cors({origin: "http://127.0.0.1:8080",}))

//need to review
app.set('port', port)
const server = http.createServer(app)

//App use folder
app.use(express.static(appLocation))

//Terminal Message
server.listen(port, () => console.log("server has started! port: " + port) );

//App Page
//app.get("/", (req, res) => {res.send("Hello, here is your Unity WebGL game:");});
app.get("/", (req, res) => {res.sendFile(path.join(__dirname, '/'+ appLocation +'/index.html'));});


//Data Page
//app.get("/data/", (req, res) => {res.send("Hello, This is your Data Location");});
app.get("/data/", (req, res) => {res.send(data);});
