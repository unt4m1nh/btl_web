import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import BigCorp from "./components/BigCorp/Bigcorp";
import Addaccount from "./components/AddAcount/Addaccount";
import ProductLine from "./components/ProductLine/Productline";
import Addproduct from "./components/AddProduct/Addproduct";
import List from "./components/List/List.js";
import {userColumns} from "./databaseSource.js";


function AppRouter() {
    console.log(userColumns);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/bigcorp" element={<BigCorp />} />
                <Route path="/addaccount" element={<Addaccount />}/>
                <Route path="/productline" element={<ProductLine />}/>
                <Route path="/addproduct" element={<Addproduct/>}/>
                <Route path="/users" element={<List columns={userColumns}/>}/>
            </Routes>
        </Router>
    )
}

export default AppRouter;