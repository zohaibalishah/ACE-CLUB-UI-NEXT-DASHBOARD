'use client';

import React, { useState } from 'react';
import { MImage, Typography } from '../../common';
import { registrationIcons } from '../../../../../public/icons/registrationIcons';

interface ICheckbox {
    label?: string;
    onChange?: () => void;
}

export const Checkbox = ({
    label,
    onChange,
}: ICheckbox): React.ReactElement => {
    const [selected, setSelected] = useState<boolean>(false);
    return (
        <div
            className="flex gap-3 items-center cursor-pointer"
            onClick={() => {
                setSelected(prev => !prev);
                onChange?.();
            }}
        >
            <MImage
                src={
                    selected
                        ? registrationIcons.checkedIcon
                        : registrationIcons.UncheckedIcon
                }
                w={24}
                h={24}
                alt={label ?? ''}
            />

            {typeof label !== 'undefined' && label?.length > 0 && (
                <Typography>{label}</Typography>
            )}
        </div>
    );
};
