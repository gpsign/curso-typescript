import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { schema } from "../schemas/schema";

export function validate(req: Request, res: Response, next: NextFunction) {
	const validation = schema.validate(req.body);
	if (validation.error) return res.sendStatus(httpStatus.BAD_REQUEST);
    next();
}
