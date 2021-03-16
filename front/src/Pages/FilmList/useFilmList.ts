import { useFilmListContext } from '../../Context/FilmList';

const useFilmList = () => {
    const {filmList} = useFilmListContext();


    const onAction = (data: string) => {
    };

    return {
        filmList,
    };
};


export {
    useFilmList,
};
