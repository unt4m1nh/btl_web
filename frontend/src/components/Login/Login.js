import React from "react"
import ReactDOM from "react-dom"

import "./Login.scss"

import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const LoginButton = styled(Button)(
    {
        WebkitAppearance: "none",
        width: "auto",
        borderRadius: "24px",
        textAlign: "center",
        padding: "15px 40px",
        marginTop: "5px",
        marginBottom: "10px",
        backgroundColor: "#CB83CB",
        color: "#fff",
        fontSize: "14px",
        marginLeft: "auto",
        fontWeight: 500,
        boxShadow: "0px 2px 6px -1px rgba(0,0,0,.13)",
        border: "none",
        transition: "all .3s ease",
        outline: "0",
        "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0 2px 6px -1px rgba($primary, .65)",
            "&:active": { transform: "scale(.99)" }
        }
    }
);

const Login = () => {
    return (
        <div className="login-container">
            <div class="session">
                <div className="left">
                </div>
                <form class="log-in">
                    <h4>Chúng tôi là <span>Big Corp</span></h4>
                    <p>Chào mừng đã trở lại ! Hãy nhập thông tin tài khoản để đăng nhập ngay nhé </p>
                    <div class="floating-label">
                        <input placeholder="Email" type="email" name="email" id="email" autocomplete="off" />
                        <label for="email">Email:</label>
                    </div>
                    <div class="floating-label">
                        <input placeholder="Mật khẩu" type="password" name="password" id="password" autocomplete="off" />
                        <label for="password">Mật khẩu:</label>
                    </div>
                    <LoginButton href="/bigcorp">Đăng nhập</LoginButton>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked color="secondary" />} label="Ghi nhớ đăng nhập" />
                    </FormGroup>
                </form>
            </div>
        </div>
    )
}

export default Login