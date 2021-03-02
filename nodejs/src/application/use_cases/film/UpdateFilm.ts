import { Film } from "../../../domain/Film/Film";
import { FilmRepository } from "../../../infrastructure/repositories/FilmRepository/FilmRepositoryMongodb";

export const updateFilm = (film: Film, filmRepository: FilmRepository): Promise<Film> => {
    return filmRepository.merge(film);
};