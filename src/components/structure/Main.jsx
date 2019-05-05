import React, { Component } from 'react';

import Progress from '../Progress';
import Segments from '../Segments';
import Info from '../Info';

import {
    Route,
    Switch
} from "react-router-dom";

class Main extends Component {
    render() {
        return (
            <main id="ice-age" className="App">
                <Switch>
                    <Route exact path="/iceageR" component={Progress} />
                    <Route path="/segments" component={Segments} />
                    <Route path="/info" component={Info} />
                </Switch>
            </main>
        );
    }
}

export default Main;