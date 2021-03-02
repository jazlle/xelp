// déclarer le mock avant les import pour pouvoir gérer l'implémentation de ce dernier dans le test
const mockedUseCaseCreateFilm = jest.fn();

jest.mock('../../../../src/application/use_cases/film/CreateFilm', () => ({
    createFilm: mockedUseCaseCreateFilm,
}));

import { FilmRepository } from '../../../../src/infrastructure/repositories/FilmRepository/FilmRepositoryMongodb';
import { Film } from '../../../../src/domain/Film/Film';
import FilmController from '../../../../src/interfaces/controllers/film/FilmController';
import { Meta } from '../../../../src/domain/Film/Meta';


describe('FilmController', () => {
    afterAll(() => {
        jest.resetModules();
    });
    test('createFilm endpoint', async () => {
        // Given 
        const controller = new FilmController();
        const persistedFilm = new Film(
            '1',
            'titre',
            ['actor1', 'actor2', 'actor3'],
            new Date(2020, 12, 12),
            {
                usersNote: 3,
                pressNote: 4
            }, 
            'synopsis test'
        );
        const requestBody = {
            title: 'titre',
            actors: ['actor1', 'actor2', 'actor3'],
            date: new Date(2020, 12, 12),
            meta: {
                usersNote: 3,
                pressNote: 4
            },
            synopsis: 'synopsis test'
        };

        const buildedFilm = new Film(
            null,
            requestBody.title,
            requestBody.actors,
            requestBody.date,
            new Meta(
                requestBody.meta.usersNote,
                requestBody.meta.pressNote
            ),
            requestBody.synopsis,
        );
        mockedUseCaseCreateFilm.mockReturnValue(Promise.resolve(persistedFilm));
        // When
        const film = await controller.createFilm(requestBody);
    
        // Then
        expect(mockedUseCaseCreateFilm).toHaveBeenCalledWith(buildedFilm, expect.any(FilmRepository));
        expect(film).toEqual(persistedFilm);
    })
});