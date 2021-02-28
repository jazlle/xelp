import { Film } from './Film';

export interface IFilmRepository {
    persist(film: Film): Promise<Film>,
    delete(id: string): Promise<string>,
    get(id: string): Promise<Film>,
    merge(film: Film): Promise<Film>,
}