import { Film } from "../../../domain/Film/Film";
import { FilmRepository } from "../../../infrastructure/repositories/FilmRepository/FilmRepositoryMongodb";

export const getFilm = (id: string): Promise<Film> => {
    const filmRepository = new FilmRepository();

    return filmRepository.get(id);
}