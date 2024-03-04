import moment from "moment/moment";
import React from "react";

import logo from "../../../assets/logo.png";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="text-center ">
      <img src={logo} alt="" />
      <p className="font-poppins text-lg">Journalism Without Fear or Favour</p>
      <p className="text-xl">{moment().format("dddd, MMMM Do YYYY")}</p>
      <div className="flex">

      <button className="btn bg-rose-400">Latest</button>
            
            <Marquee>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cumque magni qui excepturi consequatur quod reiciendis placeat repellat quos molestias ratione, culpa soluta repellendus fugiat labore. Reprehenderit, eligendi in?</p>



            </Marquee>

      </div>
    </div>
  );
};

export default Header;
