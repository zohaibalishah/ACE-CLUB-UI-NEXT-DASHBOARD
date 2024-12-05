'use client';
import React from 'react';
import Link from 'next/link';
import { mImages } from '../../../../../public/images';
import { AppButton, MImage, Typography } from '@/app/components/common';
import { routes } from '@/app/base/constants';
import { PasswordField } from '@/app/components/form';

const ChangePassword = (): React.ReactElement => (
    <form className="w-full h-screen overflow-y-auto flex flex-col justify-center items-center py-7 px-5 ">
        <div className=" flex flex-col gap-y-5 w-full max-w-[457px]">
            <MImage
                src={mImages.logo}
                w={136}
                h={57}
                alt="logo"
                className="object-scale-down shrink-0 mx-auto"
            />
            <div className="text-center space-y-2.5 xl:px-12 mt-4">
                <Typography variant="h4">Change Password</Typography>
                <Typography>
                    Change default password and set your own
                </Typography>
            </div>
            <PasswordField placeholder="New password" className="w-full mt-6" />
            <PasswordField placeholder="Confirm password" className="w-full" />
            <Link href={routes.login} className="mt-10 w-full">
                <AppButton className="w-full" type="submit">
                    Update
                </AppButton>
            </Link>
            <Typography variant="smallRegular" className="text-center mt-3">
                Need help? Contact us at{' '}
                <span className="text-primary">contact@aceofficial.com</span>
            </Typography>
        </div>
    </form>
);
export default ChangePassword;
