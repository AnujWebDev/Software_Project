import React, { useState } from "react";
import { scaleDown as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";

const DefaultMenu = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = ({ isOpen }) => {
    setMenuOpen(isOpen);
    if (!isOpen) {
      setDropdownOpen(false);
    }
  };

  const closeNavbar = () => {
    setDropdownOpen(false);
    setMenuOpen(false);
  };
  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      right: "36px",
      top: "17px",
      zIndex: 50,
    },
    bmBurgerBars: {
      background: "#FFA500",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#090c37",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
      right: 0,
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    
  };

  return (
    <div>
      <Menu
        styles={styles}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        itemListElement="div"
        right
        onStateChange={toggleMenu}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "50px",
          }}
        >
          <Link
            to={"/"}
            className="p-2 hover:cursor-pointer text-white w-full rounded transition duration-500 text-center ease-in-out transform hover:text-primary hover:scale-90"
            onClick={closeNavbar}
          >
            HOME
          </Link>
          <Link
            to={"/about"}
            className="p-2 hover:cursor-pointer text-white w-full rounded transition duration-500 text-center ease-in-out transform  hover:text-primary hover:scale-90"
          >
            ABOUT US
          </Link>
          <Link to={'/portofolio'} className="p-2 hover:cursor-pointer text-white w-full rounded transition duration-500 text-center ease-in-out transform  hover:text-primary hover:scale-90">
            PORTFOLIO
          </Link>
          <div className="relative inline-block">
            <Link
              className="p-2 flex justify-center hover:cursor-pointer text-white w-full rounded transition duration-500 text-center ease-in-out transform  hover:text-primary hover:scale-90"
              onClick={toggleDropdown}
            >
              SERVICES <MdOutlineArrowDropDown className="ml-2 text-2xl" />
            </Link>

            {isDropdownOpen && (
              <div className=" flex flex-col">
                <Link to={"/appdev"} className="p-2 ml-10 text-lg hover:cursor-pointer text-white w-full rounded transition duration-500 ease-in-out transform hover:text-primary hover:scale-90">
                  APP DEVELOPMENT
                </Link>
                <Link
                  to={"/webdev"}
                  className="p-2 ml-10 text-lg hover:cursor-pointer text-white w-full rounded transition duration-500 ease-in-out transform hover:text-primary hover:scale-90"
                >
                  WEBSITE DEVELOPMENT
                </Link>
                <Link
                  to={"/brand"}
                  className="p-2 ml-10 text-lg hover:cursor-pointer text-white w-full rounded transition duration-500 ease-in-out transform  hover:text-primary hover:scale-90"
                >
                  BRANDING & DESIGN
                </Link>
                <Link
                  to={"/consultation"}
                  className="p-2 ml-10 text-lg hover:cursor-pointer text-white w-full rounded transition duration-500 ease-in-out transform  hover:text-primary hover:scale-90"
                >
                  CONSULTATION
                </Link>
                <Link
                  to={"/digital"}
                  className="p-2 ml-10 text-lg hover:cursor-pointer text-white w-full rounded transition duration-500 ease-in-out transform  hover:text-primary hover:scale-90"
                >
                  DIGITAL MARKETING
                </Link>
                <Link
                  to={"/devops"}
                  className="p-2 ml-10 text-lg hover:cursor-pointer text-white w-full rounded transition duration-500 ease-in-out transform  hover:text-primary hover:scale-90"
                >
                  DEVOPS
                </Link>
                <Link
                  to={"/retainers"}
                  className="p-2 ml-10 text-lg hover:cursor-pointer text-white w-full rounded transition duration-500 ease-in-out transform  hover:text-primary hover:scale-90"
                >
                  RETAINERS
                </Link>
                <Link
                  to={"/maintenance"}
                  className="p-2 ml-10 text-lg hover:cursor-pointer text-white w-full rounded transition duration-500 ease-in-out transform  hover:text-primary hover:scale-90"
                >
                  MAINTENANCE
                </Link>
              </div>
            )}
          </div>
          <button className="p-2 hover:cursor-pointer text-white w-full rounded transition duration-500 text-center ease-in-out transform  hover:text-primary hover:scale-90">
            CONTACT
          </button>
        </div>
      </Menu>
    </div>
  );
};

export default DefaultMenu;