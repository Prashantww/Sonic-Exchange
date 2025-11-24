import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaExchangeAlt } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      {/* TOP NAV (Desktop) */}
      <nav className={styles.navContainer}>
        <h2 className={styles.logo}>
          <span>Sonic </span>Exchange
        </h2>

        <ul className={styles.actions}>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to={"/p2p"}
            >
              P2P
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to={"/airdrop"}
            >
              Airdrop
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to={"/profile"}
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* BOTTOM NAV (Mobile) */}
      <div className={styles.mobileNav}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to="/"
        >
          <AiFillHome />
          <span>Home</span>
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to="/p2p"
        >
          <FaExchangeAlt />
          <span>P2P</span>
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to="/airdrop"
        >
          <FaGift />
          <span>Airdrop</span>
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to="/profile"
        >
          <FaUser />
          <span>Profile</span>
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
