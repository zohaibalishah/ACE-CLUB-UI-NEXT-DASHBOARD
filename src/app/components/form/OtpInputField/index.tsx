'use client';

import React from 'react';
import OtpInput from 'react-otp-input';

interface IOtpInput {
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
}

export const OtpInputField = ({
    value,
    onChange,
}: IOtpInput): React.ReactElement => (
    <div className="pt-3">
        <OtpInput
            value={value}
            onChange={onChange}
            numInputs={4}
            containerStyle="w-full flex justify-center gap-x-0 justify-between"
            inputStyle="w-full placeholder:text-secondary/30 bg-boxColorDark text-secondary min-w-[50px] lg:min-w-[63px] h-[50px] lg:h-[63px] rounded-full outline-none border border-boxOutline focus:border-primary bg-opacity-80 text-sm sm:text-base"
            renderSeparator={<span className="mx-3" />}
            renderInput={props => <input {...props} />}
            inputType="tel"
            shouldAutoFocus
        />
    </div>
);
