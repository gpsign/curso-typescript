import { NextFunction, Request, Response } from "express";
import{ musicSchema }from "../schemas/music-schema";

export function validate(req: Request, res: Response, next: NextFunction) {
	const validate = musicSchema.validate(req.body);

	if (validate.error) throw validate.error;

	next();
}
