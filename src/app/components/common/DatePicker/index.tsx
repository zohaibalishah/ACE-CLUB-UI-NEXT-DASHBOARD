'use client';
import * as React from 'react';
import { format } from 'date-fns';
import { Button, Calendar, Popover } from '../../shadcn';
import { PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import { cn } from '@/app/base/utils/utils';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { LuCalendarDays } from 'react-icons/lu';

export const DatePicker = (): React.ReactElement => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={'outline'}
                    className={cn(
                        'w-full sm:w-[220px] bg-boxOutline gap-5 justify-center sm:justify-start text-left outline-none font-normal p-6 rounded-xl',
                        date !== null && 'text-white'
                    )}
                >
                    <IoIosArrowBack />
                    <div className="flex gap-2 items-center">
                        <LuCalendarDays className="text-xl" />
                        {date !== null ? (
                            format(date ?? '', 'EEE, MMM yy')
                        ) : (
                            <span>Pick a date</span>
                        )}
                    </div>
                    <IoIosArrowForward />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-boxOutline border z-20">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
};
