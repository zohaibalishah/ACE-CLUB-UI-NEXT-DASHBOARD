'use client';

import React, { useState } from 'react';
import { AppButton, Modal, Typography } from '../../common';
import { RxCrossCircled } from 'react-icons/rx';
import { AiOutlineDelete } from 'react-icons/ai';
import { TextAreaField } from '../../form';
import { BookingFeatures } from './BookingFeatures';
import { BookingPlayers } from './BookingPlayers';
import { FaCheck } from 'react-icons/fa6';

interface IAddBooking {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BookingDetails = ({
    isOpen,
    setIsOpen,
}: IAddBooking): React.ReactElement => {
    const [isCancel, setIsCancel] = useState<boolean>(false);
    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            className={`w-full p-5 sm:py-6 sm:px-7 ${isCancel ? 'max-w-[572px]' : 'max-w-[928px]'}`}
        >
            {isCancel ? (
                <div className="flex flex-col gap-5 items-center">
                    <span className="w-10 h-10 bg-primary rounded-xl inline-flex justify-center items-center">
                        <FaCheck className="text-boxOutline text-xl" />
                    </span>
                    <Typography variant="h5Bold">Cancel Booking</Typography>
                    <Typography className="text-center">
                        Are you sure want to cancel this booking, once cancelled
                        will not be back.
                    </Typography>
                    <div className="flex gap-7 mt-3 w-full">
                        <AppButton
                            variant="secondary"
                            className="flex-1"
                            onClick={() => {
                                setIsCancel(false);
                            }}
                        >
                            Cancel
                        </AppButton>
                        <AppButton
                            className="flex-1"
                            onClick={() => {
                                setIsOpen(false);
                            }}
                        >
                            Done
                        </AppButton>
                    </div>
                </div>
            ) : (
                <>
                    <div className="flex justify-between flex-wrap items-center">
                        <Typography variant="h5Bold">Booking</Typography>
                        <div className="flex gap-4 sm:gap-7 items-center pt-5 md:pt-0">
                            <AppButton
                                variant="primary"
                                className="w-[155px] ml-auto gap-1 max-h-11"
                                onClick={() => {
                                    setIsOpen(true);
                                }}
                            >
                                <AiOutlineDelete className="text-secondary text-xl" />{' '}
                                Edit booking
                            </AppButton>
                            <button
                                onClick={() => {
                                    setIsCancel(true);
                                }}
                            >
                                <Typography className="!text-red-500">
                                    Cancel booking
                                </Typography>
                            </button>
                        </div>
                    </div>

                    <BookingFeatures />
                    <BookingPlayers />

                    <div className="mt-6">
                        <TextAreaField placeholder="Write game notes internally not see to the players" />
                    </div>
                    <AppButton className="mt-3 w-full sm:w-[126px] max-h-10">
                        Save note
                    </AppButton>

                    {/*  cancel button */}
                    <button
                        className="absolute top-3 right-4 md:hidden"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        <RxCrossCircled className="text-secondary text-2xl" />
                    </button>
                </>
            )}
        </Modal>
    );
};
