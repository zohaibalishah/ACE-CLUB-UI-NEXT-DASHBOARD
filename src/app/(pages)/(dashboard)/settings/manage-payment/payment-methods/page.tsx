'use client';

import type { IAction } from '@/app/base/types';
import {
    ActionsDropdown,
    TableWrapper,
    Typography,
} from '@/app/components/common';
import { AddNewMethod } from '@/app/components/settings';
import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';

const tableHead = ['S no', 'Method', 'IBAN', 'Action'];

const PaymentMethod = (): React.ReactElement => {
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
            <AddNewMethod />
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
                            <Typography>Bank account</Typography>
                        </td>
                        <td className="px-3">
                            <Typography>**** **** **** 4598</Typography>
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

export default PaymentMethod;
