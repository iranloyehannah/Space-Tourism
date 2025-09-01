// =================== Components ===================
import MobileMenu from "./MobileMenu"
import TabletMenu from "./TabletMenu"
import DesktopMenu from "./DesktopMenu"

const Menu:React.FC = () => {
  return (
    <section>
    <div className="h-20 w-full block md:hidden lg:hidden">
      <MobileMenu  />
    </div>
    <div className="h-23 w-full hidden md:block lg:hidden">
      <TabletMenu  />
    </div>
    <div className="h-23 w-full hidden md:hidden lg:block mt-5">
      <DesktopMenu  />
    </div>
    </section>
  )
}

export default Menu