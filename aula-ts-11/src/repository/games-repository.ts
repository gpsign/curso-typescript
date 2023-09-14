import { CreateGame, Game } from "../protocols/game-protocol";
import { connection } from "../database/connection";

function getGames() {
	return connection.query<Game>(`SELECT * FROM games;`);
}

function createGame(game: CreateGame) {
	return connection.query<Game>(
		`INSERT INTO games (title, platform) VALUES ($1, $2);`,
		[game.title, game.title]
	);
}

function getGameByTitleAndPlatform(game: CreateGame) {
	return connection.query<Game>(
		`SELECT * FROM games WHERE games.title = $1 OR games.platform = $2;`,
		[game.title, game.platform]
	);
}

const gamesRepository = {
	getGames,
	getGameByTitleAndPlatform,
	createGame,
};

export default gamesRepository;
