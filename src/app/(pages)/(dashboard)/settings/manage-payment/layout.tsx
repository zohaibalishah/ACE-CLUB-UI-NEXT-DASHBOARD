'use client';

import { routes } from '@/app/base/constants';
import { Typography } from '@/app/components/common';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface Props {
    readonly children: React.ReactNode;
}

const menu = [
    { name: 'Transaction', route: routes.transactions },
    { name: 'Payment method', route: routes.paymentMethods },
];

export default function Layout({ children }: Props): React.ReactElement {
    const pathname = usePathname();
    const isActive = (path: string): boolean => pathname === path;

    return (
        <section className="flex-1 flex flex-col lg:flex-row gap-7 lg:gap-10">
            <ul className="flex flex-row lg:flex-col gap-4 flex-wrap md:flex-nowrap lg:gap-6 w-full lg:w-[195px] mt-7 lg:mt-[69px]">
                {menu.map((item, index) => (
                    <Link
                        key={index}
                        href={item.route}
                        className="w-full xl:w-auto"
                    >
                        <li
                            className={`border border-boxOutline hover:bg-primary transition-colors flex items-center duration-300 px-5 flex-wrap lg:px-8 w-full xl:w-auto py-2 lg:py-0 lg:h-[46px] rounded-xl ${isActive(item.route) ? 'bg-primary' : 'bg-transparent'}`}
                        >
                            <Typography>{item.name}</Typography>
                        </li>
                    </Link>
                ))}
            </ul>
            <div className="flex-1">{children}</div>
        </section>
    );
}
