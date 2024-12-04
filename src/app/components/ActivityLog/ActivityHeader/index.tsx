import React from 'react';
import { FilterSelect, SearchInput, Typography } from '../../common';

export const ActivityHeader = (): React.ReactElement => (
    <div className="flex sm:items-center justify-between flex-wrap flex-col sm:flex-row gap-2">
        <Typography variant="h5Bold">Activity Log</Typography>
        <div className="flex mt-2 sm:mt-0 gap-5 items-center justify-end flex-1">
            <SearchInput />
            <div>
                <FilterSelect placeholder="Wed, Nov 27" />
            </div>
        </div>
    </div>
);
