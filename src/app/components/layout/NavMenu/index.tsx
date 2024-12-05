'use client';

import React, { useState } from 'react';
import { MImage, Typography } from '../../common';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';
import { menu } from '@/app/base/utils';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '../../shadcn';
import { usePathname } from 'next/navigation';
import { ClubDropdown } from '../ClubDropdown';

interface INavMenu {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavMenu = ({ show, setShow }: INavMenu): React.ReactElement => {
    const pathname = usePathname();
    const isActive = (path: string): boolean => pathname === path;
    const [isOpenMore, setIsOpenMore] = useState<boolean>(false);
    return (
        <ul
            className={`flex flex-col fixed top-[66px] z-20 md:top-[107px] h-[calc(100vh-107px)] px-5 xl:px-0 pt-8 xl:pt-0 xl:h-auto left-0 bg-boxColorDark xl:static xl:flex-row items-center space-x-6 w-[300px] xl:w-auto transition-all duration-500  ${show ? 'translate-x-0 visible opacity-100 gap-7' : '-translate-x-full invisible opacity-0 xl:translate-x-0 xl:visible xl:opacity-100'}`}
        >
            {menu.map((item, index) =>
                typeof item?.dropdown === 'undefined' ? (
                    <Link
                        key={index}
                        href={item.route}
                        className="w-full xl:w-auto"
                        onClick={() => {
                            setShow(false);
                        }}
                    >
                        <li
                            className={`flex items-center space-x-3 border border-boxOutline hover:bg-primary transition-colors duration-300 px-5 w-full xl:w-auto h-[55px] xl:h-[46px] rounded-xl ${isActive(item.route) ? 'bg-primary' : 'bg-transparent'}`}
                        >
                            <MImage
                                src={item.icon}
                                w={22}
                                h={22}
                                alt={item.name}
                                className="object-contain"
                            />
                            <Typography>{item.name}</Typography>
                        </li>
                    </Link>
                ) : (
                    <li key={index} className="w-full xl:w-auto">
                        <DropdownMenu
                            onOpenChange={setIsOpenMore}
                            open={isOpenMore}
                        >
                            <DropdownMenuTrigger className="w-full xl:w-auto">
                                <div className="flex items-center space-x-3 border justify-between border-boxOutline hover:bg-primary transition-colors duration-300 w-full xl:w-auto px-5 h-[55px] xl:h-[46px] rounded-xl">
                                    <div className="flex items-center space-x-3">
                                        <MImage
                                            src={item.icon}
                                            w={22}
                                            h={22}
                                            alt={item.name}
                                            className="object-contain"
                                        />
                                        <Typography>{item.name}</Typography>
                                    </div>
                                    <span className="text-lg text-secondary pl-1">
                                        {/* {show ? <IoIosArrowUp /> : <IoIosArrowDown />} */}
                                        <IoIosArrowDown />
                                    </span>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="mt-2 w-full">
                                {item.dropdown?.map((subItem, subIndex) => (
                                    <Link
                                        key={subIndex}
                                        href={subItem.route}
                                        onClick={() => {
                                            setIsOpenMore(false);
                                            setShow(false);
                                        }}
                                    >
                                        <div className="flex items-center space-x-3 hover:bg-primary transition-colors duration-300 pl-5 pr-8 h-[46px] rounded-xl">
                                            <MImage
                                                src={subItem.icon}
                                                w={22}
                                                h={22}
                                                alt={item.name}
                                                className="object-contain"
                                            />
                                            <Typography>
                                                {subItem.name}
                                            </Typography>
                                        </div>
                                    </Link>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>
                )
            )}
            <li className="md:hidden w-full">
                <ClubDropdown />
            </li>
        </ul>
    );
};
