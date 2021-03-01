import { Film } from '../../../domain/Film/Film';
import { Meta } from '../../../domain/Film/Meta';
import { FilmRepository } from '../../../infrastructure/repositories/FilmRepository/FilmRepositoryMongodb';
import { createFilm as createFilmUseCase } from '../../../application/use_cases/film/CreateFilm';
import { Body, Controller, Post, Route } from 'tsoa';

@Route("film")
export default class FilmController extends Controller {

    @Post()
    public async createFilm(@Body() body): Promise<Film> {
        // TODO : express-validator
        const repository = new FilmRepository();

        const film = new Film(
            null,
            body.title,
            body.actors,
            body.date,
            new Meta(
                body.meta.usersNote,
                body.meta.pressNote),
                body.synopsis,
            );

        return createFilmUseCase(film, repository);
    }
}