'use client';

import React from 'react';
import { AppButton, Modal, Typography } from '../../common';
import { RxCrossCircled } from 'react-icons/rx';
import { SelectField, TextField } from '../../form';

interface IAddBooking {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddBooking = ({
    isOpen,
    setIsOpen,
}: IAddBooking): React.ReactElement => (
    <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        className="max-w-[928px] w-full p-5 sm:py-6 sm:px-7"
    >
        <Typography variant="h5Bold">Add booking</Typography>
        <form>
            <div className="space-y-5 mt-2">
                <div className="flex gap-5 flex-wrap">
                    <TextField
                        type="time"
                        placeholder="Start date"
                        className="w-full sm:w-[200px]"
                    />
                    <TextField
                        type="time"
                        placeholder="End date"
                        className="w-full sm:w-[200px]"
                    />
                    <TextField
                        type="date"
                        placeholder="End date"
                        className="flex-1"
                    />
                </div>
                <SelectField placeholder="Padel 1" />
                <SelectField placeholder="Choose package (optional)" />
                <Typography variant="h5Bold">Payment</Typography>
                <div className="flex gap-5 flex-wrap">
                    <TextField
                        placeholder="Player name (optional)"
                        className="w-full sm:flex-1 "
                    />
                    <TextField
                        placeholder="Player pay $"
                        className="w-full sm:w-[193px]"
                    />
                    <button className="w-[147px] h-[46px] xl:h-[56px] rounded-full bg-primary/50 text-secondary text-sm sm:text-base">
                        Mark as Paid
                    </button>
                </div>
                <SelectField placeholder="Payment type" />
            </div>
            <div className="sm:flex space-y-5 sm:space-y-0 gap-7 mt-10">
                <AppButton className="w-full">Add Booking</AppButton>
                <AppButton
                    variant="secondary"
                    className="w-full mt-10"
                    onClick={() => {
                        setIsOpen(false);
                    }}
                >
                    Cancel booking
                </AppButton>
            </div>
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
);
