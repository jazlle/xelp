import React, {createContext, useState, useContext} from 'react';

const FilmListContext = createContext({
    filmList: [],
});

const FilmListProvider = ({children}: any) => {
    const [filmList, setFilmList] = useState([]);

    return (
        <FilmListContext.Provider
            value={{filmList}}>
            {children}
        </FilmListContext.Provider>
    );
};

const useFilmListContext = () => {
    if ( useContext(FilmListContext) === undefined) {
        throw new Error('FilmListContext must be used within a Provider');
    }
    const {filmList} = useContext(FilmListContext);
    return {
        filmList,
    };
};

export {FilmListProvider, useFilmListContext};
