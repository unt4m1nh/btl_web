import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login"
import BigCorp from "./components/BigCorp/Bigcorp";
import Addaccount from "./components/AddAcount/Addaccount";
import ProductLine from "./components/ProductLine/Productline";
import Product from "./components/Product/Product";
import Addproduct from "./components/AddProduct/Addproduct";
import ListAccount from "./components/ListAccount/Listaccount";



function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/bigcorp" element={<BigCorp />} />
                <Route path="/addaccount" element={<Addaccount />}/>
                <Route path="/productline" element={<ProductLine />}/>
                <Route path="/product" element={<Product />}/>
                <Route path="/addproduct" element={<Addproduct/>}/>
                <Route path="/listaccount" element={<ListAccount/>}/>
            </Routes>
        </Router>
    )
}

export default AppRouter;