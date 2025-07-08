import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Startup from './pages/Startup';

function App() {
    return (
        <>
            <div className="min-h-screen bg-[repeating-linear-gradient(135deg,rgba(28,25,23,0.03)_0,rgba(28,25,23,0.03)_2px,transparent_2px,transparent_12px)]">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Startup />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
