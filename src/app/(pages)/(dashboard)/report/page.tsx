import {
    BookingReportChart,
    CourtPieChart,
    CourtsRevenue,
    ReportStatistics,
} from '@/app/components/report';
import React from 'react';

const ReportPege = (): React.ReactElement => (
    <section className="pb-20">
        <ReportStatistics />
        <CourtsRevenue />
        <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-7 mt-7">
            <BookingReportChart />
            <CourtPieChart />
        </div>
    </section>
);

export default ReportPege;
