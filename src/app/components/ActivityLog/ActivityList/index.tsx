import React from 'react';
import { TableWrapper, Typography } from '../../common';
import { ActivityHeader } from '../ActivityHeader';

const tableHead = [
    'Refrence ID',
    'Date & Time',
    'Activity type',
    'Description',
    'User',
];

export const ActivityList = (): React.ReactElement => (
    <section className="pb-12">
        <ActivityHeader />
        <TableWrapper TableHeadData={tableHead}>
            {Array.from({ length: 5 }).map((td, index) => (
                <tr className="border-b border-boxOutline h-[60px]" key={index}>
                    <td className="px-3 border-r-2 border-boxOutline">
                        <Typography className="text-SecondaryColor">
                            A123
                        </Typography>
                    </td>
                    <td className="px-3">
                        <Typography>23 Jan, 2024 | 12:30 pm</Typography>
                    </td>
                    <td className="px-3 text-nowrap">
                        <div className="flex gap-3 items-center">
                            <Typography>New booking</Typography>
                        </div>
                    </td>
                    <td className="px-3">
                        <Typography>
                            Booking created for Court 1 on 10-06-2024 from 6:00
                            PM to ...
                        </Typography>
                    </td>
                    <td className="px-3">
                        <Typography>Aqib</Typography>
                    </td>
                </tr>
            ))}
        </TableWrapper>
    </section>
);
