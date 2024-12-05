'use client';

import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Typography } from '../../common';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '../../shadcn';
import { GoPlus } from 'react-icons/go';
import Link from 'next/link';
import { routes } from '@/app/base/constants';

export const ClubDropdown = (): React.ReactElement => {
    const [selected, setSelected] = useState<string>('Elite Sports Club');
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div className="">
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                <DropdownMenuTrigger className="w-full">
                    <div className="flex items-center space-x-2 justify-between sm:justify-start bg-boxOutline px-2 h-[50px] rounded-xl w-full sm:w-auto">
                        <div className="flex items-center space-x-2">
                            <span className="w-[38px] h-[38px] rounded-full bg-primary inline-flex justify-center items-center text-sm text-secondary">
                                {selected.charAt(0)}
                            </span>
                            <Typography variant="smallRegular">
                                {selected}
                            </Typography>
                        </div>
                        <IoIosArrowDown className="text-xl text-secondary pl-1 mr-4 sm:mr-0" />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-2 space-y-1 ">
                    <div
                        className="flex items-center space-x-3 group hover:bg-primary transition-colors px-2 duration-300 h-[50px] rounded-xl cursor-pointer"
                        onClick={() => {
                            setSelected('Alpa Sports Club');
                            setIsOpen(false);
                        }}
                    >
                        <span className="w-[38px] h-[38px] rounded-full bg-primary group-hover:bg-boxColorDark inline-flex justify-center items-center text-sm text-secondary ">
                            A
                        </span>
                        <Typography>{'Alpa Sports Club'}</Typography>
                    </div>
                    <Link
                        href={routes.registration}
                        className="flex items-center space-x-3 group hover:bg-primary transition-colors px-2 duration-300 h-[50px] rounded-xl cursor-pointer"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        <span className="w-[38px] h-[38px] rounded-full cursor-pointer bg-primary group-hover:bg-boxColorDark inline-flex justify-center items-center text-secondary text-2xl">
                            <GoPlus />
                        </span>
                        <Typography>{'Add New'}</Typography>
                    </Link>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};
