import React from 'react';
import { WalletHeader } from '../WalletHeader';
import { TableWrapper, Typography } from '../../common';

const tableHead = [
    'S no',
    'Refrence ID',
    'Name',
    'Match Payment',
    'Total Balance',
    'Previous match Date & Time',
];

export const WalletList = (): React.ReactElement => (
    <section className="pb-12">
        <WalletHeader />
        <TableWrapper TableHeadData={tableHead}>
            {Array.from({ length: 5 }).map((td, index) => (
                <tr className="border-b border-boxOutline h-[60px]" key={index}>
                    <td className="px-3 border-r-2 border-boxOutline">
                        <Typography className="text-SecondaryColor">
                            {index + 1}
                        </Typography>
                    </td>
                    <td className="px-3">
                        <Typography>A123</Typography>
                    </td>
                    <td className="px-3 text-nowrap">
                        <div className="flex gap-3 items-center">
                            <span className="w-9 h-9 rounded-full border border-white text-white inline-flex justify-center items-center">
                                AS
                            </span>
                            <Typography>Asim Shah</Typography>
                        </div>
                    </td>
                    <td className="px-3">
                        <Typography>+ SAR 25</Typography>
                    </td>
                    <td className="px-3">
                        <Typography>SAR 4,915</Typography>
                    </td>
                    <td className="px-3">
                        <Typography>23 Jan, 2024 | 12:30 pm</Typography>
                    </td>
                </tr>
            ))}
        </TableWrapper>
    </section>
);
