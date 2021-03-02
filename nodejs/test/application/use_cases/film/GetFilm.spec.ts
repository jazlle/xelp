import { FilmRepository } from '../../../../src/infrastructure/repositories/FilmRepository/FilmRepositoryMongodb';
import { Film } from '../../../../src/domain/Film/Film';
import { getFilm } from '../../../../src/application/use_cases/film/GetFilm';

const mockFilmRepository = new FilmRepository();

test('getFilm usecase', async () => {
    // Given 
    const recoveredFilm = new Film('1', 'fakeTitle', ['act1', 'act2'], new Date(2020, 12,12), {usersNote: 3, pressNote: 4}, 'fakeSynopsis');
    mockFilmRepository.get = jest.fn(() => Promise.resolve(recoveredFilm));

    // When
    const idParam = '1';
    const film = await getFilm(idParam, mockFilmRepository);

    // Then
    expect(mockFilmRepository.get).toHaveBeenCalledWith(idParam);
    expect(film).toEqual(recoveredFilm);
})