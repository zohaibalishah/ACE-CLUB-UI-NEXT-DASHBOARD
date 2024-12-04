import React from 'react';
import { StatisticCard, Typography } from '../../common';

const statistic = {
    title: 'Wallet Balance',
    figure: '4890 ASR',
    up: true,
    down: false,
    link: '#',
};

export const WalletHeader = (): React.ReactElement => (
    <section>
        <Typography variant="h5Bold">Club Wallet</Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 py-8">
            <div>
                <StatisticCard card={statistic} />
            </div>
        </div>
    </section>
);
