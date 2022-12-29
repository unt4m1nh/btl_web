export const userColumns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
        field: "user",
        headerName: "Tên tài khoản",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },
    {
        field: "phone",
        headerName: "Số điện thoại",
        width: 230,
    },
    {
        field: "address",
        headerName: "Địa chỉ",
        width: 230,
    },
    {
        field: "account-type",
        headerName: "Loại tài khoản",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithStatus">
                    {params.row.isAdmin ? "Admin" : 
                    (params.row.isFactory ? "Factory" : 
                    (params.row.isStore ? "Store" : "Service")) }
                </div>
            );
        },
    },
];

export const proColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "productName",
        headerName: "Tên sản phẩm",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
                    {params.row.productname}
                </div>
            );
        },
    },
    {
        field: "type",
        headerName: "Loại",
        width: 230,
    },
    {
        field: "Price",
        headerName: "Giá",
        width: 230,
    },
    {
        field: "WarrantyTime",
        headerName: "TGBH",
        width: 230,
    },
];
