'use client';

import React, { useState } from 'react';
import { MImage } from '../../common';
import { mImages } from '../../../../../public/images';
import { NavMenu } from '../NavMenu';
import { Icons } from '../../../../../public/icons';
import { ProfileDropdown } from '../ProfileDrodown';
import { ClubDropdown } from '../ClubDropdown';
import { RxHamburgerMenu } from 'react-icons/rx';
import Link from 'next/link';
import { routes } from '@/app/base/constants';

const Navbar: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <nav className="bg-boxColorDark">
            <div className="container flex items-center gap-4 justify-between py-4 md:py-7">
                <div className="flex gap-3 sm:gap-4 items-center">
                    <button
                        className="text-secondary border border-boxOutline cursor-pointer w-9 h-9 md:w-[45px] md:h-[42px] inline-flex justify-center items-center bg-boxOutline  rounded-lg text-lg md:text-2xl xl:hidden"
                        onClick={() => {
                            setShow(prev => !prev);
                        }}
                    >
                        <RxHamburgerMenu />
                    </button>
                    <Link href={routes.schedule}>
                        <MImage
                            src={mImages.logo}
                            w={76}
                            h={32}
                            alt={'ACE'}
                            className="w-14 md:w-auto"
                        />
                    </Link>
                </div>
                <NavMenu show={show} setShow={setShow} />
                <div className="flex items-center gap-4 sm:gap-x-6">
                    <button className="flex items-center justify-center w-9 h-9 md:w-[46px] md:h-[46px] border border-boxOutline rounded-xl">
                        <MImage
                            src={Icons.Notification}
                            w={22}
                            h={22}
                            alt={'Notification'}
                            className="w-4 md:w-auto"
                        />
                    </button>
                    <ClubDropdown />
                    <ProfileDropdown />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
