"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.get("/health", function (req, res) {
    return res.status(200).send("I'm Ok!");
});
app.get("/today", function (req, res) {
    res.send({
        today: new Date().toLocaleDateString("pt-br"),
    });
});
var port = process.env.PORT || 5000;
app.listen(port, function () { return console.log("Server is up and running on port ".concat(port)); });
