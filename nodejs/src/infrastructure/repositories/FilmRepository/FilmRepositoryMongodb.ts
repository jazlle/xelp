import FilmModel from '../../orm/mongoose/models/film';
import { Film } from '../../../domain/Film/Film';
import { IFilmRepository } from '../../../domain/Film/IFilmRepository';
import { mapFilmFromFilmModel, mapFilmModelFromFilm } from '../../utils/mapper/filmMapper';

export class FilmRepository implements IFilmRepository {

    async persist(film: Film): Promise<Film> {
        try {
            const filmModel = mapFilmModelFromFilm(film);
            await filmModel.save();
            return mapFilmFromFilmModel(filmModel);
        } catch (err) {
            Promise.reject(new Error(`persist failed : ${err}`));
        }
    }

    async delete(id: string): Promise<string> {
        try {
            await FilmModel.findByIdAndDelete(id);
            return id;
        } catch (err) {
            Promise.reject(new Error(`delete failed : ${err}`));
        }
    }

    async get(id: string): Promise<Film> {
        try {
            const filmModel = await FilmModel.findById(id);
            return mapFilmFromFilmModel(filmModel);
        } catch (err) {
            Promise.reject(new Error(`get failed : ${err}`));
        }
    }

    async merge(film: Film): Promise<Film> {
        try {
            const { id, title, actors, date, meta, synopsis } = film;
            const { usersNote, pressNote } = meta;
            const filmModel = await FilmModel.findByIdAndUpdate(id, {title, actors, date, usersNote, pressNote, synopsis});
            return mapFilmFromFilmModel(filmModel);
        } catch (err) {
            Promise.reject(new Error(`merge failed : ${err}`));
        }
    }
}