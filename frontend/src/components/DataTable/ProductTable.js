import "./Datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { productColumns, productRows } from "../../productDataSource";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductTable = () => {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Thao tác",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to="/users/test" style={{ textDecoration: "none" }}>
                            <div className="viewButton">Chi tiết</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Xóa
                        </div>
                    </div>
                );
            },
        },
    ];
    return (
        <div className="datatable">
            <div className="datatableTitle">
                Thêm sản phẩm
                <Link to="/users/new" className="link">
                    Thêm mới
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={productColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
};

export default ProductTable;