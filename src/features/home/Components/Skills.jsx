import React, { useEffect } from 'react'
import ScrollProgressBars from '../../aboutMe/components/ScrollProgressBars';
import { setScrollProgress } from '../../../app/actions';
import { useDispatch, useSelector } from 'react-redux';

const Skills = () => {
    const dispatch = useDispatch();
    const scrollProgress = useSelector((state) => state.scroll.scrollProgress);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (scrollTop / docHeight) * 100;
            dispatch(setScrollProgress(progress));
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [dispatch]);

    return (
        <section className='container'>
            <div className="About_Skills">
                <h2 className='heading'>Skills</h2>
                <div className="items">
                    <ScrollProgressBars scrollProgress={scrollProgress} />
                </div>
            </div>
        </section>
    )
}

export default Skills;