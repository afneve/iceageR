import {
    Route,
    Routes
} from 'react-router-dom';

import Progress from '../Views/Progress';
import Segments from '../Views/Segments';
import County from '../County';
import Info from '../Views/Info';

const Main = () => {
    return (
        <main id='ice-age' className='App'>
            <Routes>
                <Route path='/' element={<Progress />} />
                <Route path='info' element={<Info />} />
                <Route path='segments' element={<Segments />}>
                    <Route path=':countyId' element={<County />} />
                </Route>
            </Routes>
        </main>
    );
}

export default Main;