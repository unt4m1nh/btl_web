import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

import "./login.css"

import mainImg from "./img/product-marketing.jpg"

function Login() {
    return (
        <div>
            <Header />
            <div className="main">
                <div>
                    <img src={mainImg} className="mainImg" />
                </div>
                <form>
                    <div className="container">
                        <input type="text" placeholder="Tên đăng nhập" required></input>
                        <input type="text" placeholder="Mật khẩu" required></input>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Ghi nhớ đăng nhập" />
                        </FormGroup>
                        <Button variant="contained" color="success" href="/bigcorp">
                            Đăng nhập
                        </Button>
                        <Button variant="outlined" color="success" href="/">
                            Trở lại 
                        </Button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}


export default Login;