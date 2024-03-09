import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
          className="text-[#9F9F9F] block text-[20px] mb-3 ml-4"
          key={element.id}
        >
          {element.name}
        </NavLink>
      ))}
    </div>
  );
};

export default LeftSideNav;
