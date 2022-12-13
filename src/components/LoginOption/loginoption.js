import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import "./loginoption.css"

import corpLogo from "./img/download.png";
import factoryPic from "./img/factory.jfif";
import storePic from "./img/store.jfif";
import service from "./img/service.webp";


function LoginOption() {
    return (
        <div>
            <Header />
            <div className="login--option">
                <h1>Bạn là ?</h1>
                <h2>Lựa chọn để đăng nhập</h2>
                <div className="flex-container">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="logo"
                            height="250"
                            image={corpLogo}
                        />
                        <CardActions>
                            <Button size="small" href="./login">Ban điều hành</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="factory"
                            height="250"
                            image={factoryPic}
                        />
                        <CardActions>
                            <Button size="small">Cơ sở sản xuất</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="250"
                            image={storePic}
                        />
                        <CardActions>
                            <Button size="small">Đại lí phân phối</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="250"
                            image={service}
                        />
                        <CardActions>
                            <Button size="small">Trung tâm bảo hành</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LoginOption;