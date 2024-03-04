import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
const RightSideNav = () => {
  return (
    <div>
      <h3>Login With</h3>
      <div className="space-y-2 p-4">
        {" "}
        <button className="btn outline w-full">
          <FaGoogle className=""></FaGoogle>
          <span>Google</span>
        </button>
        <button className="btn outline w-full ">
          <FaGithub className=""></FaGithub>
          <span>Github</span>
        </button>
      </div>
    </div>
  );
};

export default RightSideNav;
