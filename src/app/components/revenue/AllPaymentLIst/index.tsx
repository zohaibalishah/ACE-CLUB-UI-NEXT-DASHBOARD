'use client';

import React from 'react';
import { StatisticCard, TableWrapper, Typography } from '../../common';

const statistics = [
    {
        title: 'Today Revenue',
        figure: '120',
        up: true,
        down: false,
        link: '#',
    },
    {
        title: 'Total booking',
        figure: '1,287',
        up: false,
        down: true,
        select: true,
        link: '#',
    },
    {
        title: 'Average revenue',
        figure: '40,980',
        up: false,
        down: true,
        select: true,
        link: '#',
    },
    {
        title: 'Club wallet(cancelled match)',
        figure: '40,980',
        up: false,
        down: true,
        select: true,
        link: '#',
    },
];

const tableHead = [
    'S no',
    'Name',
    'Product',
    'Payment method',
    'Total',
    'Status',
    'Date & Time',
];

export const AllPaymentList = (): React.ReactElement => (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 py-8">
            {statistics.map((card, index) => (
                <div key={index}>
                    <StatisticCard card={card} />
                </div>
            ))}
        </div>
        <TableWrapper TableHeadData={tableHead}>
            {Array.from({ length: 4 }).map((td, index) => (
                <tr
                    className="border border-t-0 border-boxOutline h-[60px]"
                    key={index}
                >
                    <td className="px-3 border-r-2 border-boxOutline ">
                        <Typography className="text-SecondaryColor">
                            {index + 1}
                        </Typography>
                    </td>
                    <td className="px-3 text-nowrap">
                        <div className="flex gap-3 items-center">
                            <span className="w-9 h-9 rounded-full border border-white text-white inline-flex justify-center items-center">
                                AJ
                            </span>
                            <Typography>Aqib Javid</Typography>
                        </div>
                    </td>
                    <td className="px-3 text-nowrap">
                        <Typography>Tennis court</Typography>
                    </td>
                    <td className="px-3 text-nowrap">
                        <Typography
                            variant="smallRegular"
                            className="bg-boxOutline h-[36px] px-4 rounded-xl inline-flex items-center"
                        >
                            Cash
                        </Typography>
                    </td>
                    <td className="px-3 text-nowrap">
                        <Typography>SAR 25.00</Typography>
                    </td>
                    <td className="px-3 text-nowrap">
                        <Typography
                            variant="smallRegular"
                            className="bg-primary h-[36px] px-6 rounded-xl inline-flex items-center"
                        >
                            Paid
                        </Typography>
                    </td>
                    <td className="px-3 text-nowrap">
                        <Typography>23 Jan, 2024 | 12:30 pm</Typography>
                    </td>
                </tr>
            ))}
        </TableWrapper>
    </section>
);
