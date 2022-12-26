import "./Addaccount.scss";

import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

const Addaccount = () => {

  return (
    <div className="addAccount">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <h2 className="main-title">Trang cấp tài khoản</h2>
        <form className="supply-form">
          <div className="floating-label">
            <input placeholder="Tên tài khoản" type="username" name="username" id="username" autocomplete="off"></input>
            <label for="username">Tên tài khoản:</label>
          </div>
          <div className="floating-label">
            <input placeholder="Email" type="email" name="email" id="email" autocomplete="off"></input>
            <label for="email">Email:</label>
          </div>
          <div className="floating-label">
            <input placeholder="Họ và tên" type="name" name="name" id="name" autocomplete="off"></input>
            <label for="name">Họ và tên:</label>
          </div>
          <div className="floating-label">
            <input placeholder="Số điện thoại" type="phone" name="phone" id="phone" autocomplete="off"></input>
            <label for="phone">Số điện thoại:</label>
          </div>
          <div className="floating-label">
            <input placeholder="Mật khẩu" type="password" name="password" id="password" autocomplete="off"></input>
            <label for="password">Mật khẩ🇺</label>
          </div>
          <div class="select-container">
            <label for="standard-select">Chọn loại tài khoản</label>
            <select id="standard-select">
              <option value="Option 1">Ban quản lí Big Corp</option>
              <option value="Option 2">Nhà máy sản xuất</option>
              <option value="Option 3">Cửa hàng</option>
              <option value="Option 4">Trung tâm bảo hành</option>
            </select>
            <span class="focus"></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addaccount;