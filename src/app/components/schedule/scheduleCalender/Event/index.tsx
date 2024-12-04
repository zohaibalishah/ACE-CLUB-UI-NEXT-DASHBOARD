'use client';

import { Typography } from '@/app/components/common';
import React, { useState } from 'react';
import type { IEvent } from '..';
import { BookingDetails } from '../../BookingDetails';

const typeColors: Record<string, string> = {
    'Find a match': '#54B7D3',
    'In-Person': '#B95400',
    Package: '#85A97F',
};

export const Event = ({ event }: { event: IEvent }): React.ReactElement => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <div
                className={`flex items-center justify-around gap-x-4 absolute inset-0 px-3`}
                style={{ backgroundColor: typeColors[event.type] }}
                onClick={() => {
                    setIsOpen(true);
                }}
            >
                <span className="inline-block">{event.icon}</span>
                {Boolean(event?.isBooked) && (
                    <div className="flex items-center gap-x-8">
                        {event.players.map((player, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-1 items-center"
                            >
                                <Typography
                                    variant="bodyRegular"
                                    className="text-SecondaryColor"
                                >
                                    {player?.name}
                                </Typography>
                                <Typography
                                    variant="extraSmallRegular"
                                    className="px-2 rounded-xl text-sm bg-primary"
                                >
                                    12
                                </Typography>
                            </div>
                        ))}
                    </div>
                )}
                {event.isBooked && (
                    <Typography
                        variant="bodyRegular"
                        className="text-SecondaryColor"
                    >
                        {event?.title}
                    </Typography>
                )}
                <span className="h-7 border-l-2 border-gray-200" />
                <Typography
                    variant="bodyRegular"
                    className="text-SecondaryColor"
                >
                    {event.type}
                </Typography>
            </div>

            <BookingDetails isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
};
