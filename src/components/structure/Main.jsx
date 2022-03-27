import React from 'react';

import {
    Route,
    Switch
} from "react-router-dom";

import Progress from '../Views/Progress';
import Segments from '../Views/Segments';
import Info from '../Views/Info';

const Main = () => {
    return (
        <main id="ice-age" className="App">
            <Switch>
                <Route exact path="/" component={Progress} />
                <Route path="/segments" component={Segments} />
                <Route path="/info" component={Info} />
            </Switch>
        </main>
    );
}

export default Main;