import {Routes, Route, useLocation} from 'react-router-dom'
import {routers} from '../../routers/routers';
import React, {useEffect} from 'react'

type RoutePropsType = {
    component: React.ElementType;
    path: string;
    id: string;
}

type RootContainerPropsType = {
    activeLinkHandler: (path: string) => void
}

export const RootContainer = ({activeLinkHandler}: RootContainerPropsType) => {

    const location = useLocation();

    useEffect(() => {
        activeLinkHandler(location.pathname)
    }, [location.pathname])

    return (
        <Routes>
            {
                routers.map(({component: Component, ...item}: RoutePropsType) => (
                        <Route path={item.path} key={item.id} element={<Component/>}/>
                    )
                )
            }
        </Routes>
    )
}