import "./Factory.scss";

import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

const Factory = () => {

  return (
    <div className="factory">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <h1>This is Add account page</h1>
      </div>
    </div>
  );
};

export default Factory;