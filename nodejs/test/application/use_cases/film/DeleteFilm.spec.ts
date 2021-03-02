import { FilmRepository } from '../../../../src/infrastructure/repositories/FilmRepository/FilmRepositoryMongodb';
import { Film } from '../../../../src/domain/Film/Film';
import { deleteFilm } from '../../../../src/application/use_cases/film/DeleteFilm';

const mockFilmRepository = new FilmRepository();

test('deleteFilm usecase', async () => {
    // Given 
    const deletedFilm = new Film('1', 'fakeTitle', ['act1', 'act2'], new Date(2020, 12,12), {usersNote: 3, pressNote: 4}, 'fakeSynopsis');
    mockFilmRepository.delete = jest.fn(() => Promise.resolve(deletedFilm.id));

    // When
    const idParam = '1';
    const idFilm = await deleteFilm(idParam, mockFilmRepository);

    // Then
    expect(mockFilmRepository.delete).toHaveBeenCalledWith(idParam);
    expect(idFilm).toEqual(deletedFilm.id);
})