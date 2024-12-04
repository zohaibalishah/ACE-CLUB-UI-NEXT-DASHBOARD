import Navbar from '@/app/components/layout/Navbar';
import React from 'react';

interface Props {
    readonly children: React.ReactNode;
}

export default function Layout({ children }: Props): React.ReactElement {
    return (
        <>
            <Navbar />
            <header className="pt-5 sm:pt-7 lg:pt-12">
                <div className="container">
                    <main>{children}</main>
                </div>
            </header>
        </>
    );
}
