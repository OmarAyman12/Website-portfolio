import React from "react";
import NavLogo from "./NavLogo";
import SearchBar from "./SearchBar";
import DarkMode from "./DarkMode";
import DropDownMenu from "./DropDownMenu";
import ContactUs from "./ContactUs";
function Navbar() {
  return (
    <div className="fixed bg-white w-full flex p-4">
      
      <NavLogo />

      <span className="flex mx-auto">
        <SearchBar />
      </span>
      <div className="flex gap-3">
        <DarkMode />
        <DropDownMenu />
        <ContactUs />
      </div>
    </div>
  );
}

export default Navbar;
