import React from 'react';
import { FilterSelect, StatisticCard, Typography } from '../../common';
import { MdLibraryBooks } from 'react-icons/md';

const statistics = [
    {
        title: 'Number of Court',
        figure: '5',
        up: true,
        down: false,
        link: '#',
    },
    {
        title: 'Total Booking',
        figure: '781',
        up: false,
        down: true,
        select: true,
        link: '#',
    },
    {
        title: 'Total Revenue',
        figure: 'SAR 40,980',
        up: false,
        down: true,
        select: true,
        link: '#',
    },
    {
        title: 'Game Bookings',
        figure: '234 tennis | 192 padel',
        up: false,
        down: true,
        select: true,
        link: '#',
    },
    {
        title: 'Hours of occupation',
        figure: '5,354 hours',
        up: false,
        down: true,
        select: true,
        link: '#',
    },
    {
        title: 'Number of Customers',
        figure: '23,391',
        up: false,
        down: true,
        select: true,
        link: '#',
    },
];

export const ReportStatistics = (): React.ReactElement => (
    <section>
        <div className="flex justify-between flex-wrap gap-4 items-center">
            <div className="flex gap-5 items-center ">
                <Typography variant="h5Bold">Statistics</Typography>
                <FilterSelect
                    placeholder="Export report"
                    startIcon={<MdLibraryBooks />}
                />
            </div>
            <div className="hidden sm:flex gap-5 justify-end ml-auto ">
                <FilterSelect placeholder="Current week" />
            </div>
        </div>

        {/* Stattistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 py-8">
            {statistics.map((card, index) => (
                <div key={index}>
                    <StatisticCard card={card} />
                </div>
            ))}
        </div>
    </section>
);
