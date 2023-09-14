import e, { json } from "express";
import musicRouter from "./routers/music-router";

const app = e();

app.use(json());
app.use(musicRouter);

app.listen(5000, () => {
	console.log(`Server is up and running on port 5000`);
});
