import React, { useState } from "react";
import logo from "./logo.svg";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Nav() {
  const userName = "James";
  const menuItems = [
    {
      label: "Store",
      link: "/store",
    },
    {
      label: "Orders",
      link: "/orders",
    },
    {
      label: "Analytics",
      link: "/analytics",
    },
  ];
  const [cartCount, setCartCount] = useState("10");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav className="bg-green-800">
      <div className="max-w-7xl mx-auto flex items-center">
        <div className=" p-4 w-4/5 flex items-center justify-start">
          <img src={logo} alt="Logo" className="w-16 mr-12" />
          <ul className="flex items-center text-white font-bold w-3/5">
            {menuItems.map((item) => {
              return <li className="mr-8">{item.label}</li>;
            })}
          </ul>
        </div>
        <div className="flex w-1/5 justify-between">
          <div className="relative">
            <p className="text-white absolute text-xs bg-green-500 rounded-full flex items-center justify-center w-4 h-4 -top-2 -left-2">
              {cartCount}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className="menu-button"
            >
              <div className="flex items-center">
                <p className="text-white capitalize font-bold">Hello, {userName} </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
}
