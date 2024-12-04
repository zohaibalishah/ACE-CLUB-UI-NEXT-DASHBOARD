'use client';

import React, { useState } from 'react';
import { Typography } from '../../common';

interface IRadioButton {
    label?: string;
    onChange?: () => void;
}

export const RadioButton = ({
    label,
    onChange,
}: IRadioButton): React.ReactElement => {
    const [checked, setChecked] = useState<boolean>(false);
    return (
        <div
            className="flex gap-3 items-center cursor-pointer"
            onClick={() => {
                setChecked(prev => !prev);
                onChange?.();
            }}
        >
            <div
                className={`flex p-1 w-5 h-5 rounded-full border-2 justify-center items-center bg-transparent ${checked ? 'border-primary' : 'border-secondary'}`}
            >
                {checked && (
                    <span className="inline-block w-full h-full bg-primary rounded-full" />
                )}
            </div>

            {typeof label !== 'undefined' && label?.length > 0 && (
                <Typography>{label}</Typography>
            )}
        </div>
    );
};
