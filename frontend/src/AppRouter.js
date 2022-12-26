import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login"
import BigCorp from "./components/BigCorp/Bigcorp";
import Addaccount from "./components/AddAcount/Addaccount";
import ProductLine from "./components/ProductLine/Productline";
import Product from "./components/Product/Product";



function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/bigcorp" element={<BigCorp />} />
                <Route path="/addaccount" element={<Addaccount />}/>
                <Route path="/productline" element={<ProductLine />}/>
                <Route path="/product" element={<Product />}/>
            </Routes>
        </Router>
    )
}

export default AppRouter;