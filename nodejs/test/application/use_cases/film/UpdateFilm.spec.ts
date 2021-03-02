import { FilmRepository } from '../../../../src/infrastructure/repositories/FilmRepository/FilmRepositoryMongodb';
import { Film } from '../../../../src/domain/Film/Film';
import { updateFilm } from '../../../../src/application/use_cases/film/UpdateFilm';

const mockFilmRepository = new FilmRepository();

test('updateFilm usecase', async () => {
    // Given 
    const updatedFilm = new Film('1', 'fakeTitle', ['act1', 'act2'], new Date(2020, 12,12), {usersNote: 3, pressNote: 4}, 'fakeSynopsis');
    mockFilmRepository.merge = jest.fn(() => Promise.resolve(updatedFilm));

    // When
    const film = await updateFilm(updatedFilm, mockFilmRepository);

    // Then
    expect(mockFilmRepository.merge).toHaveBeenCalledWith(updatedFilm);
    expect(film).toEqual(updatedFilm);
})