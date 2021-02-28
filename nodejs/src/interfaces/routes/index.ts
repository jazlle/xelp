import express from "express";
import FilmRouter from "./film";

const router = express.Router();

router.use("/film", FilmRouter);

export default router;