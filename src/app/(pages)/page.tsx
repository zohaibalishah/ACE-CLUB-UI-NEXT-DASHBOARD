import { type Metadata } from 'next';
import React from 'react';
import { Login } from '../components/authentication';

const IndexPage = (): React.ReactElement => <Login />;

export const metadata: Metadata = {
    title: 'Main Page',
};

export default IndexPage;
