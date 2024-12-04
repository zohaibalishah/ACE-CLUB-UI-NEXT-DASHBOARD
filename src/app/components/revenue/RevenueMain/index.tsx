'use client';

import React, { useState } from 'react';
import { FilterSelect, Typography } from '../../common';
import { PartiallyPaidList } from '../PartiallyPaymentList';
import { AllPaymentList } from '../AllPaymentLIst';

const paymentList: Record<string, React.ReactElement> = {
    All: <AllPaymentList />,
    'Partially Paid': <PartiallyPaidList />,
};

export const RevenueMain = (): React.ReactElement => {
    const [selected, setSelected] = useState<string>('All');
    return (
        <section>
            <section className="flex justify-between flex-wrap gap-4 items-center">
                <div className="flex gap-8 items-center ">
                    <Typography variant="h5Bold">Payment list</Typography>
                    <div className="flex p-1.5 items-center justify-center bg-boxOutline rounded-xl">
                        {['All', 'Partially Paid'].map((item, index) => (
                            <button
                                key={index}
                                className={`min-w-[120px] h-[40px] rounded-xl text-secondary text-sm transition-all duration-300 ${selected === item ? 'bg-primary' : ''}`}
                                onClick={() => {
                                    setSelected(item);
                                }}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex gap-5 justify-end ml-auto">
                    <FilterSelect placeholder="Current week" />
                </div>
            </section>
            {paymentList[selected]}
        </section>
    );
};
