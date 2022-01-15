import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="project/:id" element={<Detail/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
