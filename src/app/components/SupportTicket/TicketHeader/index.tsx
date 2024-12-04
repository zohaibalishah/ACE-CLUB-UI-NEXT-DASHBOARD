import React from 'react';
import { SearchInput, Typography } from '../../common';
import { NewTicket } from '../NewTicket';

export const TicketHeader = (): React.ReactElement => (
    <div className="flex sm:items-center justify-between flex-wrap flex-col sm:flex-row gap-2">
        <Typography variant="h5Bold">Support Ticket</Typography>
        <div className="flex mt-2 sm:mt-0 gap-5 items-center justify-end flex-1">
            <SearchInput />
            <div>
                <NewTicket />
            </div>
        </div>
    </div>
);
