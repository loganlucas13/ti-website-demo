import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Startup from './pages/Startup';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Startup />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
