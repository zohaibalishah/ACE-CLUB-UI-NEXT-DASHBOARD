import { Typography } from '@/app/components/common';
import React from 'react';
import { IoMdInformationCircleOutline } from 'react-icons/io';

export const BookingPlayers = (): React.ReactElement => (
    <div className="mt-6">
        <div className="flex gap-3 items-center ">
            <Typography variant="h5Bold">Player</Typography>
            <div className="relative group">
                <IoMdInformationCircleOutline className="text-2xl text-secondary" />

                {/* Tooltip  content */}
                <div className="absolute left-0 top-full mt-3 p-6 bg-[#2F3145] border border-newLinear w-full md:w-[640px] z-10 space-y-1 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 hidden md:block">
                    <Typography variant="smallRegular">
                        Tennis single:
                    </Typography>
                    <ul className="list-disc ml-7 text-secondary">
                        <li>
                            <Typography variant="smallRegular">
                                if no player joined the match before 4 hours
                                from start of the match, the match will be
                                canceled.
                            </Typography>
                        </li>
                    </ul>
                    <Typography variant="smallRegular">
                        Tenies double:
                    </Typography>
                    <ul className="list-disc ml-7 text-secondary">
                        <li>
                            <Typography variant="smallRegular">
                                if no plater joined the match before 12 hourse
                                the match will be canceled.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="smallRegular">
                                if only two player joind the match before 6
                                hours, the match will be canceled.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="smallRegular">
                                if only three plyers joined the match before 4
                                hours, the match will be canceled.
                            </Typography>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="mt-6 space-y-6">
            <div className="flex justify-between items-center max-w-[310px] ">
                <div className="flex gap-2 items-center">
                    <span className="w-11 h-11 rounded-full bg-white inline-flex justify-center items-center text-base">
                        A
                    </span>
                    <div>
                        <Typography variant="smallRegular">
                            Aqib Javid
                        </Typography>
                        <span className="text-[10px] bg-primary p-1 py-0.5 px-3 rounded-full text-white">
                            12
                        </span>
                    </div>
                </div>
                <Typography className="!text-primary">SAR 20</Typography>
            </div>
            <div className="flex justify-between items-center max-w-[310px] ">
                <div className="flex gap-2 items-center">
                    <span className="w-11 h-11 rounded-full bg-white inline-flex justify-center items-center text-base">
                        A
                    </span>
                    <div>
                        <Typography variant="smallRegular">Abubakar</Typography>
                        <span className="text-[10px] bg-primary p-1 py-0.5 px-3 rounded-full text-white">
                            12
                        </span>
                    </div>
                </div>
                <Typography className="!text-primary">SAR 20</Typography>
            </div>
        </div>
    </div>
);
