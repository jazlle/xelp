import {useHome} from './useHome';
import React from 'react';
import FilmList from '../FilmList/Page';
import { FilmListProvider } from '../../Context/FilmList';
import './Home.css';

const HomeRoute: React.FC = () => {
    const {filmList} = useHome();
    return (
        <>
            <FilmList {...filmList}/>
        </>
    );
};

export default HomeRoute;
