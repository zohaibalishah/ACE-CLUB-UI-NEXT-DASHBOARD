'use client';

import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { CgCheckR } from 'react-icons/cg';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FiXSquare } from 'react-icons/fi';
import { AddBooking } from '../AddBooking';
import { ScheduleHeader } from '../scheduleHeader';
import { Event } from './Event';

export interface IEvent {
    title: string;
    start: Date;
    end: Date;
    resourceId: string;
    icon: React.ReactElement;
    isBooked: boolean;
    type: string;
    players: Array<{ name: string; value: number }>;
}

const locales = {
    'en-US': enUS,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const currentDate = new Date();
const day = currentDate.getDate();

const myEventsList: IEvent[] = [
    {
        title: '',
        start: new Date(2024, 11, day, 9, 30),
        end: new Date(2024, 11, day, 10, 0),
        resourceId: 'tennis1',
        icon: <CgCheckR size={25} />,

        isBooked: true,
        type: 'Find a match',
        players: [
            {
                name: 'Aqib',
                value: 1.4,
            },
            {
                name: 'Wali',
                value: 1.7,
            },
        ],
    },
    {
        title: 'Booking label',
        start: new Date(2024, 11, day, 10, 30),
        end: new Date(2024, 11, day, 11, 0),
        resourceId: 'tennis2',
        icon: <AiOutlineClockCircle size={25} />,

        isBooked: false,
        type: 'In-Person',
        players: [],
    },
    {
        title: 'Summer end',
        start: new Date(2024, 11, day, 11, 30),
        end: new Date(2024, 11, day, 12, 0),
        resourceId: 'tennis1',
        icon: <FiXSquare size={25} />,

        isBooked: false,
        type: 'Package',
        players: [],
    },
    {
        title: 'Summer end',
        start: new Date(2024, 11, day, 12, 0),
        end: new Date(2024, 11, day, 12, 30),
        resourceId: 'pedal1',
        icon: <CgCheckR size={25} />,

        isBooked: false,
        type: 'Package',
        players: [],
    },
];

const resources = [
    { resourceId: 'tennis1', resourceTitle: 'Tennis 1' },
    { resourceId: 'tennis2', resourceTitle: 'Tennis 2' },
    { resourceId: 'pedal1', resourceTitle: 'Pedal 1' },
];

const CustomTimeGutterHeader: React.FC = (): React.JSX.Element => (
    <div className="bg-boxOutline text-center text-white py-2">Time</div>
);

const CustomTimeSlotGroup: React.FC = ({
    children,
}: any): React.JSX.Element => (
    <div className="rbc-timeslot-group">{children}</div>
);

export const ScheduleCalender = (): React.ReactElement => {
    const [isAddOpen, setIsAddOpen] = useState<boolean>(false);
    // const [selectedTimeSlot, setSelectedTimeSlot] = useState<Date | null>(null);

    // const handleTimeSlotClick = (date: Date): void => {
    //     setSelectedTimeSlot(date);
    // };

    return (
        <>
            <section className="pb-12">
                <ScheduleHeader />
                <div className="w-full overflow-x-auto max-w-full">
                    <div className="pt-9 min-w-[900px] xl:w-full overflow-x-auto">
                        <Calendar
                            localizer={localizer}
                            events={myEventsList}
                            startAccessor="start"
                            endAccessor="end"
                            min={new Date(2024, 11, 3, 9, 30)}
                            max={new Date(2024, 11, 3, 12, 30)}
                            style={{ height: 500 }}
                            view="day"
                            timeslots={1}
                            components={{
                                timeGutterHeader: CustomTimeGutterHeader,
                                timeSlotWrapper: CustomTimeSlotGroup,
                                event: Event,
                            }}
                            resources={resources}
                            resourceIdAccessor="resourceId"
                            resourceTitleAccessor="resourceTitle"
                            toolbar={false}
                            onSelectSlot={(slotInfo): void => {
                                // handleTimeSlotClick(slotInfo.start);
                                setIsAddOpen(true);
                            }}
                            selectable
                        />
                    </div>
                </div>
            </section>
            <AddBooking isOpen={isAddOpen} setIsOpen={setIsAddOpen} />
        </>
    );
};
