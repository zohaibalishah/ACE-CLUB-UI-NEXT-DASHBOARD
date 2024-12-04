import React from 'react';
import { SearchInput, Typography } from '../../common';

export const CustomersHeader = (): React.ReactElement => (
    <div className="pt-6 md:pt-10">
        <div className="flex sm:items-center justify-between flex-wrap flex-col sm:flex-row gap-2">
            <Typography variant="h5Bold">{'Customers list'}</Typography>
            <div className="flex mt-2 sm:mt-0 gap-5 items-center justify-end flex-1">
                <SearchInput />
                <button className="px-5 sm:px-7 h-[47px] shrink-0 rounded-xl bg-boxOutline text-secondary text-sm">
                    Export list
                </button>
            </div>
        </div>
    </div>
);
