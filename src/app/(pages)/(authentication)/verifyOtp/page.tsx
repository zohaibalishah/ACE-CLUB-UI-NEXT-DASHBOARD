'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { mImages } from '../../../../../public/images';
import { AppButton, MImage, Typography } from '@/app/components/common';
import { OtpInputField } from '@/app/components/form';
import { routes } from '@/app/base/constants';

const VerifyOtp = (): React.ReactElement => {
    const [otp, setOtp] = useState<string>('');
    return (
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
                    <Typography variant="h4">Verify OTP</Typography>
                    <Typography>
                        Verify OTP send to aqib.example@gmail.com
                    </Typography>
                    and court owner
                </div>
                {/* <TextField placeholder="Email" className="w-full" /> */}
                <OtpInputField value={otp} onChange={setOtp} />
                <Typography variant="smallRegular" className="text-left">
                    Did not get <button className="text-primary">Resend</button>
                </Typography>
                <Link href={routes.changePassword} className="mt-10 w-full">
                    <AppButton className="w-full" type="submit">
                        Verify
                    </AppButton>
                </Link>
                <Typography variant="smallRegular" className="text-center mt-3">
                    Need help? Contact us at{' '}
                    <span className="text-primary">
                        contact@aceofficial.com
                    </span>
                </Typography>
            </div>
        </form>
    );
};

export default VerifyOtp;
