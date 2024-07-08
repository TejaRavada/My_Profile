// ScrollProgressBars.jsx
import React from 'react';
import ProgressBar from './ProgressBar';

const ScrollProgressBars = ({ scrollProgress }) => {
    return (
        <>
            <div className='topices'>
                <h3 >Front-End</h3>
                <div className="item">
                    <ProgressBar label="HTML/CSS" targetProgress={90} scrollProgress={scrollProgress} />
                    <ProgressBar label="JavaScript" targetProgress={85} scrollProgress={scrollProgress} />
                    <ProgressBar label="Jquery" targetProgress={40} scrollProgress={scrollProgress} />
                    <ProgressBar label="Json" targetProgress={40} scrollProgress={scrollProgress} />
                    <ProgressBar label="React" targetProgress={50} scrollProgress={scrollProgress} />
                    <ProgressBar label="Redux" targetProgress={60} scrollProgress={scrollProgress} />
                </div>
            </div>

            <div className='topices'>
                <h3>Database</h3>
                <div className="item">
                    <ProgressBar label="Firebase" targetProgress={40} scrollProgress={scrollProgress} />
                    <ProgressBar label="SQL" targetProgress={60} scrollProgress={scrollProgress} />
                </div>
            </div>

            <div className='topices'>
                <h3>Libraries</h3>
                <div className="item">
                    <ProgressBar label="Bootstrap" targetProgress={90} scrollProgress={scrollProgress} />
                    <ProgressBar label="Tailwind CSS" targetProgress={60} scrollProgress={scrollProgress} />
                    <ProgressBar label="Material UI" targetProgress={50} scrollProgress={scrollProgress} />
                </div>
            </div>
        </>
    );
};

export default ScrollProgressBars;
