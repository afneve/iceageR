import React from 'react';

import {
    Route,
    Switch
} from "react-router-dom";

import County from '../County';
import CountyList from '../CountyList';
import CountySelectList from '../CountyList';

const Segments = () => {
    return (
        <>
            <CountyList />
            <CountySelectList />

            <Switch>
                <Route path="/segments/:county" component={County} />
            </Switch>
        </>
    );
}

export default Segments;