'use client';

import React, { useState } from 'react';
import { AppButton, Modal, Typography } from '../../common';
import { FiPlus } from 'react-icons/fi';
import { PasswordField, SelectField, TextField } from '../../form';
import { RxCrossCircled } from 'react-icons/rx';
import { Checkbox } from '../../form/Checkbox';

const permissions = [
    'Schedule',
    'Customers',
    'Revenue',
    'Reports',
    'Settings',
    'Edit Avenue',
    'Manage court',
    'Packages',
    'Holidays',
    'Club admin & Permission',
    'Onsite payment method',
    'Manage discount code',
];

export const AddNewUser = (): React.ReactElement => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <AppButton
                variant="primary"
                className="w-full sm:max-w-[166px] gap-1 max-h-11"
                onClick={() => {
                    setIsOpen(true);
                }}
            >
                <FiPlus className="text-secondary text-lg" /> Add new user
            </AppButton>
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                className="max-w-[598px] w-full p-5 sm:py-7 sm:px-9"
            >
                <Typography variant="h5Bold">Add new User</Typography>
                <form className="mt-2">
                    <div className="space-y-5">
                        <TextField placeholder="Holiday name" />
                        <div className="flex gap-5 flex-wrap">
                            <TextField placeholder="First name" />
                            <TextField placeholder="Last name" />
                        </div>
                        <TextField type="email" placeholder="Email" />
                        <TextField placeholder="Phone number" />
                        <PasswordField placeholder="Password" />
                        <SelectField placeholder="Select role" />
                    </div>

                    {/* Permissions form */}
                    <div>
                        <div className="flex justify-between items-center flex-wrap gap-5 py-8">
                            <Typography variant="h5Bold">
                                Select permission
                            </Typography>
                            <div className="flex gap-10">
                                <Checkbox label="View all" />
                                <Checkbox label="View & Edit all" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            {permissions.map((permission, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between flex-wrap items-center gap-5 "
                                >
                                    <Typography>{permission}</Typography>
                                    <div className="flex gap-10">
                                        <Checkbox label="View all" />
                                        <Checkbox label="View & Edit" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* end */}
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
