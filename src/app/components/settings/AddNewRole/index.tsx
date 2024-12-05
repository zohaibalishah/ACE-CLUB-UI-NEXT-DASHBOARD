'use client';

import React, { useState } from 'react';
import { AppButton, Modal, Typography } from '../../common';
import { FiPlus } from 'react-icons/fi';
import { TextField } from '../../form';
import { RxCrossCircled } from 'react-icons/rx';
import { Checkbox } from '../../form/Checkbox';

const permissions = [
    'Feature list',
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

export const AddNewRole = (): React.ReactElement => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <AppButton
                variant="secondary"
                className="w-full sm:max-w-[166px] gap-1 max-h-11"
                onClick={() => {
                    setIsOpen(true);
                }}
            >
                <FiPlus className="text-secondary text-lg" /> Add new role
            </AppButton>
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                className="max-w-[598px] w-full p-5 sm:py-7 sm:px-9"
            >
                <Typography variant="h5Bold">Add new Role</Typography>
                <form className="mt-2">
                    <TextField placeholder="Give role name" />

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
                    <AppButton className="w-full sm:max-w-[243px] mt-10">
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
