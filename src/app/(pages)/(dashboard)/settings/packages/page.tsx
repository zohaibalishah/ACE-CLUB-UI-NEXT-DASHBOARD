'use client';

import type { IAction } from '@/app/base/types';
import {
    ActionsDropdown,
    TableWrapper,
    Typography,
} from '@/app/components/common';
import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { Icons } from '../../../../../../public/icons';
import { AddNewPackage } from '@/app/components/settings';

const tableHead = ['Day', 'Date', 'Time slot', 'Duration', 'Duration'];

const PackagesPage = (): React.ReactElement => {
    const [selected, setSelected] = useState<number | null>(null);
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
            <AddNewPackage />
            <div className="flex justify-between items-center mt-7 mr-4">
                <Typography className="text-xl">Package 1</Typography>
                <ActionsDropdown
                    actions={actions}
                    icon={
                        <Image
                            src={Icons.dots}
                            width={64}
                            height={39}
                            className="min-w-16"
                            alt="dots"
                        />
                    }
                />
            </div>

            <TableWrapper TableHeadData={tableHead}>
                {Array.from({ length: 5 }).map((td, index) => (
                    <tr
                        className={`border-b border-boxOutline h-[60px] cursor-pointer ${selected === index ? 'bg-primary/50' : ''}`}
                        onClick={() => {
                            setSelected(index);
                        }}
                        key={index}
                    >
                        <td className="px-3 md:min-w-32">
                            <Typography>Monday</Typography>
                        </td>

                        <td className="px-3">
                            <Typography>12-06-2024</Typography>
                        </td>
                        <td className="px-3">
                            <Typography>07:00 - 09:00 am</Typography>
                        </td>

                        <td className="px-3">
                            <Typography>12-6-2024 / 26-8-2024</Typography>
                        </td>
                        <td className="px-3">
                            <Typography>2 hours</Typography>
                        </td>
                    </tr>
                ))}
            </TableWrapper>
        </section>
    );
};

export default PackagesPage;
