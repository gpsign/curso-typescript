"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var music_router_1 = require("./routers/music-router");
var app = (0, express_1.default)();
app.use((0, express_1.json)());
app.use(music_router_1.default);
app.listen(5000, function () {
    console.log("Server is up and running on port 5000");
});
