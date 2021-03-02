import { Film } from '../../../domain/Film/Film';
import { Meta } from '../../../domain/Film/Meta';
import { FilmRepository } from '../../../infrastructure/repositories/FilmRepository/FilmRepositoryMongodb';
import { createFilm as createFilmUseCase } from '../../../application/use_cases/film/CreateFilm';
import { getFilm as getFilmUseCase } from '../../../application/use_cases/film/GetFilm';
import { Body, Controller, Post, Route, Get } from 'tsoa';

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

    @Get()
    public async getFilm(id: string): Promise<Film> {
        const repository = new FilmRepository();

        return getFilmUseCase(id, repository);
    }
}