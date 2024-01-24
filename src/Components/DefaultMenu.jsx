import React from 'react';
import { push as Menu } from "react-burger-menu";

const DefaultMenu = () => {
    var styles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '36px',
          height: '30px',
          right: '36px',
          top: '17px',
          zIndex:50
        },
        bmBurgerBars: {
          background: "#FFA500",
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '24px',
          width: '24px'
        },
        bmCross: {
          background: '#bdc3c7'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%',
        },
        bmMenu: {
          background: '#373a47',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em',
          right:0,
          zIndex:99
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          color: '#b8b7ad',
          padding: '0.8em',
        },
        bmItem: {
          display: 'inline-block',
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
      }
      
  return (
    <div>
      <Menu
        styles={styles}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        itemListElement="div"
        right
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "50px",
          }}
        >
          <button
            className="p-3 hover:cursor-pointer text-white w-full rounded transition duration-500 text-center ease-in-out transform hover:bg-black hover:text-white hover:scale-90"
          >
            HOME
          </button>
          <button
            className="p-3 hover:cursor-pointer text-white w-full rounded transition duration-500 text-center ease-in-out transform hover:bg-black hover:text-white hover:scale-90"
          >
           ABOUT US
          </button>
          <button
            className="p-3 hover:cursor-pointer text-white w-full rounded transition duration-500 text-center ease-in-out transform hover:bg-black hover:text-white hover:scale-90"
          >
            PORTFOLIO
          </button>
          <button
            className="p-3 hover:cursor-pointer text-white w-full rounded transition duration-500 text-center ease-in-out transform hover:bg-black hover:text-white hover:scale-90"
          >
           SERVICES
          </button>
          <button
            className="p-3 hover:cursor-pointer text-white w-full rounded transition duration-500 text-center ease-in-out transform hover:bg-black hover:text-white hover:scale-90"
          >
            CONTACT
          </button>
        </div>
      </Menu>
    </div>
  )
}

export default DefaultMenu
