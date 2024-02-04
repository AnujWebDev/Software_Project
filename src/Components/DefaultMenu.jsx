import React, { useEffect, useRef, useState } from "react";
import { scaleDown as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";
import {
  FaHome,
  FaPhoneSquareAlt,
  FaEnvelopeOpenText,
  FaLinkedin,
  FaFacebook,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const DefaultMenu = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [shouldCloseMenu, setShouldCloseMenu] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const onStateChange = (state) => {
    setMenuOpen(state.isOpen);
    if (!state.isOpen) {
      setDropdownOpen(false);
    }
  };

  const closeNavbar = () => {
    setDropdownOpen(false);
    setMenuOpen(false);
    setShouldCloseMenu(true);
  };

  useEffect(() => {
    if (shouldCloseMenu) {
      setShouldCloseMenu(false);
    }
  }, [shouldCloseMenu]);
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
        right
        onStateChange={onStateChange}
        isOpen={isMenuOpen}

      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap:'40px'
          }}
        >
          <Link
            to={"/"}
            style={{letterSpacing:'2px'}}
            className=" font-bodyFont text-2xl hover:cursor-pointer text-white w-full rounded transition duration-500 text-left ease-in-out transform hover:text-primary hover:scale-90"
            onClick={closeNavbar}
          >
            HOME
          </Link>
          <Link
            to={"/about"}
            style={{letterSpacing:'2px'}}
            onClick={closeNavbar}
            className=" font-bodyFont text-2xl  hover:cursor-pointer text-white w-full rounded transition duration-500 text-left ease-in-out transform  hover:text-primary hover:scale-90"
          >
            ABOUT US
          </Link>
          <Link to={'/portofolio'} style={{letterSpacing:'2px'}} onClick={closeNavbar} className=" font-bodyFont text-2xl  hover:cursor-pointer text-white w-full rounded transition duration-500 text-left ease-in-out transform  hover:text-primary hover:scale-90">
            PORTFOLIO
          </Link>
          <div className="relative inline-block">
            <Link
              style={{letterSpacing:'2px'}}
              
              className="flex font-bodyFont text-2xl hover:cursor-pointer text-white w-full rounded transition duration-500 text-left ease-in-out transform  hover:text-primary hover:scale-90"
              onClick={toggleDropdown}
            >
              SERVICES <MdOutlineArrowDropDown className="ml-2 text-2xl" />
            </Link>

            {isDropdownOpen && (
              <div className=" flex flex-col gap-1">
                <Link to={"/appdev"} style={{letterSpacing:'2px'}} onClick={closeNavbar}   className=" font-bodyFont ml-10 text-lg hover:cursor-pointer text-white w-full rounded transition duration-500 ease-in-out transform hover:text-primary hover:scale-90">
                  APP DEVELOPMENT
                </Link>
                <Link
                  to={"/webdev"}
                  style={{letterSpacing:'2px'}}
                  onClick={closeNavbar}
                  className=" font-bodyFont ml-10 text-lg hover:cursor-pointer text-white w-full rounded transition duration-500 ease-in-out transform hover:text-primary hover:scale-90"
                >
                  WEBSITE DEVELOPMENT
                </Link>
                <Link
                  to={"/brand"}
                  style={{letterSpacing:'2px'}}
                  onClick={closeNavbar}
                  className=" font-bodyFont ml-10 text-lg hover:cursor-pointer text-white w-full rounded transition duration-500 ease-in-out transform  hover:text-primary hover:scale-90"
                >
                  BRANDING & DESIGN
                </Link>
                <Link
                  to={"/consultation"}
                  onClick={closeNavbar}
                  style={{letterSpacing:'2px'}}
                  className=" font-bodyFont ml-10 text-lg hover:cursor-pointer text-white w-full rounded transition duration-500 ease-in-out transform  hover:text-primary hover:scale-90"
                >
                  CONSULTATION
                </Link>
                <Link
                  to={"/digital"}
                  onClick={closeNavbar}
                  style={{letterSpacing:'2px'}}
                  className=" font-bodyFont ml-10 text-lg hover:cursor-pointer text-white w-full rounded transition duration-500 ease-in-out transform  hover:text-primary hover:scale-90"
                >
                  DIGITAL MARKETING
                </Link>
                <Link
                  to={"/devops"}
                  onClick={closeNavbar}
                  style={{letterSpacing:'2px'}}
                  className=" ml-10 font-bodyFont text-lg hover:cursor-pointer text-white w-full rounded transition duration-500 ease-in-out transform  hover:text-primary hover:scale-90"
                >
                  DEVOPS
                </Link>
                <Link
                  to={"/retainers"}
                  onClick={closeNavbar}
                  style={{letterSpacing:'2px'}}
                  className=" ml-10 font-bodyFont text-lg hover:cursor-pointer text-white w-full rounded transition duration-500 ease-in-out transform  hover:text-primary hover:scale-90"
                >
                  RETAINERS
                </Link>
                <Link
                  to={"/maintenance"}
                  onClick={closeNavbar}
                  style={{letterSpacing:'2px'}}
                  className=" ml-10 font-bodyFont text-lg hover:cursor-pointer text-white w-full rounded transition duration-500 ease-in-out transform  hover:text-primary hover:scale-90"
                >
                  MAINTENANCE
                </Link>
              </div>
            )}
          </div>
          <Link to={'/contact'} onClick={closeNavbar} style={{letterSpacing:'2px'}} className="text-2xl font-bodyFont hover:cursor-pointer text-white w-full rounded transition duration-500 text-left ease-in-out transform  hover:text-primary hover:scale-90">
            CONTACT
          </Link>
        </div>
        <div style={{display:'flex'}} className="flex  gap-4 mt-10">
        <a href="https://www.linkedin.com/">
                <FaLinkedin className="text-3xl hover:text-red-500 hover:rotate-45 transition duration-300" />
              </a>
              <a href="https://www.facebook.com/">
                <FaFacebook className="text-3xl hover:text-white hover:rotate-45 hover:bg-[#0d6efd] transition duration-300" />
              </a>
              <a href="https://twitter.com/">
                <FaTwitterSquare className="text-3xl hover:text-white hover:rotate-45 hover:bg-[#0d6efd] transition duration-300" />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagramSquare className="text-3xl hover:text-red-500 hover:rotate-45 transition duration-300" />
              </a>
            </div>
            <p style={{display:'flex'}} className=" font-bodyFont text-sm mt-10 hover:text-red-500  lg:mb-0">
              <FaPhoneSquareAlt className="text-2xl mr-2" />+91-880-021-3778
            </p>
            <p style={{display:'flex'}} className=" font-bodyFont my-5 text-sm flex hover:text-red-500 lg:mb-0">
              <FaEnvelopeOpenText className="text-2xl  mr-2" />
              info@cypher-squad.com
            </p>
      </Menu>
    </div>
  );
};

export default DefaultMenu;