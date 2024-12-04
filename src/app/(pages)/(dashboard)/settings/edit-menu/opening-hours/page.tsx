import { AppButton, HoursCustomization } from '@/app/components/common';
import React from 'react';

const OpeningHours = (): React.ReactElement => (
    <section>
        <HoursCustomization />
        <AppButton
            variant="primary"
            className="w-full sm:w-[248px] ml-auto mt-9 md:mt-16"
        >
            Update
        </AppButton>
    </section>
);

export default OpeningHours;
