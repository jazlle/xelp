import React, {createContext, useState, useContext} from 'react';

const FilmCardContext = createContext({
    film: {},
});

const FilmCardProvider = () => {
    const [film, setFilmCard] = useState({});

    return (
        <FilmCardContext.Provider
            value={{film}}>
        </FilmCardContext.Provider>
    );
};

const useFilmCardContext = () => {
    if ( useContext(FilmCardContext) === undefined) {
        throw new Error('FilmListContext must be used within a Provider');
    }
    const {film} = useContext(FilmCardContext);
    return {
        film,
    };
};

export {FilmCardProvider, useFilmCardContext};
