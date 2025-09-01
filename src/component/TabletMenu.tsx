// =================== Images ===================
import Logo from "../assets/shared/logo.svg";
// =================== menuLib ===================
import { MenuData } from "../lib/menuData";

// =================== States & link ===================
import { NavLink, Link } from "react-router-dom";
const TabletMenu = () => {
  return (
    <header className="w-full pl-6   flex items-center justify-between">
      {/* Logo */}
      <div className="">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      {/* Menu */}
      <div className="w-[90%] py-9 text-white barlow-condensed  bg-white/5 backdrop-blur-2xl flex justify-end">
        <div className="w-[85%] flex">
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
                        {menu.label.toLowerCase() === "home" && isActive
                          ? "" // Hide number when home is active
                          : menu.id.toString().padStart(2, "0")}
                      </span>

                      <span className="leading-[100%] tracking-[2px]">
                        {menu.label.toUpperCase()}
                      </span>

                      <span
                        className={`absolute left-0 -bottom-8.5 h-[3px] w-full transition-all duration-300 ease-out ${
                          isActive
                            ? "bg-white"
                            : "bg-transparent group-hover:bg-white/50"
                        }`}
                      />
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

export default TabletMenu;
