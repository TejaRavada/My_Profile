// src/components/ProgressBar.jsx
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import '../Styles.css';

const ProgressBar = () => {
    const progress = useSelector((state) => state.scroll.progress);
    const [isVisible, setIsVisible] = useState(false);
    const progressBarRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (progressBarRef.current) {
            observer.observe(progressBarRef.current);
        }

        return () => {
            if (observer && progressBarRef.current) {
                observer.unobserve(progressBarRef.current);
            }
        };
    }, []);

    const skillCategories = [
        {
            name: 'Front-End',
            skills: {
                'HTML/CSS': 90,
                'JavaScript': 85,
                'Jquery': 40,
                'Json': 40,
                'React': 50,
                'Redux': 60,
            },
        },
        {
            name: 'Database',
            skills: {
                'Firebase': 40,
                'SQL': 60,
            },
        },
        {
            name: 'Libraries',
            skills: {
                'Bootstrap': 90,
                'Tailwind CSS': 60,
                'Material UI': 50,
            },
        }
    ];

    return (
        <div className="container">
            <div className="skills_card">
                {
                    skillCategories.map((category) => (
                        <div key={category.name} className="progress-container w-100">
                            <h2>{category.name}</h2>
                            {
                                Object.entries(category.skills).map(([skill, value]) => (
                                    <div key={skill} className="progress-bar-wrapper" ref={progressBarRef}>

                                        <div className="progress-label">{skill}</div>

                                        <div className={`progress-bar-background ${isVisible ? 'animate' : ''}`}>
                                            <div className="progressbar" style={{ width: `${isVisible ? value : 0}%` }}>
                                                <span className={`progress-tooltip ${isVisible ? 'animate' : ''}`}>{value}%</span>
                                            </div>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ProgressBar;
