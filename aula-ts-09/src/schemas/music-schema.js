"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.musicSchema = void 0;
var joi_1 = require("joi");
exports.musicSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    artist: joi_1.default.string().required(),
});
