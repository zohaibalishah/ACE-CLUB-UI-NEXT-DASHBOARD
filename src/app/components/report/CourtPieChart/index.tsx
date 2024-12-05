'use client';

import { Typography } from '@/app/components/common';
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Tennis 1', value: 40, color: '#B95400' },
    { name: 'Tennis 2', value: 20, color: '#54B7D3' },
    { name: 'Tennis 3', value: 10, color: '#FFC06E' },
    { name: 'Tennis 4', value: 10, color: '#A6D39F' },
];

const COLORS = data?.map(item => item.color);

export const CourtPieChart = (): React.ReactElement => (
    <div className="overflow-hidden overflow-x-auto ">
        <div className="w-full sm:h-[391px] border-2 border-boxOutline py-5 px-5 lg:px-8 bg-boxColorDark rounded-xl ">
            <Typography variant="h5Bold" className="text-secondary">
                Revenue by Court
            </Typography>
            <div className="flex sm:flex-row flex-col items-center pt-10 gap-5 xl:gap-16 xl:px-8">
                <div className="relative w-[227px] h-[227px]">
                    <ResponsiveContainer width={'100%'} height={'100%'}>
                        <PieChart width={233} height={233}>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={75}
                                outerRadius={108}
                                fill="#8884d8"
                                paddingAngle={0}
                                dataKey="value"
                                labelLine={false}
                                // label={renderCustomizedLabel}
                                stroke="none"
                                startAngle={60}
                                endAngle={480}
                            >
                                {data.map((_, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    {/* Centered content */}
                    <div className="absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center bg-transparent w-[110px] h-[110px] rounded-full flex flex-col gap-2.5 items-center justify-center ">
                        <Typography variant="extraSmallRegular">
                            Total Revenue
                        </Typography>
                        <Typography variant="smallRegular">
                            SAR 54,873
                        </Typography>
                    </div>
                </div>

                {/* labels */}
                <div className="flex flex-row flex-wrap sm:flex-col gap-4 sm:gap-7 flex-1">
                    {data.map((label, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center"
                        >
                            <div className="flex gap-2 items-center">
                                <span className="w-2 h-2 bg-[#B95400] rounded-full" />
                                <Typography variant="smallRegular">
                                    {label.name}
                                </Typography>
                            </div>
                            <Typography variant="bodyMedium">
                                {label.value}
                            </Typography>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);
