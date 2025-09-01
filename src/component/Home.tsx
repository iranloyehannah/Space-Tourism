// =================== Animation ===================
import { motion } from "framer-motion";
// =================== Link ===================
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <section className="w-full h-full bg-[url('./assets/home/background-home-mobile.jpg')] sm:bg-[url('./assets/home/background-home-tablet.jpg')]  lg:bg-[url('./assets/home/background-home-desktop.png')] bg-cover bg-no-repeat bg-center transition-all ease-out duration-300">
      <div className=" text-white w-full h-full p-20  md:pt-40 flex flex-col lg:flex-row lg:justify-around lg:items-end lg:pt-0 lg:pb-10 ">
        <div className="w-full flex flex-col items-center justify-between leading-[100%] space-y-15 pb-10 md:justify-between md:space-y-20 lg:items-start lg:w-1/2 lg:-ml-10">
          <p className="barlow-condensed tracking-[0.15em] md:tracking-[0.25em] text-base md:text-[28px] font-normal text-[#D0D6F9]">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className="bellefair text-[80px] md:text-[140px] lg:text-[144px]">
            SPACE
          </h1>
          <span className="barlow text-center leading-[180%] break-words text-[15px] md:text-base max-w-xs md:max-w-lg text-[#D0D6F9] lg:max-w-xl lg:text-left">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </span>
        </div>

        <div className="flex h-1/2 items-center justify-center">
          <motion.div
            className="relative w-32 h-32 md:w-45 md:h-45 lg:w-47 lg:h-47 flex items-center justify-center rounded-full bg-white"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <motion.div
              className="absolute w-36 h-36 md:w-48 md:h-48 rounded-full bg-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              variants={{
                rest: { scale: 0 },
                hover: { scale: 2 },
              }}
              transition={{
                type: "spring",
                mass: 1,
                stiffness: 80,
                damping: 20,
              }}
            />

            <Link to="/destination" className="cursor-pointer">
              <motion.span
                className="relative z-10 bellefair text-lg uppercase tracking-[0px] "
                variants={{
                  rest: { color: "#000000" },
                  hover: { color: "#0B0D17" },
                }}
              >
                EXPLORE
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
