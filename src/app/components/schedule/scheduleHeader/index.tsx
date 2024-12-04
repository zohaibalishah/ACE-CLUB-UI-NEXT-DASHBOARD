'use client';
import React, { useState } from 'react';
import { DatePicker } from '../../common/DatePicker';

export const ScheduleHeader = (): React.ReactElement => {
    const [active, setActive] = useState<string>('All Sport');
    return (
        <div className="flex justify-between flex-wrap gap-4 items-center">
            <div className="flex bg-boxOutline p-1 rounded-lg sm:w-auto w-full">
                {['All Sport', 'Tennis', 'Padel']?.map((sport, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            setActive(sport);
                        }}
                        className={`${active === sport ? 'bg-primary' : ''} text-secondary w-full sm:w-fit px-5 py-2 rounded-lg text-sm cursor-pointer transition duration-300`}
                    >
                        {sport}
                    </div>
                ))}
            </div>
            <DatePicker />
        </div>
    );
};
