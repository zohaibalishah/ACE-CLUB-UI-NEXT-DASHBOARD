import React from 'react';

interface ProgressBarProps {
    progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => (
    <div className="relative  my-10 md:my-20">
        <div className="w-full bg-white/80 rounded-full flex h-[5px] ">
            <div
                className="bg-primary text-center h-full rounded-full"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    </div>
);

export default ProgressBar;
