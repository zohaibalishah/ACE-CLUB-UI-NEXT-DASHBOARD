'use client';

import React from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';
import { Typography } from '../Typography';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '../../shadcn';
import type { IAction } from '@/app/base/types';

interface IActionsDropdown {
    actions: IAction[];
    icon?: React.ReactElement;
}

export const ActionsDropdown = ({
    actions,
    icon,
}: IActionsDropdown): React.ReactElement => (
    <>
        <DropdownMenu>
            <DropdownMenuTrigger>
                <span className="w-8 h-8 rounded-full bg-transparent inline-flex justify-center items-center">
                    <span className="text-secondary text-2xl lg:text-3xl">
                        {icon ?? <HiDotsHorizontal />}
                    </span>
                </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-10 md:mr-20">
                <ul className="bg-boxColorDark px-4 py-2.5 rounded-xl border-boxOutline transition duration-300 ease-out flex flex-col gap-3">
                    {actions?.map((action, index) => (
                        <li key={index}>
                            <button
                                className="inline-flex gap-2 items-center"
                                onClick={action?.onClick}
                            >
                                <span className="text-xl text-secondary">
                                    {action.icon}
                                </span>
                                <Typography
                                    variant="bodyMedium"
                                    className="text-secondary"
                                >
                                    {action.title}
                                </Typography>
                            </button>
                        </li>
                    ))}
                </ul>
            </DropdownMenuContent>
        </DropdownMenu>
    </>
);
