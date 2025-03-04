import React from "react";
import NavLogo from "./NavLogo";
import SearchBar from "./SearchBar";
import DarkMode from "./DarkMode";
import DropDownMenu from "./DropDownMenu";

import Services from "./Services";
import Contact from "./Contact";
function Navbar() {
  return (
    <div className=" bg-white w-full flex p-4">
      <NavLogo />

      <span className="flex mx-auto">
        <SearchBar />
      </span>
      <div className="flex gap-3">
        <DarkMode />
        <Services />
        <Contact/>
        <DropDownMenu/>
      </div>
    </div>
  );
}

export default Navbar;
