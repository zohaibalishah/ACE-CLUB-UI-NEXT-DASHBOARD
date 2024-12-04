'use client';
import React, { useState } from 'react';
import { Typography } from '../../common/Typography';
import { TextField } from '../../form';
export const HoursCustomization: React.FC = () => {
    const [weekDaysCustomization, setWeekdaysCustomization] =
        useState<boolean>(true);
    const [weekendCustomization, setWeekendCustomization] =
        useState<boolean>(false);

    return (
        <div className="flex flex-col gap-12">
            <div>
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <Typography variant="bodyMedium">Mon - Sat</Typography>
                        <button
                            className="text-primary text-sm sm:text-base"
                            onClick={() => {
                                setWeekdaysCustomization(prev => !prev);
                            }}
                        >
                            Customize
                        </button>
                    </div>
                    {!weekDaysCustomization && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <TextField placeholder="Start" type="time" />
                            <TextField placeholder="End" type="time" />
                        </div>
                    )}
                </div>

                {weekDaysCustomization && (
                    <div className="flex flex-col gap-5">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
                            (day, index) => (
                                <div
                                    key={index}
                                    className="flex gap-6 items-center"
                                >
                                    <div>
                                        <Typography variant="bodyMedium">
                                            {day}
                                        </Typography>
                                    </div>
                                    <TextField
                                        placeholder="Start"
                                        type="time"
                                        className="flex-1"
                                    />
                                    <TextField
                                        placeholder="End"
                                        type="time"
                                        className="flex-1"
                                    />
                                </div>
                            )
                        )}
                    </div>
                )}
            </div>
            <div>
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <Typography variant="bodyMedium">Weekends</Typography>
                        <button
                            className="text-primary text-sm sm:text-base"
                            onClick={() => {
                                setWeekendCustomization(prev => !prev);
                            }}
                        >
                            Customize
                        </button>
                    </div>
                    {!weekendCustomization && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <TextField placeholder="Start" type="time" />
                            <TextField placeholder="End" type="time" />
                        </div>
                    )}
                </div>

                {weekendCustomization && (
                    <div className="flex flex-col gap-5">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
                            (day, index) => (
                                <div
                                    key={index}
                                    className="flex gap-6 items-center"
                                >
                                    <div>
                                        <Typography variant="bodyMedium">
                                            {day}
                                        </Typography>
                                    </div>
                                    <TextField
                                        placeholder="Start"
                                        type="time"
                                        className="flex-1"
                                    />
                                    <TextField
                                        placeholder="End"
                                        type="time"
                                        className="flex-1"
                                    />
                                </div>
                            )
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
