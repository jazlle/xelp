import { FilmRepository } from "../../../infrastructure/repositories/FilmRepository/FilmRepositoryMongodb";

export const deleteFilm = (id: string, filmRepository: FilmRepository): Promise<string> => {
    return filmRepository.delete(id);
}