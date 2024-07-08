// ProgressBar.jsx
import React, { useState, useEffect } from 'react';

const ProgressBar = ({ label, targetProgress, scrollProgress }) => {
    const [displayProgress, setDisplayProgress] = useState(0);

    useEffect(() => {
        const newProgress = (scrollProgress / 100) * targetProgress;
        setDisplayProgress(newProgress);
    }, [scrollProgress, targetProgress]);

    return (
        <div className="progress-container">
            <div className="progress-label">{label}</div>
            <div className="progress-bar-background">
                <div
                    className="progressbar"
                    style={{ width: `${displayProgress}%` }}
                >
                    {
                        displayProgress > 0 && (
                            <span
                                className="progress-tooltip"
                                style={{ left: `${displayProgress}%` }}
                            >
                                {Math.round(displayProgress)}%
                            </span>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
