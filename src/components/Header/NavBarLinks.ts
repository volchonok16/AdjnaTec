import {NavBarTitle, RoutPath} from '../../enum';

export type NavBarLinksType = {
    path: string
    title: string
}

export const pathArr = ['/our-products', '/advantages', '/documents', '/contacts', '/cooperation']

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
        path: RoutPath.Collaboration,
        title: NavBarTitle.Collaboration
    }
]

export const NavBarLinksATP:NavBarLinksType[] = [
    {
        path: RoutPath.MainPage,
        title: NavBarTitle.MainPage
    },
    {
        path: RoutPath.AboutUs,
        title: NavBarTitle.AboutUs
    },
    {
        path:RoutPath.Advantages,
        title:NavBarTitle.Advantages
    },
    {
        path:RoutPath.Documents,
        title:NavBarTitle.Documents
    },
    {
        path:RoutPath.Contacts,
        title:NavBarTitle.Contacts
    },
    {
        path:RoutPath.Cooperation,
        title:NavBarTitle.Cooperation
    }
]