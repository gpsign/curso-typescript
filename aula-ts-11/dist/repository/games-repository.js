"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = require("../database/connection");
function getGames() {
    return connection_1.connection.query("SELECT * FROM games;");
}
function createGame(game) {
    return connection_1.connection.query("INSERT INTO games (title, platform) VALUES ($1, $2);", [game.title, game.title]);
}
function getGameByTitleAndPlatform(game) {
    return connection_1.connection.query("SELECT * FROM games WHERE games.title = $1 OR games.platform = $2;", [game.title, game.platform]);
}
var gamesRepository = {
    getGames: getGames,
    getGameByTitleAndPlatform: getGameByTitleAndPlatform,
    createGame: createGame,
};
exports.default = gamesRepository;
