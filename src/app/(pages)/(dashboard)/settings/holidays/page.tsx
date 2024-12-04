import type { IAction } from '@/app/base/types';
import {
    ActionsDropdown,
    TableWrapper,
    Typography,
} from '@/app/components/common';
import { AddHoliday } from '@/app/components/settings';
import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';

const tableHead = [
    'S no',
    'Holiday',
    'Start date & time',
    'End date & time',
    'Court',
    '',
];

const HolidaysPage = (): React.ReactElement => {
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
            <AddHoliday />
            <TableWrapper TableHeadData={tableHead}>
                {Array.from({ length: 3 }).map((td, index) => (
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
                            <Typography>Summer Holiday</Typography>
                        </td>
                        <td className="px-3">
                            <Typography>16 June, 2024 | 07:00am</Typography>
                        </td>

                        <td className="px-3">
                            <Typography>18 June, 2024 | 08:00am</Typography>
                        </td>
                        <td className="px-3">
                            <Typography>Tennis 1</Typography>
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

export default HolidaysPage;
