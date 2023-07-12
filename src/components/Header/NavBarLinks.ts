import {NavBarTitle, RoutPath} from '../../enum';

export type NavBarLinksType = {
    path: string
    title: string
}

export const NavBarLinks: NavBarLinksType[] = [
    {
        path: RoutPath.OurProducts,
        title: NavBarTitle.OurProducts
    },
    {
        path: RoutPath.AboutUs,
        title: NavBarTitle.AboutUs
    },
    {
        path: RoutPath.ConnectWithUs,
        title: NavBarTitle.ConnectWithUs
    },
    {
        path: RoutPath.WhatWeDo,
        title: NavBarTitle.WhatWeDo
    },
    {
        path: RoutPath.Collaboration,
        title: NavBarTitle.Collaboration
    }
]