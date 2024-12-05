'use client';

import { settingMenu } from '@/app/base/utils';
import { MImage, Typography } from '@/app/components/common';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { RxCrossCircled, RxHamburgerMenu } from 'react-icons/rx';

interface Props {
    readonly children: React.ReactNode;
}

export default function Layout({ children }: Props): React.ReactElement {
    const pathname = usePathname();
    const isActive = (path: string): boolean => pathname === path;
    const [show, setShow] = useState<boolean>(false);
    return (
        <section className="xl:flex gap-7 flex-wrap pb-8">
            <aside>
                <div className="flex gap-4 items-center">
                    <button
                        className={`text-secondary border border-boxOutline cursor-pointer w-9 h-9 inline-flex justify-center items-center bg-boxOutline  rounded-lg text-lg md:text-xl xl:hidden `}
                        onClick={() => {
                            setShow(prev => !prev);
                        }}
                    >
                        <RxHamburgerMenu />
                    </button>
                    <Typography variant="h5Bold">Settings</Typography>
                </div>
                <ul
                    className={`xl:mt-10 flex flex-col gap-6 max-w-[350px] fixed top-0 h-screen overflow-y-auto px-5 xl:px-0 pt-12 pb-8 xl:py-0 xl:h-auto left-0 bg-boxColorDark xl:bg-transparent z-10 xl:static transition-all duration-500 ${show ? 'translate-x-0 visible opacity-100 gap-7 border-2 border-boxOutline w-[350px]' : '-translate-x-full invisible opacity-0 xl:translate-x-0 xl:visible xl:opacity-100 xl:w-[300px]'}`}
                >
                    {settingMenu.map((item, index) => (
                        <Link
                            key={index}
                            href={item.route}
                            className="w-full xl:w-auto"
                            onClick={() => {
                                setShow(false);
                            }}
                        >
                            <li
                                className={`flex items-center space-x-3 border border-boxOutline hover:bg-primary transition-colors duration-300 px-8 w-full xl:w-auto h-[46px] rounded-xl ${isActive(item.route) ? 'bg-primary' : 'bg-transparent'}`}
                            >
                                <MImage
                                    src={item.icon}
                                    w={20}
                                    h={20}
                                    alt={item.name}
                                    className="object-contain"
                                />
                                <Typography>{item.name}</Typography>
                            </li>
                        </Link>
                    ))}
                    <li
                        className="cursor-pointer text-2xl text-secondary absolute top-3 right-3 xl:hidden"
                        onClick={() => {
                            setShow(false);
                        }}
                    >
                        <RxCrossCircled />
                    </li>
                </ul>
            </aside>
            <section className="flex-1">{children}</section>
        </section>
    );
}
