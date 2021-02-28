import { Film } from "../../../domain/Film/Film";
import { FilmRepository } from "../../../infrastructure/repositories/FilmRepository/FilmRepositoryMongodb";

export const getFilm = (id: string, filmRepository: FilmRepository): Promise<Film> => {
    return filmRepository.get(id);
}