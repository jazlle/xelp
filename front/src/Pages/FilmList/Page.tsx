import { IFilmList } from '../../Model/Domain/Film'
import React from 'react';
import FilmCard from '../FilmCard/Page';

const CardListRoute: React.FC<IFilmList> = (props) => {
    return (
        <div>
            {props.filmList.map(film => <FilmCard key={film.id} {...film} />)}
        </div>
    );
};

export default CardListRoute;
