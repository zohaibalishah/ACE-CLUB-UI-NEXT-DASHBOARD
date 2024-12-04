'use client';

import { DatePicker, TableWrapper, Typography } from '@/app/components/common';
import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const tableHead = ['S no', 'Transaction amount', 'Time', 'Account'];

const TransactionsPage = (): React.ReactElement => (
    <section>
        <div className="flex sm:justify-end gap-3 sm:gap-5 flex-wrap mt-5 sm:mt-0">
            <button className="inline-flex gap-2 items-center w-full sm:w-auto h-[49px] px-6 rounded-xl border-2 border-boxOutline">
                <AiOutlineDelete className="text-secondary text-xl" />
                <Typography variant="smallRegular">Delete report</Typography>
            </button>
            <DatePicker />
        </div>
        <TableWrapper TableHeadData={tableHead}>
            {Array.from({ length: 8 }).map((td, index) => (
                <tr className="border-b border-boxOutline h-[60px]" key={index}>
                    <td className="px-3 border-r-2 border-boxOutline">
                        <Typography className="text-SecondaryColor">
                            {index + 1}
                        </Typography>
                    </td>
                    <td className="px-3">
                        <Typography>SAR 982.00</Typography>
                    </td>
                    <td className="px-3">
                        <Typography>08:00am</Typography>
                    </td>
                    <td className="px-3">
                        <Typography>**** **** **** 4598</Typography>
                    </td>
                </tr>
            ))}
        </TableWrapper>
    </section>
);

export default TransactionsPage;
