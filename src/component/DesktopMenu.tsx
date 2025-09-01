// =================== Images ===================
import Logo from "../assets/shared/logo.svg";
// =================== menuLib ===================
import { MenuData } from "../lib/menuData";

// =================== States & link ===================
import { NavLink, Link } from "react-router-dom";

const DesktopMenu = () => {
  return (
    <header className="w-full pl-10 flex items-center justify-between">
      {/* Logo */}
      <div className="">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="w-[38%] absolute top-1/2 left-[9%] border-b border-white/25 z-10"></div>
      {/* Menu */}
      <div className="relative w-[60%] py-9  text-white barlow-condensed  bg-white/5 backdrop-blur-2xl flex justify-end">
        <div className="w-[80%] flex">
          {MenuData.map((menu) => {
            const navPath =
              menu.label.toLowerCase() === "home"
                ? "/"
                : `/${menu.label.toLowerCase()}`;

            return (
              <div
                key={menu.id}
                className="w-[200px] flex items-center flex-col group"
              >
                <NavLink
                  key={menu.id}
                  to={navPath}
                  className="relative flex items-center gap-2 text-white"
                >
                  {({ isActive }) => (
                    <>
                      <span className="font-bold text-base leading-[100%] tracking-[2.7px]">
                        {menu.id.toString().padStart(2, "0")}
                      </span>

                      <span className="leading-[100%] tracking-[2px]">
                        {menu.label.toUpperCase()}
                      </span>

                      {/* underline */}
                      <span
                        className={`absolute left-0 -bottom-8.5 h-[3px] w-full transition-all duration-300 ease-out
          ${isActive ? "bg-white" : "bg-transparent group-hover:bg-white/50"}`}
                      ></span>
                    </>
                  )}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default DesktopMenu;
