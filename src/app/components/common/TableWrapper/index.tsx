'use client';

import React from 'react';
import { Typography } from '../Typography';
import { TablePagination } from '../TablePagination';

interface ITableWrapper {
    TableHeadData: string[];
    children: React.ReactNode;
}

export const TableWrapper = ({
    TableHeadData,
    children,
}: ITableWrapper): React.ReactElement => (
    <>
        <div className="w-full overflow-x-auto max-w-full py-6">
            <table className="min-w-[700px] w-full table-auto text-left">
                <thead>
                    <tr>
                        {Array.isArray(TableHeadData) &&
                            TableHeadData?.length > 0 &&
                            TableHeadData.map((th, index) => (
                                <th
                                    key={index}
                                    className={`h-[50px] bg-boxOutline px-3 text-nowrap ${
                                        index === 0
                                            ? ' w-[60px] rounded-tl-xl'
                                            : ''
                                    } 
                  ${index === 1 ? ' pl-4' : ''} ${
                      index === TableHeadData.length - 1
                          ? 'rounded-tr-xl pl-2'
                          : ''
                  }`}
                                >
                                    <Typography className="text-SecondaryColor font-normal">
                                        {th}
                                    </Typography>
                                </th>
                            ))}
                    </tr>
                </thead>
                <tbody>{children}</tbody>
            </table>
        </div>

        {/* Pagination */}
        <TablePagination />
    </>
);
