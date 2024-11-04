/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { GoFileSubmodule } from "react-icons/go";
import { BsCartCheck } from "react-icons/bs";
import { motion } from "framer-motion";

const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/user",
    name: "User",
    icon: <FaUser />,
  },
  {
    path: "/message",
    name: "Message",
    icon: <MdMessage />,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <BiAnalyse />,
  },
  {
    path: "/file-manager",
    name: "File Manager",
    icon: <GoFileSubmodule />,
  },
  {
    path: "/order",
    name: "Order",
    icon: <BsCartCheck />,
  },
];

const Sidebar = ({ children }) => {
  return (
    <div className="mainContainer">
      <motion.div
        initial={{ width: "0px" }}
        animate={{ width: "200px" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="sidebar"
      >
        <div className="top_section">
          <h1 className="logo">Dashboard</h1>
          <div className="bars">
            <FaBars />
          </div>
        </div>
        <div className="search">
          <div className="search_icon">
            <BiSearch />
          </div>
          <input placeholder="Search..." />
        </div>
        <section className="routes">
          {routes.map((route) => (
            <NavLink to={route.path} key={route.name}>
              <div className="icon">{route.icon}</div>
              <div className="link_text">{route.name}</div>
            </NavLink>
          ))}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
