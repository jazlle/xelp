import express from "express";
import { TsoaRoute } from "tsoa";
import FilmController from '../controllers/film/FilmController';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const controller = new FilmController();
        const response = await controller.createFilm(req.body);
        return res.send(response);
    } catch (error) {
        // gestion erreur coté middleware express
        res.status(500).send({error});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const controller = new FilmController();
        const response = await controller.getFilm(req.params.id);
        return res.send(response);
    } catch (error) {
        res.status(500).send({error});
    }
});

export default router;