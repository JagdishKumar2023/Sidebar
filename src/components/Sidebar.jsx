/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { GoFileSubmodule } from "react-icons/go";
import { AnimatePresence, motion } from "framer-motion";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";

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
    icon: <FiShoppingCart />,
  },
];

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 0,
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  };

  const showAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <div className="mainContainer">
      <motion.div
        initial={{ width: "35px" }}
        animate={{ width: isOpen ? "200px" : "35px" }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          damping: 12,
          type: "spring",
        }}
        className="sidebar"
      >
        <div className="top_section">
          {isOpen && (
            <motion.h1
              className="logo"
              variants={showAnimation}
              initial="hidden"
              animate="show"
            >
              Dashboard
            </motion.h1>
          )}
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        <div className="search">
          <div className="search_icon">
            <BiSearch />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.input
                placeholder="Search..."
                variants={inputAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
              />
            )}
          </AnimatePresence>
        </div>
        <section className="routes">
          <AnimatePresence>
            {isOpen &&
              routes.map((route) => (
                <NavLink
                  activeClassName="active"
                  to={route.path}
                  key={route.name}
                  className="link"
                >
                  <motion.div
                    className="icon"
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                  >
                    {route.icon}
                  </motion.div>
                  <motion.div
                    className="link_text"
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                  >
                    {route.name}
                  </motion.div>
                </NavLink>
              ))}
          </AnimatePresence>
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
