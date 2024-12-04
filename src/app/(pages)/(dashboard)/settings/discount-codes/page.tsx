'use client';

import type { IAction } from '@/app/base/types';
import {
    ActionsDropdown,
    TableWrapper,
    Typography,
} from '@/app/components/common';
import { AddNewDiscount } from '@/app/components/settings';
import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';

const tableHead = [
    'S no',
    'Title',
    'Discount code',
    'Customer',
    'Start date',
    'End date',
    'Status',
    '',
];

const DiscountCodes = (): React.ReactElement => {
    const actions: IAction[] = [
        {
            icon: <BiEditAlt />,
            title: 'Edit',
        },
        {
            icon: <AiOutlineDelete />,
            title: 'Delete',
        },
    ];
    return (
        <section>
            <AddNewDiscount />
            <TableWrapper TableHeadData={tableHead}>
                {Array.from({ length: 1 }).map((td, index) => (
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
                            <Typography>Weekly</Typography>
                        </td>
                        <td className="px-3">
                            <Typography>SAR 15</Typography>
                        </td>
                        <td className="px-3">
                            <Typography>15</Typography>
                        </td>
                        <td className="px-3">
                            <Typography>12-06-2024</Typography>
                        </td>
                        <td className="px-3">
                            <Typography>19-06-2024</Typography>
                        </td>
                        <td className="px-3">
                            <button className="text-sm text-secondary px-6 py-2 rounded-xl bg-boxOutline">
                                Active
                            </button>
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

export default DiscountCodes;
