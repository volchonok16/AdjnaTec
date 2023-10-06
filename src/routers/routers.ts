import React from 'react';
import {RoutPath} from '../enum';
import {MainPage} from '../pages/MainPage/MainPage';
import {AboutUs} from '../pages/AboutUs/AboutUs';
import {AtpOnline} from '../pages/OurProducts/Atp-online/AtpOnline';
import {PrivacyPolicy} from '../pages/PrivacyPolicy/PrivacyPolicy';


type AppRoute = {
    id: string;
    path: string;
    component: React.ComponentType;
}

export const routers: AppRoute[] = [
    {
        id: '1',
        path: RoutPath.MainPage,
        component: MainPage,
    },
    {
        id: '2',
        path: RoutPath.OurProducts,
        /*component: OurProducts*/
        component: AtpOnline
    },
    {
        id: '3',
        path: RoutPath.AboutUs,
        component: AboutUs
    },
    {
        id: '4',
        path: RoutPath.ConnectWithUs,
        /*component: ConnectWithUs*/
        component: MainPage
    },
    {
        id: '5',
        path: RoutPath.WhatWeDo,
        /*component: WhatWeDo*/
        component: MainPage
    },
    {
        id: '6',
        path: RoutPath.Collaboration,
        /*component: Collaboration*/
        component: MainPage
    },
    {
        id: '7',
        path: RoutPath.PrivacyPolicy,
        component: PrivacyPolicy
    },
    {
        id: '8',
        path: RoutPath.Advantages,
        component: AtpOnline
    },
    {
        id: '9',
        path: RoutPath.Documents,
        component: AtpOnline
    },
    {
        id: '10',
        path: RoutPath.Contacts,
        component: AtpOnline
    },
];