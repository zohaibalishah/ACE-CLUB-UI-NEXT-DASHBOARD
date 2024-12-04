import { AppButton, MImage } from '@/app/components/common';
import React from 'react';
import { mImages } from '../../../../../../../public/images';

const PinLocation = (): React.ReactElement => (
    <section>
        <div className="w-full h-[541px] rounded-lg overflow-hidden">
            <MImage
                src={mImages.map}
                w={500}
                h={600}
                alt=""
                className="w-full h-full object-cover"
            />
        </div>
        <AppButton
            variant="primary"
            className="w-full sm:w-[248px] ml-auto mt-9 md:mt-16"
        >
            Update
        </AppButton>
    </section>
);

export default PinLocation;
