'use client';

import React, { useState } from 'react';
import { Typography } from '../../common';

interface ISwitchButton {
    label?: string;
    onChange?: () => void;
}

export const SwitchButton = ({
    label,
    onChange,
}: ISwitchButton): React.ReactElement => {
    const [on, setOn] = useState<boolean>(false);
    return (
        <div
            className="flex flex-col gap-3 items-end cursor-pointer"
            onClick={() => {
                setOn(prev => !prev);
                onChange?.();
            }}
        >
            {typeof label !== 'undefined' && label?.length > 0 && (
                <Typography variant="bodyMedium">{label}</Typography>
            )}
            <div
                className={`w-8 h-[18px] rounded-full p-0.5 flex items-center transition-all duration-300 ${on ? 'justify-start bg-newLinear' : 'justify-end bg-primary'}`}
            >
                <span className="inline-block w-[13px] h-[13px] bg-boxColorDark rounded-full" />
            </div>
        </div>
    );
};
