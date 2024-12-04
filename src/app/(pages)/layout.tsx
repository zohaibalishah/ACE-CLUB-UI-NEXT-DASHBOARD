import React from 'react';
import { type Metadata } from 'next';
import { StoreProvider } from '../StoreProvider';
import '../styles/globals.css';
import NextTopLoader from 'nextjs-toploader';
import { colors } from '../base/config';

interface Props {
    readonly children: React.ReactNode;
}

export default function RootLayout({ children }: Props): React.ReactElement {
    return (
        <StoreProvider>
            <html lang="en">
                <body className="bg-gradient-to-t from-bg-gradientTwo to-bg-gradientOne min-h-screen">
                    <NextTopLoader color={colors.primary} />
                    {children}
                </body>
            </html>
        </StoreProvider>
    );
}

export const metadata: Metadata = {
    title: 'ACE Club Dashboard',
};
