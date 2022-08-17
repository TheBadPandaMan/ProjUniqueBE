const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require ("https");
const { appendFile } = require("fs");

const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res){

    res.sendFile("https://github.com/TheBadPandaMan/ProjUniqueFE");

});