import React from 'react';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import { Typography } from '../Typography';
import { FaUserGroup } from 'react-icons/fa6';

interface ICard {
    title: string;
    figure: string | number;
    up?: boolean;
    down?: boolean;
    select?: boolean;
}

export const StatisticCard = ({
    card,
}: {
    card: ICard;
}): React.ReactElement => (
    <div className="bg-boxColorDark p-3 sm:p-6 rounded-xl border-[1px] border-newLinear/30">
        <div className=" flex items-start justify-between">
            <div>
                <Typography variant="bodyRegular">{card.title}</Typography>
                <Typography variant="h2" className="!text-primary py-2 sm:py-4">
                    {card.figure}
                </Typography>
            </div>
            <div className="w-8 h-8  sm:w-12 sm:h-12 bg-boxOutline flex items-center justify-center rounded-xl cursor-pointer">
                <FaUserGroup className="text-2xl text-secondary" />
            </div>
        </div>
        <div className="flex justify-between items-center">
            <div>
                {card.up === true ? (
                    <Typography
                        variant="bodyMedium"
                        className="flex items-center"
                    >
                        <span className="text-success pr-1.5">
                            <GoArrowUp />
                        </span>
                        <span className="text-success pr-1">+6%</span>Since last
                        week
                    </Typography>
                ) : (
                    <Typography
                        variant="bodyMedium"
                        className="flex items-center"
                    >
                        <span className="text-red-500 pr-1.5">
                            <GoArrowDown />
                        </span>
                        <span className="text-red-500 pr-1">-10% </span>
                        Since last week
                    </Typography>
                )}
            </div>
        </div>
    </div>
);
