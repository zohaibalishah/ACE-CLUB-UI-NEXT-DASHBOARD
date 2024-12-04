import React from 'react';
import { LuEye } from 'react-icons/lu';
import { ActionsDropdown, TableWrapper, Typography } from '../../common';
import { CustomersHeader } from '../CustomersHeader';
import type { IAction } from '@/app/base/types';

const tableHead = [
    'S no',
    'Name',
    'Email',
    'Phone number',
    'Total booking',
    'Total spent',
    'Address',
    'Last booking',
    'Action',
];

export const CustomersList = (): React.ReactElement => {
    const actions: IAction[] = [
        {
            icon: <LuEye />,
            title: 'View',
        },
    ];
    return (
        <section className="pb-12">
            <CustomersHeader />
            <TableWrapper TableHeadData={tableHead}>
                {Array.from({ length: 7 }).map((td, index) => (
                    <tr
                        className="border-b border-boxOutline h-[60px]"
                        key={index}
                    >
                        <td className="px-3 border-r-2 border-boxOutline">
                            <Typography className="text-SecondaryColor">
                                {index + 1}
                            </Typography>
                        </td>
                        <td className="px-3 text-nowrap">
                            <div className="flex gap-3 items-center">
                                <span className="w-9 h-9 rounded-full border border-white text-white inline-flex justify-center items-center">
                                    AJ
                                </span>
                                <Typography>Aqib Javid</Typography>
                            </div>
                        </td>
                        <td className="px-3">
                            <Typography>aqib.official@gmail.com</Typography>
                        </td>
                        <td className="px-3">
                            <Typography>+966148754306</Typography>
                        </td>
                        <td className="px-3">
                            <Typography>4</Typography>
                        </td>
                        <td className="px-3">
                            <Typography>SAR 899.00</Typography>
                        </td>
                        <td className="px-3">
                            <Typography>Jeddah, KSA</Typography>
                        </td>
                        <td className="px-3">
                            <Typography>23 Jan, 2024</Typography>
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
