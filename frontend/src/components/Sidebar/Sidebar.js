import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContex.js";

import { Button } from "@mui/material";

import "./Sidebar.scss"

const Sidebar = () => {
    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    const logoutHandler = async (e) => {
        e.preventDefault();
        localStorage.removeItem("user");
        dispatch({ type: "LOGOUT" });
        navigate("/");
    }
    return (
        <div className="sidebar">
        
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Big Corp</span>
                </Link>
            </div>
            <hr />
            <div className="center">
            {user.isAdmin && 
                <ul>
                    <p className="title">TRANG CHÍNH</p>
                    <Link to="/bigcorp" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">QUẢN LÍ TÀI KHOẢN</p>
                    <Link to="/addaccount" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineIcon className="icon" />
                            <span>Thêm tài khoản</span>
                        </li>
                    </Link>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineIcon className="icon" />
                            <span>Danh sách tài khoản</span>
                        </li>
                    </Link>
                    <p className="title">QUẢN LÍ SẢN PHẨM </p>
                    <Link to="/addproduct" style={{ textDecoration: "none" }}>
                        <li>
                            <StoreIcon className="icon" />
                            <span>Thêm sản phẩm</span>
                        </li>
                    </Link>
                    <Link to="/productline" style={{ textDecoration: "none" }}>
                        <li>
                            <StoreIcon className="icon" />
                            <span>Dòng sản phẩm</span>
                        </li>
                    </Link>
                    <Link to="/product" style={{ textDecoration: "none" }}>
                        <li>
                            <InsertChartIcon className="icon" />
                            <span>Thống kê sản phẩm</span>
                        </li>
                    </Link>
                    <p className="title">QUẢN LÍ BẢO HÀNH</p>
                    <Link to="/guarantee" style={{ textDecoration: "none" }}>
                    <li>
                        <PsychologyOutlinedIcon className="icon" />
                        <span>Bảo hành sản phẩm</span>
                    </li>
                    </Link>
                    <p className="title">DỊCH VỤ</p>
                    <li>
                        <PsychologyOutlinedIcon className="icon" />
                        <span>Truy vấn</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="icon" />
                        <span>Cài đặt</span>
                    </li>
                    <p className="title">NGƯỜI DÙNG</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span>Thông tin cá nhân</span>
                    </li>
                    <Link to="#" onClick={logoutHandler}>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span>Đăng xuất</span>
                    </li>
                    </Link>
                </ul>
            }
            {user.isStore && 
                <ul>
                    <p className="title">TRANG CHÍNH</p>
                    <Link to="/bigcorp" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">QUẢN LÍ SẢN PHẨM </p>
                    <Link to="/productline" style={{ textDecoration: "none" }}>
                        <li>
                            <StoreIcon className="icon" />
                            <span>Kho hàng</span>
                        </li>
                    </Link>
                    <p className="title">QUẢN LÍ ĐƠN HÀNG</p>
                    <Link to="/guarantee" style={{ textDecoration: "none" }}>
                    <li>
                        <PsychologyOutlinedIcon className="icon" />
                        <span>Thêm đơn hàng</span>
                    </li>
                    </Link>
                    <Link to="/guarantee" style={{ textDecoration: "none" }}>
                    <li>
                        <PsychologyOutlinedIcon className="icon" />
                        <span>Danh sách đơn hàng</span>
                    </li>
                    </Link>
                    <p className="title">SẢN PHẨM BẢO HÀNH</p>
                    <Link to="/guarantee" style={{ textDecoration: "none" }}>
                    <li>
                        <PsychologyOutlinedIcon className="icon" />
                        <span>Danh sách sản phẩm bảo hành</span>
                    </li>
                    </Link>
                    <p className="title">NGƯỜI DÙNG</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span>Thông tin cá nhân</span>
                    </li>
                    <Link to="#" onClick={logoutHandler}>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span>Đăng xuất</span>
                    </li>
                    </Link>
                </ul>
            }
            {user.isFactory && 
                <ul>
                    <p className="title">TRANG CHÍNH</p>
                    <Link to="/bigcorp" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">QUẢN LÍ SẢN PHẨM </p>
                    <Link to="/productline" style={{ textDecoration: "none" }}>
                        <li>
                            <StoreIcon className="icon" />
                            <span>Kho hàng</span>
                        </li>
                    </Link>
                    <Link to="/productline" style={{ textDecoration: "none" }}>
                        <li>
                            <StoreIcon className="icon" />
                            <span>Thêm sản phẩm vào kho</span>
                        </li>
                    </Link>
                    <Link to="/addconsignment" style={{ textDecoration: "none" }}>
                        <li>
                            <StoreIcon className="icon" />
                            <span>Xuất sản cho đại lý</span>
                        </li>
                    </Link>
                    <p className="title">SẢN PHẨM LỖI</p>
                    <Link to="/guarantee" style={{ textDecoration: "none" }}>
                    <li>
                        <PsychologyOutlinedIcon className="icon" />
                        <span>Danh sách sản phẩm lỗi</span>
                    </li>
                    </Link>
                    <p className="title">NGƯỜI DÙNG</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span>Thông tin cá nhân</span>
                    </li>
                    <Link to="#" onClick={logoutHandler}>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span>Đăng xuất</span>
                    </li>
                    </Link>
                </ul>
            }
            {user.isService && 
                <ul>
                    <p className="title">TRANG CHÍNH</p>
                    <Link to="/bigcorp" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">QUẢN LÍ SẢN PHẨM </p>
                    <Link to="/productline" style={{ textDecoration: "none" }}>
                        <li>
                            <StoreIcon className="icon" />
                            <span>Sản phẩm cần bảo hành</span>
                        </li>
                    </Link>
                    <Link to="/productline" style={{ textDecoration: "none" }}>
                        <li>
                            <StoreIcon className="icon" />
                            <span>Hoàn trả sản phẩm lỗi </span>
                        </li>
                    </Link>
                    <p className="title">NGƯỜI DÙNG</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span>Thông tin cá nhân</span>
                    </li>
                    <Link to="#" onClick={logoutHandler}>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span>Đăng xuất</span>
                    </li>
                    </Link>
                </ul>
            }
            </div>
        </div>
    );
};

export default Sidebar;
