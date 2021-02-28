import FilmModel from '../../orm/mongoose/models/film';
import { Film } from '../../../domain/Film/Film';
import { Meta } from '../../../domain/Film/Meta';
import { IFilmModel } from '../../orm/mongoose/models/film';

export const mapFilmModelFromFilm = (film: Film): IFilmModel => { 
    const { title, actors, date, meta, synopsis } = film;
    return new FilmModel({ title, actors, date, meta, synopsis });
}

export const mapFilmFromFilmModel = (filmModel: IFilmModel): Film => {
    return new Film(filmModel.id, filmModel.title, filmModel.actors, filmModel.date, new Meta(filmModel.meta.usersNote, filmModel.meta.pressNote), filmModel.synopsis);
}