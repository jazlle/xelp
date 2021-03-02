

import { Film } from '../../../../src/domain/Film/Film';
import { Meta } from '../../../../src/domain/Film/Meta';
import FilmModel from '../../../../src/infrastructure/orm/mongoose/models/film';
import { mapFilmFromFilmModel, mapFilmModelFromFilm } from '../../../../src/infrastructure/utils/mapper/filmMapper';

describe('filmMapper', () => {
    test('mapFilmModelFromFilm', async () => {
        // Given 
        const film = new Film(null, 'fakeTitle', ['act1', 'act2'], new Date(2020, 12,12), {usersNote: 3, pressNote: 4}, 'fakeSynopsis');
        const filmModel = new FilmModel({
            title: 'fakeTitle',
            actors: ['act1', 'act2'],
            date: new Date(2020, 12,12),
            meta: new Meta(3, 4), 
            synopsis: 'fakeSynopsis'
        });

        // When
        const filmModelAfterMapper = mapFilmModelFromFilm(film);
        // Then
        expect(filmModelAfterMapper.title).toEqual(filmModel.title);
        expect(filmModelAfterMapper.actors.toString()).toEqual(filmModel.actors.toString());
        expect(filmModelAfterMapper.date).toEqual(filmModel.date);
        expect(filmModelAfterMapper.meta).toEqual(filmModel.meta);
        expect(filmModelAfterMapper.synopsis).toEqual(filmModel.synopsis);
    });
    
    test('mapFilmFromFilmModel', async () => {
        // Given 
        const filmModel = new FilmModel({
            title: 'fakeTitle',
            actors: ['act1', 'act2'],
            date: new Date(2020, 12,12),
            meta: {
                usersNote: 3,
                pressNote: 4
            }, 
            synopsis: 'fakeSynopsis'
        });
        const film = new Film(filmModel.id, 'fakeTitle', ['act1', 'act2'], new Date(2020, 12,12), new Meta( 3, 4), 'fakeSynopsis');
    
        // When
        const filmAfterMapper = mapFilmFromFilmModel(filmModel);
        // Then
        expect(filmAfterMapper.id).toEqual(film.id);
        expect(filmAfterMapper.title).toEqual(film.title);
        expect(filmAfterMapper.actors.toString()).toEqual(film.actors.toString());
        expect(filmAfterMapper.date).toEqual(film.date);
        expect(filmAfterMapper.meta).toEqual(film.meta);
        expect(filmAfterMapper.synopsis).toEqual(film.synopsis);
    });    
});