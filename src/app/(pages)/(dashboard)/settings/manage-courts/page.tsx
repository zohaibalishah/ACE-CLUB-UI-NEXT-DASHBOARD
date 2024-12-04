import type { IAction } from '@/app/base/types';
import {
    ActionsDropdown,
    TableWrapper,
    Typography,
} from '@/app/components/common';
import { AddNewCourt } from '@/app/components/settings';
import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';

const tableHead = ['S no', 'Count', 'Sport', 'Status', 'Description', ''];

const MangeCourts = (): React.ReactElement => {
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
            <AddNewCourt />
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

                        <td className="px-3">
                            <Typography>Tennis 1</Typography>
                        </td>
                        <td className="px-3">
                            <Typography>Tennis</Typography>
                        </td>
                        <td className="px-3">
                            <span className="inline-block px-6 py-2 rounded-xl bg-boxOutline text-secondary text-sm">
                                Active
                            </span>
                        </td>
                        <td className="px-3">
                            <Typography>Tennis 1 court</Typography>
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

export default MangeCourts;
