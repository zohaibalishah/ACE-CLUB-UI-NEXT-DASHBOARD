import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '../../shadcn';
import { MImage, Typography } from '../../common';
import { Icons } from '../../../../../public/icons';
import { IoIosArrowDown } from 'react-icons/io';
import Link from 'next/link';
import Image from 'next/image';
import { routes } from '@/app/base/constants';

const links = [
    {
        name: 'Settings',
        link: routes.basicInformation,
        icon: Icons.settings,
    },
    { name: 'Manage profile', link: '#', icon: Icons.mp },
    {
        name: 'Activity log',
        link: '#',
        icon: Icons.al,
    },
    {
        name: 'Support ticket',
        link: '#',
        icon: Icons.st,
    },
];

export const ProfileDropdown = (): React.ReactElement => (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <div className="flex items-center space-x-1 sm:space-x-3">
                <MImage
                    src={Icons.Avatar}
                    w={50}
                    h={50}
                    alt={Icons.Avatar}
                    className="w-9 md:w-auto"
                />
                <IoIosArrowDown className="text-xl text-secondary pl-1" />
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2">
            <div className="flex flex-col gap-3 px-4 pb-4">
                <div className="mt-5 flex gap-2 items-center">
                    <MImage
                        src={Icons.Avatar}
                        w={50}
                        h={50}
                        alt={Icons.Avatar}
                    />
                    <div className="flex flex-col gap-1">
                        <Typography
                            variant="smallRegular"
                            className="text-SecondaryColor"
                        >
                            Aqib Javid
                        </Typography>
                        <span className="text-xs text-secondary inline-flex justify-center py-0.5 mt-1 bg-primary rounded-full">
                            Admin
                        </span>
                    </div>
                </div>
                <ul className="mt-1 list-none flex flex-col gap-y-4">
                    {Array.isArray(links) &&
                        links.map((item, index) => (
                            <li key={item.name + index}>
                                <Link href={item.link}>
                                    <div className="flex gap-x-3 items-center">
                                        <Image
                                            src={item.icon}
                                            alt="Products bag"
                                            width={22}
                                            height={22}
                                            className="object-contain"
                                        />
                                        <Typography className="text-SecondaryColor">
                                            {item.name}
                                        </Typography>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    <li>
                        <Link
                            href={'/'}
                            className="flex gap-x-2.5 items-center cursor-pointer"
                        >
                            <Image
                                src={Icons.logout}
                                alt="Products bag"
                                width={22}
                                height={22}
                                className="object-contain"
                            />
                            <Typography className="text-SecondaryColor">
                                Logout
                            </Typography>
                        </Link>
                    </li>
                </ul>
            </div>
        </DropdownMenuContent>
    </DropdownMenu>
);
