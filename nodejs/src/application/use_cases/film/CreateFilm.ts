import { Film } from "../../../domain/Film/Film";
import { FilmRepository } from "../../../infrastructure/repositories/FilmRepository/FilmRepositoryMongodb";

export const createFilm = (film: Film): Promise<Film> => {
    const filmRepository = new FilmRepository();

    return filmRepository.persist(film);
};