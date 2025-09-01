// =================== Images ===================
import Logo from "../assets/shared/logo.svg";
import HamburgerIcon from "../assets/shared/icon-hamburger.svg";
import CloseIcon from "../assets/shared/icon-close.svg";
// =================== Animation ===================
import { motion, AnimatePresence } from "framer-motion";
// =================== States & link ===================
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { MenuData } from "../lib/menuData";

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <>
      <header className="px-5 py-2.5">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>

          <button className="cursor-pointer" onClick={toggleMenu}>
            <img src={HamburgerIcon} alt="menu" />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {openMenu && (
          <motion.div
            className="w-[252px] h-screen fixed bg-[#0B0D17]/15 backdrop-blur-md top-0 right-0 shadow-lg p-6 z-40 "
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.3,
            }}
            onClick={toggleMenu}
          >
            <motion.div
              className="flex justify-end mt-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <button onClick={toggleMenu} className="cursor-pointer">
                <img src={CloseIcon} alt="close" />
              </button>
            </motion.div>
            {/* Menus */}
            <div
              className="w-full  text-white barlow-condensed ml-5.5 mt-15 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {MenuData.map((menu) => {
                const navPath =
                  menu.label.toLowerCase() === "home"
                    ? "/"
                    : `/${menu.label.toLowerCase()}`;
                return (
                  <div className="w-full flex items-center justify-between py-5 group">
                    <NavLink
                      to={navPath}
                      className="relative flex gap-2 items-center text-white"
                    >
                      {({ isActive }) => (
                        <>
                          <span className="font-bold text-base leading-[100%] tracking-[2.7px]">
                            {menu.id.toString().padStart(2, "0")}
                          </span>

                          {/* Label */}
                          <span
                            className="leading-[100%] tracking-[2px]"
                            onClick={toggleMenu}
                          >
                            {menu.label.toUpperCase()}
                          </span>

                          {/* Divider */}
                          <div
                            className={`absolute left-50 top-0 w-[3px] h-[20px] transition-all duration-300 ease-out
                                ${
                                  isActive
                                    ? "bg-white"
                                    : "border-transparent group-hover:bg-white/50"
                                }`}
                          ></div>
                        </>
                      )}
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
