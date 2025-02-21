import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing, Login, Dashbord, NotFound } from './pages';


export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashbord />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

