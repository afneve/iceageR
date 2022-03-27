import React from 'react';

import {
    Route,
    Routes
} from "react-router-dom";

import CountyList from '../CountyList';
import CountySelectList from '../CountySelectList';
import { Outlet } from "react-router-dom";

const Segments = () => {
    return (
        <div className='Segments'>
            <CountyList />
            <CountySelectList />

            <Outlet />
        </div>
    );
}

export default Segments;