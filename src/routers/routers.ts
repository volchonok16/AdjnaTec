import React from 'react';
import {RoutPath} from '../enum';
import {MainPage} from '../pages/MainPage/MainPage';
import {OurProducts} from '../pages/OurProducts/OurProducts';
import {AboutUs} from '../pages/AboutUs/AboutUs';
import {ConnectWithUs} from '../pages/ConnectWithUs/ConnectWithUs';
import {WhatWeDo} from '../pages/WhatWeDo/WhatWeDo';
import {Collaboration} from '../pages/Collaboration/Collaboration';

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
        component: OurProducts
    },
    {
        id: '3',
        path: RoutPath.AboutUs,
        component: AboutUs
    },
    {
        id: '4',
        path: RoutPath.ConnectWithUs,
        component: ConnectWithUs
    },
    {
        id: '5',
        path: RoutPath.WhatWeDo,
        component: WhatWeDo
    },
    {
        id: '6',
        path: RoutPath.Collaboration,
        component: Collaboration
    }
];