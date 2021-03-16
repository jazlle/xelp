import {useHomeContext} from '../../Context/Home';
import { getFilmList } from '../../Services/filmService';

const useHome = () => {
    const filmList = getFilmList();

    return {
        filmList,
    };
};


export {
    useHome,
};
