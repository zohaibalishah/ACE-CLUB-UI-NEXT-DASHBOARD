import type { IAction } from '@/app/base/types';
import {
    ActionsDropdown,
    TableWrapper,
    Typography,
} from '@/app/components/common';
import { AddNewRole, AddNewUser } from '@/app/components/settings';
import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';

const tableHead = ['S no', 'Name', 'Email', 'Role', ''];

const RolesAndPermissions = (): React.ReactElement => {
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
            <div className="flex justify-end gap-3 sm:gap-5 mt-5 sm:mt-0">
                <AddNewRole />
                <AddNewUser />
            </div>
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
                            <Typography>Aqib Javid</Typography>
                        </td>
                        <td className="px-3">
                            <Typography>aqib.official@gmail.com</Typography>
                        </td>
                        <td className="px-3">
                            <Typography>Owner</Typography>
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

export default RolesAndPermissions;
