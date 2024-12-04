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

export const ClubDropdown = (): React.ReactElement => {
    const [selected, setSelected] = useState<string>('Elite Sports Club');
    return (
        <div className="hidden md:block">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className="flex items-center space-x-2 bg-boxOutline px-2 h-[50px] rounded-xl">
                        <span className="w-[38px] h-[38px] rounded-full bg-primary inline-flex justify-center items-center text-sm text-secondary">
                            {selected.charAt(0)}
                        </span>
                        <Typography variant="smallRegular">
                            {selected}
                        </Typography>
                        <IoIosArrowDown className="text-xl text-secondary pl-1" />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-2 space-y-1">
                    <div
                        className="flex items-center space-x-3 group hover:bg-primary transition-colors px-2 duration-300 h-[50px] rounded-xl cursor-pointer"
                        onClick={() => {
                            setSelected('Alpa Sports Club');
                        }}
                    >
                        <span className="w-[38px] h-[38px] rounded-full bg-primary group-hover:bg-boxColorDark inline-flex justify-center items-center text-sm text-secondary ">
                            A
                        </span>
                        <Typography>{'Alpa Sports Club'}</Typography>
                    </div>
                    <div className="flex items-center space-x-3 group hover:bg-primary transition-colors px-2 duration-300 h-[50px] rounded-xl cursor-pointer">
                        <span className="w-[38px] h-[38px] rounded-full cursor-pointer bg-primary group-hover:bg-boxColorDark inline-flex justify-center items-center text-secondary text-2xl">
                            <GoPlus />
                        </span>
                        <Typography>{'Add New'}</Typography>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};
