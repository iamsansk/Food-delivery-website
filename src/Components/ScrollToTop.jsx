import { useContext, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { StoreContext } from './Context/StoreContext';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const isInitialRender = useRef(true);

    useEffect(() => {
        if (isInitialRender.current) {
            isInitialRender.current = false;
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return null;
};

export default ScrollToTop;
