"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
var http_status_1 = __importDefault(require("http-status"));
var schema_1 = require("../schemas/schema");
function validate(req, res, next) {
    var validation = schema_1.schema.validate(req.body);
    if (validation.error)
        return res.sendStatus(http_status_1.default.BAD_REQUEST);
    next();
}
exports.validate = validate;
