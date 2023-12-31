"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.musicSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.musicSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    artist: joi_1.default.string().required(),
});
