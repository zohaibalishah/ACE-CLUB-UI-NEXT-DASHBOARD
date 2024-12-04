'use client';
import React from 'react';
import Link from 'next/link';
import { mImages } from '../../../../../public/images';
import { AppButton, MImage, Typography } from '@/app/components/common';
import { TextField } from '@/app/components/form';
import { routes } from '@/app/base/constants';

const ForgotPassword = (): React.ReactElement => (
    <form className="w-full h-screen overflow-y-auto flex flex-col justify-center items-center py-7 px-5 ">
        <div className=" flex flex-col justify-center items-center gap-y-5 w-full max-w-[457px]">
            <MImage
                src={mImages.logo}
                w={136}
                h={57}
                alt="logo"
                className="object-scale-down shrink-0"
            />
            <div className="text-center space-y-2.5 xl:px-12 mt-4">
                <Typography variant="h4">Email verify</Typography>
                <Typography>
                    Enter email to verify to change password
                </Typography>
                and court owner
            </div>
            <TextField placeholder="Email" className="w-full" />
            <Link href={routes.verifyOtp} className="mt-10 w-full">
                <AppButton className="w-full" type="submit">
                    Send OTP
                </AppButton>
            </Link>
            <Typography variant="smallRegular" className="text-center mt-3">
                Need help? Contact us at{' '}
                <span className="text-primary">contact@aceofficial.com</span>
            </Typography>
        </div>
    </form>
);

export default ForgotPassword;
