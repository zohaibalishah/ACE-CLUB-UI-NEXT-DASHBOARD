import { registartionCheckBoxData } from '@/app/base/utils';
import React from 'react';
import { Typography } from '../Typography';
import { MImage } from '../MImage';
import { registrationIcons } from '../../../../../public/icons/registrationIcons';
import Image from 'next/image';

interface IFacilities {
    selected: number[];
    setSelected: React.Dispatch<React.SetStateAction<number[]>>;
}

export const Facilities: React.FC<IFacilities> = ({
    selected,
    setSelected,
}) => {
    const toggleFacility = (id: number): void => {
        setSelected(prev =>
            prev.includes(id)
                ? prev.filter(facilityId => facilityId !== id)
                : [...prev, id]
        );
    };

    return (
        <div className="w-full flex flex-col gap-6">
            {registartionCheckBoxData.map(facility => (
                <div
                    key={facility.id}
                    className="flex justify-between w-full cursor-pointer"
                    onClick={() => {
                        toggleFacility(facility.id);
                    }}
                >
                    <div className="flex gap-3 items-center">
                        <Image
                            src={facility.icon}
                            width={24}
                            height={24}
                            alt=""
                        />
                        <Typography className="text-white text-sm">
                            {facility.name}
                        </Typography>
                    </div>
                    <button>
                        <MImage
                            src={
                                selected.includes(facility.id)
                                    ? registrationIcons.checkedIcon
                                    : registrationIcons.UncheckedIcon
                            }
                            w={24}
                            h={24}
                            alt={facility.name}
                        />
                    </button>
                </div>
            ))}
        </div>
    );
};
