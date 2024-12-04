import React, { useState } from 'react';
import { Typography } from '../../common/Typography';
import { AppButton, Facilities } from '../../common';

interface RegistrationThreeProps {
    onContinue: () => void;
    onBack: () => void;
}

export const RegistrationThree: React.FC<RegistrationThreeProps> = ({
    onContinue,
    onBack,
}) => {
    const [selectedFacilities, setSelectedFacilities] = useState<number[]>([]);

    return (
        <div className="w-full">
            <Typography variant="h4" className="text-center">
                What facilities do you offer?
            </Typography>
            <Typography className="mt-2 text-center">
                Choose what facilities you offer
            </Typography>
            <div className="py-8 sm:py-12">
                <Facilities
                    selected={selectedFacilities}
                    setSelected={setSelectedFacilities}
                />
            </div>

            <div className="grid grid-cols-2 gap-4 w-full">
                <AppButton onClick={onBack} variant="secondary">
                    Back
                </AppButton>
                <AppButton onClick={onContinue} variant="primary">
                    Continue
                </AppButton>
            </div>
        </div>
    );
};
