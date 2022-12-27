import React from "react";
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";

import "./Addproduct.scss";

import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import styled from "@emotion/styled";

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

const Addproduct = () => {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [images, setImages] = React.useState([]);
  const maxNumber = 2;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="addAccount">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <h2 className="add-account-heading">Thêm sản phẩm mới</h2>
        <div class="formContainer">
          <div className="add-image">
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
              acceptType={["jpg"]}
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                      <img className="account-logo" src={image.data_url} alt="" width="100" />
                    </div>
                  ))}
                  <button
                    style={isDragging ? { color: "red" } : null}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    +
                  </button>
                </div>
              )}
            </ImageUploading>
          </div>
          <form class="log-in">
            <div class="floating-label">
              <input placeholder="Tên sản phẩm" type="product-name" name="product-name" id="product-name" autocomplete="off" />
              <label for="product-name">Tên sản phẩm:</label>
            </div>
            <div class="floating-label">
              <input placeholder="Mã sản phẩm" type="product-line" name="product-line" id="product-line" autocomplete="off" />
              <label for="product-line">Mã sản phẩm:</label>
            </div>
            <div class="floating-label">
              <input placeholder="Giá tiền" type="product-price" name="product-price" id="product-price" autocomplete="off" />
              <label for="product-price">Giá tiền:</label>
            </div>
            <div class="floating-label">
              <input placeholder="Mô tả:" type="textarea" name="product-description" id="product-description" autocomplete="off" />
              <label for="product-description">Mô tả:</label>
            </div>
            {/* <div class="floating-label">
              <input placeholder="Mô tả:" type="Mô tả:" name="Mô tả:" id="Mô tả:" autocomplete="off" />
              <label for="Mô tả:">Mô tả::</label>
            </div>
            <div class="floating-label">
              <input placeholder="Số điện thoại" type="phone" name="phone" id="phone" autocomplete="off" />
              <label for="phone">Số điện thoại:</label>
            </div>
            <div class="floating-label">
              <input placeholder="Giá tiền" type="product-price" name="product-price" id="product-price" autocomplete="off" />
              <label for="product-price">Giá tiền:</label>
            </div> */}
          </form>
          <div className="product-type-container">
            <div class="floating-label">
              <input placeholder="Thời gian bảo hành" type="textarea" name="product-description" id="product-description" autocomplete="off" />
              <label for="product-description">Thời gian bảo hành:</label>
            </div>
            <Box className="product-line-selection" sx={{ minWidth: 200 }}>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
                <InputLabel id="demo-simple-select-standard-label">Dòng sản phẩm</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={''}>Ban quản lý</MenuItem>
                  <MenuItem value={''}>Nhà máy sản xuất</MenuItem>
                  <MenuItem value={''}>Đại lý phân phối</MenuItem>
                  <MenuItem value={''}>Trung tâm bảo hành</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
        <LoginButton href="/bigcorp">Thêm vào hệ thống</LoginButton>
      </div>
    </div>
  );
};

export default Addproduct;