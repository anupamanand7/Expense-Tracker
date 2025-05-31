import React, { useContext} from "react";
import "./sideMenu.css";
import { Link, NavLink } from "react-router-dom";
import LogOut from "../logout/Logout";

import ProfileImg from "../profile/profileImg";
import { context } from "../../context/context";

export default function SideMenu() {
  const { darkMode, setDarkMode } = useContext(context);
  return (
    <div className="sideBar">
      <div className="sideBarTop">
        <Link to="/" className="sideBar-logo-container">
          <img
            className="logo"
            src="images/logoWhite.png"
            alt="logo of the project"
          />
          <span>Expensify</span>
        </Link>
        {window.innerWidth <= 760 && <ProfileImg />}
        <ul>
          <li>
            <NavLink to="/home" className="sideNav-Link">
              <i className="fa-solid fa-house"></i>
              <span>Home Page</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/addExpenses" className="sideNav-Link">
              <i className="fa-solid fa-square-minus"></i>
              <span>Add Expenses</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/addIncomes" className="sideNav-Link">
              <i className="fa-solid fa-square-plus"></i>
              <span>Add Incomes</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/history" className="sideNav-Link">
              <i className="fa-solid fa-chart-area"></i>
              <span>History</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="sideBarBottom">
        <ul>
          <li>
            <NavLink to="/settings" className="sideNav-Link">
              <i className="fa-solid fa-gear"></i>
              <span>Settings</span>
            </NavLink>
          </li>
          <li>
            <Link>
              {darkMode ? (
                <div
                  onClick={() => {
                    setDarkMode(false);
                    localStorage.setItem("darkMode", false);
                  }}
                  className="themeSideNav"
                >
                  <i className="fa-solid fa-sun"></i>
                  <span>Light Mode </span>
                </div>
              ) : (
                <div
                  onClick={() => {
                    setDarkMode(true);
                    localStorage.setItem("darkMode", true);
                  }}
                  className="themeSideNav"
                >
                  <i className="fa-solid fa-moon"></i>
                  <span>Dark Mode </span>
                </div>
              )}
            </Link>
          </li>
          <li>
            <NavLink to="/help" className="sideNav-Link">
              <i className="fa-solid fa-circle-question"></i>
              <span>Help/FAQ</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="sideNav-Link side-logout">
              <LogOut />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
