import { FilmRepository } from '../../../../src/infrastructure/repositories/FilmRepository/FilmRepositoryMongodb';
import { Film } from '../../../../src/domain/Film/Film';
import { Meta } from '../../../../src/domain/Film/Meta';
import { createFilm } from '../../../../src/application/use_cases/film/CreateFilm';

const mockFilmRepository = new FilmRepository();

test('createFilm usecase', async () => {
    // Given 

    const persistedFilm = new Film('1', 'fakeTitle', ['act1', 'act2'], new Date(2020, 12,12), {usersNote: 3, pressNote: 4}, 'fakeSynopsis');
    mockFilmRepository.persist = jest.fn(() => Promise.resolve(persistedFilm));

    // When
    const filmParam = new Film(null, 'fakeTitle', ['act1', 'act2'], new Date(2020, 12,12), {usersNote: 3, pressNote: 4}, 'fakeSynopsis')
    const film = await createFilm(filmParam, mockFilmRepository);

    // Then
    expect(mockFilmRepository.persist).toHaveBeenCalledWith(filmParam);
    expect(film).toEqual(persistedFilm);
})