'use client';

import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Typography } from '../../common';
import { colors } from '@/app/base/config';

const data = [
    {
        name: 'Mon',
        pv: 10000,
        value: 18478,
    },
    {
        name: 'Tue',
        pv: 10000,
        value: 38478,
    },
    {
        name: 'Wed',
        pv: 10000,
        value: 28478,
    },
    {
        name: 'Thu',
        pv: 10000,
        value: 48478,
    },
    {
        name: 'Fri',
        pv: 10000,
        value: 40478,
    },
    {
        name: 'Sat',
        pv: 10000,
        value: 28478,
    },
    {
        name: 'Sun',
        pv: 10000,
        value: 48000,
    },
];

export const BookingReportChart = (): React.ReactElement => (
    <div className="pb-8 overflow-hidden overflow-x-auto">
        <div className="w-full h-[320px] sm:h-[391px] border-2 border-boxOutline p-3 pl-0 bg-boxColorDark rounded-xl">
            <div className="py-5 px-5 lg:pl-10 flex flex-wrap gap-y-4 justify-between items-center ">
                <Typography variant="h5Bold" className="text-secondary">
                    Number of booking
                </Typography>
                <div className="hidden xl:flex gap-x-3">
                    <input
                        type="date"
                        className="text-secondary bg-boxOutline text-xs h-9 rounded-xl px-3 focus:outline-none"
                    />
                    <select className="text-secondary bg-boxOutline text-xs h-9 rounded-xl px-3 focus:outline-none">
                        <option>This month</option>
                        <option>This week</option>
                        <option>This year</option>
                    </select>
                </div>
            </div>
            <ResponsiveContainer width={'100%'} height="75%">
                <BarChart
                    width={150}
                    height={40}
                    data={data}
                    margin={{ bottom: 15, top: 20, left: 10 }}
                >
                    <Bar
                        dataKey="value"
                        fill={colors.primary}
                        barSize={18}
                        radius={[4, 4, 4, 4]}
                    />
                    <XAxis
                        dataKey="name"
                        tick={{ fill: colors.secondary }}
                        tickLine={false}
                        tickMargin={20}
                        axisLine={false}
                    />
                    <YAxis
                        dataKey="pv"
                        tick={{ fill: colors.secondary }}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={value => `${value / 1000}K`}
                        domain={[10000, 50000]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
);
