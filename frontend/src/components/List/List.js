import "./list.scss";
import Sidebar from "../Sidebar/Sidebar.js";
import Navbar from "../Navbar/Navbar.js";
import Datatable from "../DataTable/DataTable.js";

const List = ({columns}) => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContaine">
        <Navbar/>
        <Datatable columns={columns}/>
      </div>
    </div>
  )
}


export default List;