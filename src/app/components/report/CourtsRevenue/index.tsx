'use client';

import React from 'react';
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import { Typography } from '../../common';
import { courtsRevenue } from '@/app/base/utils/graphsData';
import { colors } from '@/app/base/config';

export const CourtsRevenue = (): React.ReactElement => (
    <div className="w-full bg-boxColorDark border border-boxOutline rounded-xl">
        <div className="px-5 pt-4 flex-wrap gap-y-3 flex justify-between items-center">
            <Typography variant="h5">Inventory Levels</Typography>

            <div className="flex gap-x-3">
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
        <div className="h-[260px] sm:h-[305px]">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={500}
                    height={250}
                    data={courtsRevenue}
                    margin={{ top: 45, right: 0, left: 10, bottom: 0 }}
                >
                    <XAxis
                        dataKey="name"
                        strokeWidth="0"
                        fontSize={14}
                        tickMargin={0}
                        padding={{ left: 30, right: 30 }}
                        tick={{ fill: colors.secondary }}
                    />
                    <YAxis
                        strokeWidth="0"
                        fontSize={14}
                        tick={{ fill: colors.secondary }}
                    />
                    <CartesianGrid stroke="0" />
                    <Tooltip />

                    <Area
                        type="bump"
                        dataKey="purchase"
                        stroke={'#B95400'}
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="none"
                    />

                    <Area
                        type="bump"
                        dataKey="sale"
                        stroke={'#54B7D3'}
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="none"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>

        <div className="flex gap-x-6 justify-center py-6">
            <div className="flex gap-2 items-center">
                <span className="w-2 h-2 bg-[#B95400] rounded-full" />
                <Typography variant="smallRegular" className="text-primary">
                    Tennis 1
                </Typography>
            </div>
            <div className="flex gap-2 items-center">
                <span className="w-2 h-2 bg-[#54B7D3] rounded-full" />
                <Typography variant="smallRegular" className="text-secondary">
                    Sale
                </Typography>
            </div>
        </div>
    </div>
);
