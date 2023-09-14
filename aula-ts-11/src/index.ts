import express, { Request, Response, json } from "express";
import { CreateGame, Game } from "./protocols/game-protocol";
import gamesService from "./service/games-service";
import httpStatus from "http-status";
import { validate } from "./middlewares/validate";

const app = express();
app.use(json());

app.post("/games", validate, async (req: Request, res: Response) => {
	const body = req.body as CreateGame;
	try {
		await gamesService.createGame(body);
		res.sendStatus(httpStatus.CREATED);
	} catch (error) {
		console.log(error);
		res.sendStatus(httpStatus.CONFLICT);
	}
});

app.get("/games", async (req: Request, res: Response) => {
	const games = await gamesService.getGames();
	res.send(games.rows);
});

app.listen(5000, () => console.log(`Server is up and running or port 5000`));
