'use client';
import React from 'react';
import { Typography } from '../../common/Typography';
import { AppButton, HoursCustomization } from '../../common';

interface RegistrationFourProps {
    onContinue: () => void;
    onBack: () => void;
}

export const RegistrationFour: React.FC<RegistrationFourProps> = ({
    onBack,
    onContinue,
}) => (
    <div className="w-full">
        <Typography variant="h4" className="text-center">
            Opening hours
        </Typography>
        <Typography className="mt-2 text-center">
            Set your hours so it can show to customers
        </Typography>

        <div className="py-12">
            <HoursCustomization />
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4 w-full">
            <AppButton onClick={onBack} variant="secondary">
                Back
            </AppButton>
            <AppButton onClick={onContinue} variant="primary">
                Continue
            </AppButton>
        </div>
    </div>
);
