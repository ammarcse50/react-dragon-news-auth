import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import moment from 'moment';
import  image1 from "../../../assets/1.png"
import  image2 from "../../../assets/2.png"
import  image3 from "../../../assets/3.png"



const LeftSideNav = () => {
  const [categories, setCatgories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCatgories(data));
  }, []);
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-[20px] ">All Category</h2>

      {categories.map((element) => (
        <NavLink
          className="no-underline text-[#9F9F9F] block text-[20px] mb-3 ml-4"
          key={element.id}
          to={`/category/${element.id}`}
        >
          {element.name}
        </NavLink>
      ))}

      <div>

          <img src={image1} alt="" />
          <p className="text-center font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
           <div className="flex gap-10 ml-6">
            <p>sports</p>
            <p>{moment().format("MMMM Do YYYY")} </p>
           </div>
          <img src={image2} alt="" />
          <p className="text-center font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
           <div className="flex gap-10 ml-6">
            <p>sports</p>
            <p>{moment().format("MMMM Do YYYY")} </p>
           </div>
          <img src={image3} alt="" />
          <p className="text-center font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
           <div className="flex gap-10 ml-6">
            <p>sports</p>
            <p>{moment().format("MMMM Do YYYY")} </p>
           </div>

      </div>
    </div>
  );
};

export default LeftSideNav;
