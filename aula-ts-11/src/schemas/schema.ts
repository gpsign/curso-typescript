import Joi from "joi";
import { CreateGame } from "protocols/game-protocol";

export const schema = Joi.object<CreateGame>({
	title: Joi.string().required(),
	platform: Joi.string().required(),
});
