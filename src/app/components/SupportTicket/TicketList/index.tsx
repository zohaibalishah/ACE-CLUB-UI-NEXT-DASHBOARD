import React from 'react';
import { ActionsDropdown, TableWrapper, Typography } from '../../common';
import { TicketHeader } from '../TicketHeader';
import type { IAction } from '@/app/base/types';
import { MdDeleteOutline } from 'react-icons/md';

const tableHead = [
    'S No',
    'Ticket #',
    'Subject',
    'Type',
    'Status',
    'Date & Time',
    'Action',
];

export const TicketList = (): React.ReactElement => {
    const actions: IAction[] = [
        {
            icon: <MdDeleteOutline />,
            title: 'Delete',
        },
    ];
    return (
        <section className="pb-12">
            <TicketHeader />
            <TableWrapper TableHeadData={tableHead}>
                {Array.from({ length: 5 }).map((td, index) => (
                    <tr
                        className="border-b border-boxOutline h-[60px]"
                        key={index}
                    >
                        <td className="px-3 border-r-2 border-boxOutline">
                            <Typography className="text-SecondaryColor">
                                {index + 1}
                            </Typography>
                        </td>
                        <td className="px-3">
                            <Typography>1235</Typography>
                        </td>
                        <td className="px-3 text-nowrap">
                            <div className="flex gap-3 items-center">
                                <Typography>New suggestion</Typography>
                            </div>
                        </td>
                        <td className="px-3">
                            <Typography>Suggestion </Typography>
                        </td>
                        <td className="px-3">
                            <Typography
                                variant="smallRegular"
                                className="bg-primary h-[36px] px-6 rounded-xl inline-flex items-center"
                            >
                                Resolved
                            </Typography>
                        </td>
                        <td className="px-3">
                            <Typography>23 Jan, 2024 | 12:30 pm</Typography>
                        </td>
                        <td className="px-3">
                            <ActionsDropdown actions={actions} />
                        </td>
                    </tr>
                ))}
            </TableWrapper>
        </section>
    );
};
