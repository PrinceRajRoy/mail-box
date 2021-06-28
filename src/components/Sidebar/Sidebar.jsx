import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "../../icons/MenuIcon";
import tags from "../../utilities/tags";

function Sidebar() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <div className="bg-gray-800 p-2 text-gray-400 fixed w-screen sm:hidden z-10">
        <MenuIcon
          open={open}
          className="h-10 w-10 rounded-md sm:hidden hover:text-white hover:bg-gray-700 p-2 focus:ring-white focus:ring-2 cursor-pointer"
          onClick={toggle}
        />
      </div>
      <div
        className={`w-40 h-screen py-0 px-5 flex flex-col gap-6 justify-evenly text-md font-semibold bg-gray-800 fixed transition duration-300 sm-max:h-auto sm-max:w-screen sm-max:pb-3 sm-max:gap-1 sm-max:top-14 ${
          open ? "" : "sm-max:transform-gpu sm-max:-translate-y-56"
        }`}
      >
        {tags.map((tag, index) => (
          <NavLink
            to={`/${tag}`}
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
            activeClassName="bg-gray-900 text-white"
            key={tag + index}
          >
            {tag}
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Sidebar;
