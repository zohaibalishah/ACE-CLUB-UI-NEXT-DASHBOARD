'use client';

import React, { useState } from 'react';
import { AppButton, Modal, Typography } from '../../common';
import { FiPlus } from 'react-icons/fi';
import { TextField } from '../../form';
import { RxCrossCircled } from 'react-icons/rx';

export const AddNewMethod = (): React.ReactElement => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <AppButton
                variant="primary"
                className="w-full max-w-[165px] ml-auto gap-1 max-h-11"
                onClick={() => {
                    setIsOpen(true);
                }}
            >
                <FiPlus className="text-secondary text-lg" /> New Method
            </AppButton>
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                className="max-w-[598px] w-full p-5 sm:py-7 sm:px-9"
            >
                <Typography variant="h5Bold">Add new method</Typography>
                <form className="mt-2">
                    <div className="space-y-5">
                        <TextField placeholder="Title" />
                        <TextField placeholder="IBAN" />
                        <TextField type="date" placeholder="Expiry date" />
                    </div>
                    <AppButton className="max-w-[243px] w-full mt-10">
                        Add
                    </AppButton>
                </form>

                {/*  cancel button */}
                <button
                    className="absolute top-4 right-4 md:hidden"
                    onClick={() => {
                        setIsOpen(false);
                    }}
                >
                    <RxCrossCircled className="text-secondary text-2xl" />
                </button>
            </Modal>
        </>
    );
};
