import React from 'react';
import { AppButton, Typography } from '../../common';

interface RegistrationTwoProps {
    onContinue: () => void;
    onBack: () => void;
}

export const RegistrationTwo: React.FC<RegistrationTwoProps> = ({
    onContinue,
    onBack,
}) => (
    <div className="flex flex-col items-center text-white">
        <Typography variant="h4">Is pin on the right place</Typography>
        <Typography variant="bodyRegular" className="text-center mt-2">
            If needed you can adjust it to the exact location of <br /> your
            court
        </Typography>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.6775640151413!2d71.54286077501185!3d34.00081487317629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917bf1e05455d%3A0x9bb0d74b7b5d5600!2sDeans%20Shopping%20Mall%20(Deans%20Trade%20Center%20Peshawar)!5e0!3m2!1sen!2s!4v1731590182973!5m2!1sen!2s"
            width="100%"
            className="w-full h-[300px] md:w-[534px] md:h-[450px] rounded-[10px] mt-10"
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="grid grid-cols-2 gap-4 w-full mt-8 sm:mt-12">
            <AppButton onClick={onBack} variant="secondary">
                Back
            </AppButton>
            <AppButton onClick={onContinue} variant="primary">
                Continue
            </AppButton>
        </div>
    </div>
);
