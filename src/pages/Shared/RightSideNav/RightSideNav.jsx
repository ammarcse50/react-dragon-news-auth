import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import qzone1 from "../../../assets/qZone1.png"
import qzone2 from "../../../assets/qZone2.png"
import qzone3 from "../../../assets/qZone3.png"
const RightSideNav = () => {
  return (
    <div>
      <h3>Login With</h3>
      <div className="space-y-2 p-4">
        <button className="btn outline w-full">
          <FaGoogle className=""></FaGoogle>
          <span>Google</span>
        </button>
        <button className="btn outline w-full ">
          <FaGithub className=""></FaGithub>
          <span>Github</span>
        </button>
      </div>

      <div className="flex-col  flex p-4  mb-6">
        <h2>Find Us here</h2>
        <a href="" className="border border-solid  rounded-t-xl p-3">
          <FaGoogle className="mr-3"></FaGoogle>
          <span>Google</span>
        </a>
        <a href="" className="border border-solid p-3 ">
          <FaGithub className="mr-3"></FaGithub>
          <span>Github</span>
        </a>
        <a href="" className="border rounded-b-xl border-solid p-3 ">
          <FaGithub className="mr-3"></FaGithub>
          <span>Github</span>
        </a>
      </div>
      <div className="flex-col  flex p-4  mb-6">
        <h2>Q Zone</h2>
       <img src={qzone1} alt="" />
       <img src={qzone2} alt="" />
       <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
