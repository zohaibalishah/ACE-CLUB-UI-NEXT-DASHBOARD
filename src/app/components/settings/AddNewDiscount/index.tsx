'use client';

import React, { useState } from 'react';
import { AppButton, Modal, Typography } from '../../common';
import { FiPlus } from 'react-icons/fi';
import { RadioButton, TextField } from '../../form';
import { RxCrossCircled } from 'react-icons/rx';

export const AddNewDiscount = (): React.ReactElement => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <AppButton
                variant="primary"
                className="w-full max-w-[175px] ml-auto gap-1 max-h-11"
                onClick={() => {
                    setIsOpen(true);
                }}
            >
                <FiPlus className="text-secondary text-lg" /> Add new code
            </AppButton>
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                className="max-w-[598px] w-full p-5 sm:py-7 sm:px-9"
            >
                <Typography variant="h5Bold">Add new discount</Typography>
                <form className="mt-2">
                    <div className="space-y-5">
                        <TextField placeholder="Discount title" />
                        <TextField placeholder="Discount code" />
                        <TextField placeholder="Discount value in % or fixed" />

                        <div className="flex gap-5 flex-wrap">
                            <TextField
                                type="date"
                                placeholder="Start date"
                                className="flex-1"
                            />
                            <TextField
                                type="date"
                                placeholder="End date"
                                className="flex-1"
                            />
                        </div>
                        <div>
                            <Typography variant="bodyMedium">
                                Discount code use
                            </Typography>
                            <div className="flex mt-4 items-center gap-5 md:gap-10 flex-wrap">
                                <RadioButton label="One time for player" />
                                <RadioButton label="Multiple time" />
                            </div>
                        </div>
                    </div>
                    <AppButton className="max-w-[243px] w-full mt-10">
                        Create
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
