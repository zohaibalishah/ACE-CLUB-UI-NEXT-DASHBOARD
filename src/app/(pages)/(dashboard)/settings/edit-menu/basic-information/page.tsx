'use client';

import { AppButton } from '@/app/components/common';
import { SelectField, TextField } from '@/app/components/form';
import React from 'react';

const BasicInformation = (): React.ReactElement => (
    <form
        onSubmit={e => {
            e.preventDefault();
        }}
    >
        <div className="space-y-7 w-full">
            <TextField placeholder="Club name" />
            <SelectField placeholder="Country" />
            <SelectField placeholder="City" />
            <TextField placeholder="Address" />
            <TextField placeholder="Zip code" />
        </div>
        <AppButton
            variant="primary"
            className="w-full sm:w-[248px] ml-auto mt-9 md:mt-16"
        >
            Update
        </AppButton>
    </form>
);

export default BasicInformation;
