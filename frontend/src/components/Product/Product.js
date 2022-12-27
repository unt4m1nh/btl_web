import "./Product.scss";

import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import ProductTable from "../DataTable/ProductTable";

const Product = () => {

    return (
        <div className="productLine">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <h2 className="product-line-heading"></h2>
                <ProductTable />
            </div>
        </div>
    );
};

export default Product;