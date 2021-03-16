import React, {createContext, useState, useContext} from 'react';
import { getFilmList } from '../Services/filmService';

const HomeContext = createContext({
    appName: 'Xelp',
});

const HomeProvider = ({children}: any) => {
    const [appName, setAppName] = useState('Xelp');

    return (
        <HomeContext.Provider
            value={{appName}}>
            {children}
        </HomeContext.Provider>
    );
};

const useHomeContext = () => {
    if ( useContext(HomeContext) === undefined) {
        throw new Error('HomeContext must be used within a Provider');
    }
    const {appName} = useContext(HomeContext);
    return {
        appName,
    };
};

export {HomeProvider, useHomeContext};
