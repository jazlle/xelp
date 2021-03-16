import { IFilmList } from "../Model/Domain/Film";

export const getFilmList = (): IFilmList => {
    return {filmList : [
        {
            title: 'titre',
            actors: ['acteur1', 'acteur2'],
            date: new Date(),
            id: 'id',
            meta: {},
            synopsis: 'synopsis',
        },{
            title: 'titre2',
            actors: ['acteur1', 'acteur2'],
            date: new Date(),
            id: 'id2',
            meta: {},
            synopsis: 'synopsis2',
        }
    ]} as IFilmList;
};