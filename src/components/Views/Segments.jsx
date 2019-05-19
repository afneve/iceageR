import React, { Component } from 'react';

import {
    Route,
    Switch
} from "react-router-dom";

import County from '../County';
import CountyList from '../CountyList';

class Segments extends Component {

    render() {
        return (
            <React.Fragment>
                <CountyList />

                <Switch>
                    <Route path="/segments/:county" component={County} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default Segments;