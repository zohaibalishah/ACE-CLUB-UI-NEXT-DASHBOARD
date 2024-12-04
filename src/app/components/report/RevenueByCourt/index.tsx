'use client';

import React from 'react';
import { Typography } from '../../common';

export const BookingReportChart = (): React.ReactElement => (
    <div className="py-8 overflow-hidden overflow-x-auto">
        <div className="w-full h-[320px] sm:h-[391px] border-2 border-boxOutline p-3 pl-0 bg-boxColorDark rounded-xl">
            <Typography variant="h5Bold" className="text-secondary">
                Revenue by Court
            </Typography>
        </div>
    </div>
);
