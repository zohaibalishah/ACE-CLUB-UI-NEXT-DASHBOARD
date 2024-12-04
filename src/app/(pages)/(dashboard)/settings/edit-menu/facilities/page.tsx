'use client';

import { AppButton, Facilities } from '@/app/components/common';
import React, { useState } from 'react';

const FacilitiesPage = (): React.ReactElement => {
    const [selected, setSelected] = useState<number[]>([]);
    return (
        <section>
            <Facilities selected={selected} setSelected={setSelected} />
            <AppButton
                variant="primary"
                className="w-full sm:w-[248px] ml-auto mt-9 md:mt-16"
            >
                Update
            </AppButton>
        </section>
    );
};
export default FacilitiesPage;
