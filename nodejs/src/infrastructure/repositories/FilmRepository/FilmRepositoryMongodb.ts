import FilmModel from '../../orm/mongoose/models/film';
import { Film } from '../../../domain/Film/Film';
import { IFilmRepository } from '../../../domain/Film/IFilmRepository';
import { mapFilmFromFilmModel, mapFilmModelFromFilm } from '../../utils/mapper/filmMapper';

export class FilmRepository implements IFilmRepository {

    async persist(film: Film): Promise<Film> {
        const filmModel = mapFilmModelFromFilm(film);
        await filmModel.save();
        return mapFilmFromFilmModel(filmModel);
    }

    async delete(id: string): Promise<string> {
        await FilmModel.findByIdAndDelete(id);
        return id;
    }

    async get(id: string): Promise<Film> {
        const filmModel = await FilmModel.findById(id);
        return mapFilmFromFilmModel(filmModel);
    }

    async merge(film: Film): Promise<Film> {
        const { id, title, actors, date, meta, synopsis } = film;
        const { usersNote, pressNote } = meta;
        const filmModel = await FilmModel.findByIdAndUpdate(id, {title, actors, date, usersNote, pressNote, synopsis});
        return mapFilmFromFilmModel(filmModel);
    }
}