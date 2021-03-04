import {useHome} from './useHome';
import React from 'react';
import './Home.css';

const HomeRoute: React.FC = () => {
    const {appName} = useHome();
    return (
        <>
            <h1>Hello from {appName}</h1>
        </>
    );
};

export default HomeRoute;
