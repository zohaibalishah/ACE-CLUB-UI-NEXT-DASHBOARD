'use client';
import React from 'react';
import Link from 'next/link';
import { AppButton, MImage, Typography } from '../../common';
import { PasswordField, TextField } from '../../form';
import { mImages } from '../../../../../public/images';
import { routes } from '@/app/base/constants';

export const Login = (): React.ReactElement => (
    <section className="pb-10 sm:pb-0 h-screen overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 relative h-full">
            <div className="w-full md:h-screen  sticky top-0 hidden md:block ">
                <MImage
                    src={mImages.loginBg}
                    w={720}
                    h={768}
                    alt="login"
                    className="w-full object-cover object-bottom h-full sticky top-0 "
                />
            </div>

            <form className="w-full h-full flex flex-col justify-center items-center py-7 px-5 ">
                <div className=" flex flex-col justify-center items-center gap-y-5 w-full max-w-[457px]">
                    <MImage
                        src={mImages.logo}
                        w={136}
                        h={57}
                        alt="logo"
                        className="object-scale-down shrink-0"
                    />
                    <div className="text-center space-y-2.5 xl:px-12 mt-4">
                        <Typography variant="h4">
                            Welcome Back, login
                        </Typography>
                        <Typography>
                            Login to admin dashboard to see and mange app.
                        </Typography>
                        and court owner
                    </div>
                    <div className="space-y-6 w-full">
                        <TextField placeholder="Email" />
                        <PasswordField placeholder="Password" />
                        <Link href={routes.forgotPassword}>
                            <Typography variant="smallRegular" className="pt-2">
                                Forget Password?
                            </Typography>
                        </Link>
                    </div>
                    <Link href={routes.schedule} className="mt-10 w-full">
                        <AppButton className="w-full" type="submit">
                            Login
                        </AppButton>
                    </Link>
                    <Typography
                        variant="smallRegular"
                        className="text-center mt-3"
                    >
                        Need help? Contact us at{' '}
                        <span className="text-primary">
                            contact@aceofficial.com
                        </span>
                    </Typography>
                </div>
            </form>
        </div>
    </section>
);
