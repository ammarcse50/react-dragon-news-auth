import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <h2>This is HOME</h2>

      <div className="grid md:grid-cols-4  gap-6">
        <div className="outline ">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2  outline">
          <h2>news comming</h2>
        </div>
        <div className="outline">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
