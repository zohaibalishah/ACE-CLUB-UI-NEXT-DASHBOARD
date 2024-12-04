import type React from 'react';

export interface ISubMenuItem {
    name: string;
    route: string;
    icon: string;
}
export interface IMenuItem {
    name: string;
    route: string;
    icon: string;
    dropdown?: ISubMenuItem[];
}

export interface IAction {
    title: string;
    icon: React.ReactElement;
    onClick?: () => void;
}
