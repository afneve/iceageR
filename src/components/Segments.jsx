import React, { Component } from 'react';

import County from './County';
import CountyList from './CountyList';

import {
    Route,
    Switch
} from "react-router-dom";

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