// ScrollToTopButton.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { scrollToTop } from '../../app/actions';
import './styles.css'

const ScrollToTopButton = () => {
    const dispatch = useDispatch();
    const scrollTop = useSelector(state => state.scroll.scrollTop);

    useEffect(() => {
        if (scrollTop) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            // Reset the scrollTop state after scrolling
            dispatch({ type: 'RESET_SCROLL_TOP' });
        }
    }, [scrollTop, dispatch]);

    const handleScroll = () => {
        if (window.scrollY > 20) {
            document.getElementById("scrollToTopBtn").style.display = "block";
        } else {
            document.getElementById("scrollToTopBtn").style.display = "none";
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        dispatch(scrollToTop());
    };

    return (
        <button id="scrollToTopBtn" className="scroll-to-top-btn" onClick={handleClick}>
            Top
        </button>
    );
};

export default ScrollToTopButton;
