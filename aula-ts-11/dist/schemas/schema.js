"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.schema = joi_1.default.object({
    title: joi_1.default.string().required(),
    platform: joi_1.default.string().required(),
});
