import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginOption from "./components/LoginOption/loginoption";
import Login from "./components/Login/login"
import BigCorp from "./components/BigCorp/bigcorp";



function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginOption />} />
                <Route path="/login" element={<Login />} />
                <Route path="/bigcorp" element={<BigCorp />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;