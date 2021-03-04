import {useHomeContext} from '../../Context/Home';

const useHome = () => {
    const {appName} = useHomeContext();


    const onAction = (data: string) => {
    };

    return {
        onAction,
        appName,
    };
};


export {
    useHome,
};
