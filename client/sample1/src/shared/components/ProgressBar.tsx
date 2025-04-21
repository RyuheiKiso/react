import React from 'react';

import './ProgressBar.scss';

interface ProgressBarProps {
    progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    return (
        <div className="progress-bar">
            <div
                className="progress-bar__inner"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

export default ProgressBar;