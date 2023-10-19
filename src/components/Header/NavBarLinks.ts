import {Anchor, NavBarTitle, RoutPath} from '../../enum';

export type NavBarLinksType = {
    path: string
    title: string,
    anchor: string,
    isLink: boolean
}

export const pathArr = ['/our-products', '/advantages', '/documents', '/contacts', '/cooperation']

export const NavBarLinks: NavBarLinksType[] = [
    {
        path: RoutPath.OurProducts,
        title: NavBarTitle.OurProducts,
        anchor: '',
        isLink: true
    },
    {
        path: RoutPath.AboutUs,
        title: NavBarTitle.AboutUs,
        anchor: '',
        isLink: true
    },
    {
        path: RoutPath.ConnectWithUs,
        title: NavBarTitle.ConnectWithUs,
        anchor: '',
        isLink: true
    },
    {
        path: RoutPath.Collaboration,
        title: NavBarTitle.Collaboration,
        anchor: '',
        isLink: true
    }
]

export const NavBarLinksATP: NavBarLinksType[] = [
    {
        path: RoutPath.MainPage,
        title: NavBarTitle.MainPage,
        anchor: '',
        isLink: true
    },
    {
        path: RoutPath.AboutUs,
        title: NavBarTitle.AboutUs,
        anchor: '',
        isLink: true
    },
    {
        path: RoutPath.Advantages,
        title: NavBarTitle.Advantages,
        anchor: Anchor.ADVANTAGES,
        isLink: false
    },
    {
        path: RoutPath.Documents,
        title: NavBarTitle.Documents,
        anchor: Anchor.DOCUMENTS,
        isLink: false
    },
    {
        path: RoutPath.Contacts,
        title: NavBarTitle.Contacts,
        anchor: Anchor.CONTACTS,
        isLink: false
    },
    {
        path: RoutPath.Cooperation,
        title: NavBarTitle.Cooperation,
        anchor: '',
        isLink: true
    }
]