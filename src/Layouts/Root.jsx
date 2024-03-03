import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Header from "../pages/Shared/Header/Header";

const Root = () => {
  return (
    <div className="max-w- mx-auto">
      <Header></Header>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
