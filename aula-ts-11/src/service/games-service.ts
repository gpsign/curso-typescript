import gamesRepository from "../repository/games-repository";
import { CreateGame, Game } from "../protocols/game-protocol";

async function getGames() {
	const result = await gamesRepository.getGames();
	return result;
}

async function createGame(game: CreateGame) {
	if (await gameAlreadyExists(game)) {
		throw { message: "Game already exists" };
	}

	await gamesRepository.createGame(game);
}

async function gameAlreadyExists(game: CreateGame) {
	const result = await gamesRepository.getGameByTitleAndPlatform(game);
	console.log(result.rows[0]);
	if (result.rows[0] !== undefined) return true;
	else return false;
}

const gamesService = {
	getGames,
	createGame,
};

export default gamesService;
