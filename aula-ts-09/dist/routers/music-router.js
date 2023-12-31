"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var music_controller_1 = __importDefault(require("../controllers/music-controller"));
var validateMusic_middleware_1 = require("../middlewares/validateMusic.middleware");
var musicRouter = (0, express_1.Router)();
musicRouter.get("/musics", music_controller_1.default.getMusics);
musicRouter.post("/musics", validateMusic_middleware_1.validate, music_controller_1.default.createMusic);
exports.default = musicRouter;
