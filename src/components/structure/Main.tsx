import { Route, Routes } from "react-router-dom";

import Home from "../Containers/Home";
import Progress from "../Containers/Progress/Progress";
import Segments from "../Containers/Segments";
import County from "../County";
import Info from "../Containers/Info";
import Stats from "../Containers/Stats";
import Bonus from "../Containers/Bonus";

const Main = () => {
    return (
        <main id="ice-age" className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="progress" element={<Progress />} />
                <Route path="segments" element={<Segments />}>
                    <Route path=":countyId" element={<County />} />
                </Route>
                <Route path="stats" element={<Stats />} />
                <Route path="info" element={<Info />} />
                <Route path="bonus" element={<Bonus />} />
            </Routes>
        </main>
    );
};

export default Main;
