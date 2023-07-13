import {Routes, Route} from 'react-router-dom'
import {routers} from '../../routers/routers';
import React from 'react'

type RoutePropsType = {
    component: React.ElementType;
    path: string;
    id: string;
}

export const RootContainer = () => {
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