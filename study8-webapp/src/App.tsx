import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ROUTES from "./routes";
import HomePage from "./pages/base/HomePage";
import LoginPage from './pages/auth/login/LoginPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path={ROUTES.HOME} element={<HomePage />} />
                <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            </Routes>
        </Router>
    );
}

export default App;
