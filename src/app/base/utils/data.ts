import { Icons } from '../../../../public/icons';
import { routes } from '../constants';
import type { IMenuItem } from '../types';
interface Facility {
    id: number;
    name: string;
    icon: string;
}

export const registartionCheckBoxData: Facility[] = [
    { id: 1, name: 'Free Parking', icon: Icons.fp },
    { id: 2, name: 'Wi-Fi', icon: Icons.wifi },
    { id: 3, name: 'Camera', icon: Icons.camera },
    { id: 4, name: 'Locker Room', icon: Icons.lr },
    { id: 5, name: 'Restaurant', icon: Icons.resturant },
    { id: 6, name: 'Changing Room', icon: Icons.cr },
];

export const registrationTypeCheckBoxData = [
    { id: 7, name: 'InDoor' },
    { id: 8, name: 'OutDoor' },
    { id: 9, name: 'Roofted OutDoor' },
];

export const registrationFeatureCheckBoxData = [
    { id: 10, name: 'Wall' },
    { id: 11, name: 'Crystall' },
    { id: 12, name: 'Panaromic' },
];
export const registrationSizeCheckBoxData = [
    { id: 13, name: 'Single' },
    { id: 14, name: 'Double' },
];

export const menu: IMenuItem[] = [
    { name: 'Schedule', route: routes.schedule, icon: Icons.Calender },
    { name: 'Customer', route: routes.customers, icon: Icons.Customer },
    { name: 'Revenue', route: routes.revenue, icon: Icons.Revenue },
    {
        name: 'More',
        route: '#',
        icon: Icons.More,
        dropdown: [
            {
                name: 'Report',
                route: routes.report,
                icon: Icons.report,
            },
            {
                name: 'Club wallet',
                route: routes.clubWallet,
                icon: Icons.cw,
            },
        ],
    },
];

export const settingMenu: IMenuItem[] = [
    {
        name: 'Edit venue',
        route: routes.basicInformation,
        icon: Icons.Calender,
    },
    { name: 'Manage court', route: routes.manageCourts, icon: Icons.Customer },
    { name: 'Packages', route: routes.packages, icon: Icons.Revenue },
    { name: 'Holidays', route: routes.holidays, icon: Icons.More },
    {
        name: 'Club admin & Permission',
        route: routes.rolesAndPermissions,
        icon: Icons.Revenue,
    },
    { name: 'Manage payment', route: routes.transactions, icon: Icons.Revenue },
    {
        name: 'Manage Discount codes',
        route: routes.discountCodes,
        icon: Icons.Revenue,
    },
];
export const editVenueMenu: IMenuItem[] = [
    {
        name: 'Basic information',
        route: routes.basicInformation,
        icon: Icons.Calender,
    },
    { name: 'PIN location', route: routes.pinLocation, icon: Icons.Customer },
    { name: 'Facilities', route: routes.facilities, icon: Icons.Revenue },
    { name: 'Opening hours', route: routes.openingHours, icon: Icons.More },
];
