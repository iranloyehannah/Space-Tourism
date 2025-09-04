import { useState } from "react";
import { TechnologyData, type TechnologyProps } from "../lib/TechnologyData";
import {motion} from "framer-motion";
const Technology: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string>("Launch vehicle");
  const selectedTechData: TechnologyProps | undefined = TechnologyData.find(
    (crew) => crew.name === selectedTech
  );
  return (
    <motion.section className="w-full min-h-screen bg-[url('./assets/technology/background-technology-mobile.jpg')] sm:bg-[url('./assets/technology/background-technology-tablet.jpg')] lg:bg-[url('./assets/technology/background-technology-desktop.png')] bg-cover bg-no-repeat bg-center overflow-x-hidden"
    initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center py-15 pt-22 text-white barlow-condensed leading-[100%] md:pt-32 md:items-start lg:px-28 lg:ml-26 ">
        <div className="flex items-center gap-5 uppercase tracking-[0.15em] text-base md:pl-10 md:text-xl lg:text-[1.75rem] lg:mb-16">
          <span className="font-bold text-white/25">03</span>
          <p className="">SPACE LAUNCH 101</p>
        </div>

        <div className="w-full flex flex-col items-center pt-20 md:pt-3.5 lg:pt-0 lg:h-full lg:flex-row-reverse lg:justify-center lg:gap-8">
          {/* Image */}
          <div className="w-full h-[21rem] flex items-center justify-center overflow-hidden md:h-[27.3rem] lg:w-[610px] lg:h-[35.5rem] lg:flex-shrink-0 ">
            {/* Mobile & Desktop */}
            <img
              src={selectedTechData?.images.portrait}
              alt={selectedTechData?.name}
              className="w-full h-auto object-contain md:hidden lg:block lg:h-full lg:object-cover "
            />

            {/* Tab */}
            <img
              src={selectedTechData?.images.landscape}
              alt={selectedTechData?.name}
              className="hidden md:block lg:hidden w-full h-auto object-contain"
            />
          </div>

          
          <div className="flex flex-col items-center mx-19 space-y-12 lg:flex-row lg:mx-0 lg:mr-16 lg:space-y-0 lg:space-x-20">
            {/* Nav btn */}
            <div className="flex gap-3 pt-7 lg:flex-col lg:pt-0 lg:gap-8">
              {TechnologyData.map((tech, idx) => (
                <div
                  key={tech.name}
                  onClick={() => setSelectedTech(tech.name)}
                  className={`w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full flex items-center justify-center cursor-pointer transition-colors ${
                    selectedTech === tech.name
                      ? "bg-white text-[#0B0D17]"
                      : "border border-white/25 text-white hover:border-white/50"
                  }`}
                >
                  <p className="lg:text-xl">{idx + 1}</p>
                </div>
              ))}
            </div>

            {/* Text */}
            <div className="flex flex-col items-center gap-8 lg:items-start lg:gap-6 lg:max-w-md">
              <div className="bellefair uppercase leading-[100%] space-y-4 lg:space-y-6">
                <p className="text-white/50 text-center text-lg md:text-2xl lg:text-left lg:text-[32px]">
                  THE TERMINOLOGY
                </p>
                <p className="text-2xl whitespace-nowrap md:text-[40px] lg:text-[56px] lg:text-left">
                  {selectedTechData?.name}
                </p>
              </div>
              <span className="barlow text-center text-[#D0D6F9] leading-[180%] text-[15px] max-w-md md:max-w-lg md:text-base lg:text-lg lg:text-left lg:leading-[160%]">
                {selectedTechData?.description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Technology;