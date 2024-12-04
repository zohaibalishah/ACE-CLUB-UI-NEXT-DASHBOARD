import React, { useState } from 'react';

import { AppButton, MImage, Typography } from '../../common';
import { registrationIcons } from '../../../../../public/icons/registrationIcons';
import {
    registartionCheckBoxData,
    registrationFeatureCheckBoxData,
    registrationSizeCheckBoxData,
    registrationTypeCheckBoxData,
} from '@/app/base/utils';
import { SelectField, TextField } from '../../form';

interface RegistrationSixProps {
    onContinue: () => void;
    onBack: () => void;
}

interface Facility {
    id: number;
    name: string;
}

interface Type {
    id: number;
    name: string;
}

interface Feature {
    id: number;
    name: string;
}
interface Size {
    id: number;
    name: string;
}
export const RegistrationSix: React.FC<RegistrationSixProps> = ({
    onBack,
    onContinue,
}) => {
    const [selectedFacilities, setSelectedFacilities] = useState<number[]>([]);

    const toggleFacility = (id: number): void => {
        setSelectedFacilities(prev =>
            prev.includes(id)
                ? prev.filter(facilityId => facilityId !== id)
                : [...prev, id]
        );
    };

    return (
        <div>
            <Typography variant="h4" className="text-center">
                List your court
            </Typography>
            <Typography className="text-center mt-2">
                Add your court and manage it
            </Typography>
            <div className="w-full">
                <form className="space-y-4 my-4 md:my-8">
                    <TextField placeholder="Court title" />
                    <SelectField placeholder="Sport" />
                    <TextField placeholder="Court price" />
                </form>
                <Typography
                    variant="h5Bold"
                    className="text-white font-bold mb-2 md:mb-4"
                >
                    Court Features
                </Typography>
                <Typography>TYPE</Typography>
                <div className="flex flex-wrap gap-3 sm:gap-5 mt-2 w-full">
                    {registrationTypeCheckBoxData.map((type: Type) => (
                        <div
                            key={type.id}
                            className="flex items-center gap-2.5 cursor-pointer"
                            onClick={() => {
                                toggleFacility(type.id);
                            }}
                        >
                            <MImage
                                src={
                                    selectedFacilities.includes(type.id)
                                        ? registrationIcons.checkedIcon
                                        : registrationIcons.UncheckedIcon
                                }
                                w={24}
                                h={24}
                                alt={''}
                            />
                            <Typography
                                variant="bodyMedium"
                                className="text-white text-sm"
                            >
                                {type.name}
                            </Typography>
                        </div>
                    ))}
                </div>
                <Typography className=" mt-5">FEATURE</Typography>
                <div className="flex  mt-2 w-full">
                    {registrationFeatureCheckBoxData.map((feature: Feature) => (
                        <div
                            key={feature.id}
                            className="flex items-center gap-2.5 cursor-pointer"
                            onClick={() => {
                                toggleFacility(feature.id);
                            }}
                        >
                            <Typography variant="bodyMedium">
                                {feature.name}
                            </Typography>
                            <button>
                                <MImage
                                    src={
                                        selectedFacilities.includes(feature.id)
                                            ? registrationIcons.checkedIcon
                                            : registrationIcons.UncheckedIcon
                                    }
                                    w={24}
                                    h={24}
                                    alt={''}
                                />
                            </button>
                        </div>
                    ))}
                </div>
                <Typography variant="bodyRegular" className="text-white mt-6">
                    SIZE
                </Typography>
                <div className="flex  mt-2 w-full">
                    {registrationSizeCheckBoxData.map((size: Size) => (
                        <div
                            key={size.id}
                            className="flex items-center gap-2.5 cursor-pointer"
                            onClick={() => {
                                toggleFacility(size.id);
                            }}
                        >
                            <Typography
                                variant="bodyMedium"
                                className="text-white text-sm"
                            >
                                {size.name}
                            </Typography>
                            <button>
                                <MImage
                                    src={
                                        selectedFacilities.includes(size.id)
                                            ? registrationIcons.checkedIcon
                                            : registrationIcons.UncheckedIcon
                                    }
                                    w={24}
                                    h={24}
                                    alt={''}
                                />
                            </button>
                        </div>
                    ))}
                </div>

                <Typography
                    variant="h5Bold"
                    className="text-white font-bold mt-7"
                >
                    Court facilities
                </Typography>
                {registartionCheckBoxData.map((facility: Facility) => (
                    <div
                        key={facility.id}
                        className="flex justify-between gap-20 mt-5 w-full cursor-pointer"
                        onClick={() => {
                            toggleFacility(facility.id);
                        }}
                    >
                        <Typography
                            variant="bodyMedium"
                            className="text-white text-sm"
                        >
                            {facility.name}
                        </Typography>
                        <MImage
                            src={
                                selectedFacilities.includes(facility.id)
                                    ? registrationIcons.checkedIcon
                                    : registrationIcons.UncheckedIcon
                            }
                            w={24}
                            h={24}
                            alt={''}
                        />
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-2 gap-4 mt-12 w-full">
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
