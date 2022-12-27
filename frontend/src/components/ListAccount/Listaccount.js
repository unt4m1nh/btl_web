import "./Listaccount.scss";

import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import AccountTable from "../DataTable/AccountTable";

const ListAccount = () => {

    return (
        <div className="productLine">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <h2 className="product-line-heading"></h2>
                <AccountTable />
            </div>
        </div>
    );
};

export default ListAccount;