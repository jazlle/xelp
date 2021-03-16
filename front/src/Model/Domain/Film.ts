export interface IFilm {
    id: string;
    title: string;
    actors: string[];
    date: Date;
    meta: any;
    synopsis: string;
}

export interface IFilmList {
    filmList: IFilm[];
}