'use client';

import React, { useState } from 'react';
import { AppButton, Modal, Typography } from '../../common';
import { FiPlus } from 'react-icons/fi';
import { SelectField, SwitchButton, TextField } from '../../form';
import { RxCrossCircled } from 'react-icons/rx';

export const AddHoliday = (): React.ReactElement => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <AppButton
                variant="primary"
                className="w-full max-w-[155px] ml-auto gap-1 max-h-11"
                onClick={() => {
                    setIsOpen(true);
                }}
            >
                <FiPlus className="text-secondary text-lg" /> Add Holiday
            </AppButton>
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                className="max-w-[598px] w-full p-5 sm:py-7 sm:px-9"
            >
                <Typography variant="h5Bold">Add new Holiday</Typography>
                <form className="mt-2">
                    <div className="space-y-5">
                        <TextField placeholder="Holiday name" />
                        <div className="flex gap-5 flex-wrap">
                            <SelectField
                                placeholder="Select court"
                                className="flex-1"
                            />
                            <SwitchButton label="All court" />
                        </div>
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
                        <div className="flex gap-5 flex-wrap">
                            <TextField
                                type="time"
                                placeholder="Start time"
                                className="flex-1"
                            />
                            <TextField
                                type="time"
                                placeholder="End time"
                                className="flex-1"
                            />
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
