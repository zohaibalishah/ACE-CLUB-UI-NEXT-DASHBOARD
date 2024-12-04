'use client';
import React from 'react';
import { AppButton, Typography, UploadImageField } from '../../common';
import { SelectField, TextField } from '../../form';
import { FaPhoneVolume, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { FaSnapchatGhost } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io5';

// Define the type for the props
interface RegistrationOneProps {
    onContinue: () => void;
}

export const RegistrationOne: React.FC<RegistrationOneProps> = ({
    onContinue,
}) => (
    <div className="w-full mx-auto rounded-lg shadow-lg">
        <div className="max-w-[380px]  mx-auto">
            <Typography variant="h4" className="text-center font-semibold">
                Basic Information
            </Typography>
            <Typography className="text-center mt-3">
                Customers will be only seing your exact address while they’re
                booking.
            </Typography>
        </div>
        <form className="">
            <div className="py-10">
                <UploadImageField />
            </div>

            <div className="space-y-5 mt-3">
                <TextField placeholder="Club name" />
                <SelectField
                    placeholder="Country"
                    options={[{ label: 'Pakistan', value: 'Pakistan' }]}
                />
                <SelectField
                    placeholder="City"
                    options={[{ label: 'Peshawar', value: 'Peshawar' }]}
                />
                <TextField placeholder="Street address" />
            </div>
            <Typography className="mt-8">Social media links</Typography>
            <div className="mt-5 space-y-5">
                <TextField
                    type="number"
                    placeholder="Phone number"
                    className="w-full"
                    icon={<FaPhoneVolume />}
                />
                <TextField
                    placeholder="X"
                    className="w-full"
                    icon={<FaXTwitter />}
                />
                <TextField
                    placeholder="Youtube"
                    className="w-full"
                    icon={<FaYoutube />}
                />
                <TextField
                    placeholder="Snapchat"
                    className="w-full"
                    icon={<FaSnapchatGhost />}
                />
                <TextField
                    placeholder="WhatsApp"
                    className="w-full"
                    icon={<IoLogoWhatsapp />}
                />
            </div>

            <AppButton
                onClick={onContinue}
                variant="primary"
                className="w-full mt-12"
            >
                Continue
            </AppButton>
        </form>
    </div>
);
