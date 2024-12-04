'use client';
import React, { useState } from 'react';
import { AppButton, Modal, Typography, UploadImageField } from '../../common';
import { FiPlus } from 'react-icons/fi';
import { SelectField, TextAreaField, TextField } from '../../form';
import { RxCrossCircled } from 'react-icons/rx';

export const NewTicket = (): React.ReactElement => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <AppButton
                variant="primary"
                className="w-full max-w-[175px] px-5 sm:px-7 h-[47px] shrink-0 rounded-xl bg-primary text-secondary text-sm"
                onClick={() => {
                    setIsOpen(true);
                }}
            >
                <FiPlus className="text-secondary text-lg" /> New Ticket
            </AppButton>
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                className="max-w-[598px] w-full p-5 sm:py-7 sm:px-9"
            >
                <Typography variant="h5Bold">Create new ticket</Typography>
                <form className="mt-2">
                    <div className="space-y-5">
                        <SelectField placeholder="Type" />
                        <TextField placeholder="Subject" />
                        <TextAreaField placeholder="Description" />

                        <div>
                            <div className="flex mt-4 items-center gap-5 md:gap-10 flex-wrap">
                                <UploadImageField />
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
