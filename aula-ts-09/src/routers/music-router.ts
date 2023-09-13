import { Router } from "express";
import musicController from "../controllers/music-controller";
import { validate } from "../middlewares/validateMusic.middleware";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", validate, musicController.createMusic);

export default musicRouter;
