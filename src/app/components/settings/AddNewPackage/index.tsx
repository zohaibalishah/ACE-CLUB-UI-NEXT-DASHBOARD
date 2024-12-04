'use client';

import React, { useState } from 'react';
import { AppButton, Modal, Typography } from '../../common';
import { FiPlus } from 'react-icons/fi';
import { TextAreaField, TextField } from '../../form';
import { Checkbox } from '../../form/Checkbox';
import { RxCrossCircled } from 'react-icons/rx';

export const AddNewPackage = (): React.ReactElement => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <AppButton
                variant="primary"
                className="w-full max-w-[195px] ml-auto gap-1 max-h-11"
                onClick={() => {
                    setIsOpen(true);
                }}
            >
                <FiPlus className="text-secondary text-lg" /> Add new package
            </AppButton>
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                className="max-w-[598px] w-full p-5 sm:py-7 sm:px-9"
            >
                <Typography variant="h5Bold">Add new package</Typography>
                <form className="mt-2">
                    <div className="space-y-5">
                        <TextField placeholder="Name" />
                        <TextAreaField placeholder="Package description" />
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

                        <div>
                            <Typography variant="h5Bold">
                                Choose days
                            </Typography>
                            <div className="flex flex-wrap gap-8 gap-y-6 mt-5">
                                {[
                                    'Monday',
                                    'Tuesday',
                                    'Wednesday',
                                    'Thursday',
                                    'Friday',
                                    'Saturday',
                                    'Sunday',
                                ].map((day, index) => (
                                    <Checkbox label={day} key={index} />
                                ))}
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
