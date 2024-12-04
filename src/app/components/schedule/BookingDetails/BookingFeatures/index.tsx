import Image from 'next/image';
import React from 'react';
import { Icons } from '../../../../../../public/icons';
import { Typography } from '@/app/components/common';

export const BookingFeatures = (): React.ReactElement => (
    <div className="mt-5 rounded-xl border border-newLinear shadow-sm shadow-newLinear p-3 sm:p-5 md:p-10 grid grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
        <div className="flex gap-2.5 sm:gap-5 items-center">
            <Image src={Icons.chart} alt="Chart" width={20} height={20} />
            <div className="space-y-1 sm:space-y-2">
                <Typography variant="bodyRegular">Court</Typography>
                <Typography variant="bodyMedium">Tennis 1</Typography>
            </div>
        </div>
        <div className="flex gap-2.5 sm:gap-5 items-center">
            <Image src={Icons.chart} alt="Chart" width={20} height={20} />
            <div className="space-y-1 sm:space-y-2">
                <Typography variant="bodyRegular">Date</Typography>
                <Typography variant="bodyMedium">12 June, 2024</Typography>
            </div>
        </div>
        <div className="flex gap-2.5 sm:gap-5 items-center">
            <Image src={Icons.chart} alt="Chart" width={20} height={20} />
            <div className="space-y-1 sm:space-y-2">
                <Typography variant="bodyRegular">Time</Typography>
                <Typography variant="bodyMedium">09:00 - 09:30 am</Typography>
            </div>
        </div>
        <div className="flex gap-2.5 sm:gap-5 items-center">
            <Image src={Icons.chart} alt="Chart" width={20} height={20} />
            <div className="space-y-1 sm:space-y-2">
                <Typography variant="bodyRegular">Payment</Typography>
                <Typography variant="bodyMedium">SAR 200</Typography>
            </div>
        </div>
        <div className="flex gap-2.5 sm:gap-5 items-center">
            <Image src={Icons.chart} alt="Chart" width={20} height={20} />
            <div className="space-y-1 sm:space-y-2">
                <Typography variant="bodyRegular">Gender</Typography>
                <Typography variant="bodyMedium">Mixed</Typography>
            </div>
        </div>
        <div className="flex gap-2.5 sm:gap-5 items-center">
            <Image src={Icons.chart} alt="Chart" width={20} height={20} />
            <div className="space-y-1 sm:space-y-2">
                <Typography variant="bodyRegular">Contact</Typography>
                <Typography variant="bodyMedium">+1 (360) 658-6291</Typography>
            </div>
        </div>
        <div className="flex gap-2.5 sm:gap-5 items-center">
            <Image src={Icons.chart} alt="Chart" width={20} height={20} />
            <div className="space-y-1 sm:space-y-2">
                <Typography variant="bodyRegular">Booking type</Typography>
                <Typography variant="bodyMedium">Find a match</Typography>
            </div>
        </div>
        <div className="flex gap-2.5 sm:gap-5 items-center">
            <Image src={Icons.chart} alt="Chart" width={20} height={20} />
            <div className="space-y-1 sm:space-y-2">
                <Typography variant="bodyRegular">Payment type</Typography>
                <Typography variant="bodyMedium">Credit card</Typography>
            </div>
        </div>
        <div className="flex gap-2.5 sm:gap-5 items-center">
            <Image src={Icons.chart} alt="Chart" width={20} height={20} />
            <div className="space-y-1 sm:space-y-2">
                <Typography variant="bodyRegular">Sport</Typography>
                <Typography variant="bodyMedium">Tennis</Typography>
            </div>
        </div>
    </div>
);
