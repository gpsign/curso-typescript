"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
var music_schema_1 = require("../schemas/music-schema");
function validate(req, res, next) {
    var validate = music_schema_1.musicSchema.validate(req.body);
    if (validate.error)
        throw validate.error;
    next();
}
exports.validate = validate;
