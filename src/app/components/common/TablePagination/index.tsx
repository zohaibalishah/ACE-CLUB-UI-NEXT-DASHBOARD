import React from 'react';
import { Typography } from '../Typography';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export const TablePagination = (): React.ReactElement => (
    <div className="flex justify-end items-end">
        <div className="flex justify-end py-6">
            <div className="flex gap-5 items-centere">
                <Typography
                    variant="bodyRegular"
                    className="text-SecondaryColor"
                >
                    Showing 1-10 out of 102
                </Typography>
                <div className="flex gap-3.5 items-center">
                    <button className="w-7 h-7 rounded-lg border border-secondary inline-flex justify-center items-center text-2xl text-secondary">
                        <MdChevronLeft />
                    </button>
                    <button className="w-7 h-7 rounded-lg border border-secondary inline-flex justify-center items-center text-2xl text-secondary">
                        <MdChevronRight />
                    </button>
                </div>
            </div>
        </div>
    </div>
);
