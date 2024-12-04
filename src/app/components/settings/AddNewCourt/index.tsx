'use client';

import React, { useState } from 'react';
import { AppButton, Facilities, Modal, Typography } from '../../common';
import { FiPlus } from 'react-icons/fi';
import { SelectField, TextField } from '../../form';
import { Checkbox } from '../../form/Checkbox';

export const AddNewCourt = (): React.ReactElement => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [facilities, setFacilities] = useState<number[]>([]);
    return (
        <>
            <AppButton
                variant="primary"
                className="w-full max-w-[170px] max-h-11 ml-auto gap-1"
                onClick={() => {
                    setIsOpen(true);
                }}
            >
                <FiPlus className="text-secondary text-lg" /> Add new court
            </AppButton>
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                className="max-w-[598px] w-full p-5 sm:py-7 sm:px-9"
            >
                <Typography variant="h5Bold">Create new court</Typography>
                <form className="mt-2">
                    <div className="space-y-5">
                        <SelectField placeholder="Sport" />
                        <TextField placeholder="Price" />
                        <div className="flex gap-5">
                            <TextField
                                placeholder="Price for 60min"
                                className="flex-1"
                            />
                            <TextField
                                placeholder="Player $"
                                className="max-w-[193px]"
                            />
                        </div>
                        <div className="flex gap-5">
                            <TextField
                                placeholder="Price for 90min"
                                className="flex-1"
                            />
                            <TextField
                                placeholder="Player $"
                                className="max-w-[193px]"
                            />
                        </div>
                        <div className="flex gap-5">
                            <TextField
                                placeholder="Price for 120min"
                                className="flex-1"
                            />
                            <TextField
                                placeholder="Player $"
                                className="max-w-[193px]"
                            />
                        </div>
                        <div className="rounded-xl bg-boxColorDark p-6">
                            <Typography variant="h5Bold">
                                Court Features
                            </Typography>
                            <div className="space-y-6">
                                <div className="mt-4 space-y-3">
                                    <Typography>TYPE</Typography>
                                    <div className="flex gap-8 items-center">
                                        <Checkbox label="InDoor" />
                                        <Checkbox label="OutDoor" />
                                        <Checkbox label="Roofed OutDoor" />
                                    </div>
                                </div>
                                <div className="mt-4 space-y-3">
                                    <Typography>FEATURE</Typography>
                                    <div className="flex gap-8 items-center">
                                        <Checkbox label="Wall" />
                                        <Checkbox label="Crystal" />
                                        <Checkbox label="Panaromic" />
                                    </div>
                                </div>
                                <div className="mt-4 space-y-3">
                                    <Typography>SIZE</Typography>
                                    <div className="flex gap-8 items-center">
                                        <Checkbox label="Single" />
                                        <Checkbox label="Double" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-xl bg-boxColorDark p-6 mb-8">
                            <Typography variant="h5Bold" className="mb-5">
                                Court facilities
                            </Typography>
                            <Facilities
                                selected={facilities}
                                setSelected={setFacilities}
                            />
                        </div>
                    </div>
                    <AppButton className="max-w-[243px] w-full mt-10">
                        Create
                    </AppButton>
                </form>
            </Modal>
        </>
    );
};
