import { useState } from "react";
import { CrewData, type CrewProps } from "../lib/crewData";
import { motion } from "framer-motion";
const Crew: React.FC = () => {
  const [selectedCrew, setSelectedCrew] = useState<string>("Douglas Hurley");
  const selectedCrewData: CrewProps | undefined = CrewData.find(
    (crew) => crew.name === selectedCrew
  );
  return (
    <motion.section
      className="w-full min-h-screen bg-[url('./assets/crew/background-crew-mobile.jpg')] sm:bg-[url('./assets/crew/background-crew-tablet.jpg')] lg:bg-[url('./assets/crew/background-crew-desktop.png')] bg-cover bg-no-repeat bg-center"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center  text-white px-5 barlow-condensed leading-[100%] pt-22 md:pt-32 md:items-start lg:px-28 lg:pl-40">
        {/* Crew */}
        <div className="flex items-center gap-5 tracking-[0.15em] text-base  md:text-xl lg:text-[1.75rem] uppercase lg:mb-16">
          <span className="font-bold text-white/25">02</span>
          <p className="">MEET YOUR CREW</p>
        </div>
        {/* Crew Members */}
        <div className=" w-full flex flex-col  items-center pt-26 md:pt-3.5 lg:pt-0 lg:h-full lg:flex-row">
          <div className="flex flex-col space-y-10 md:space-y-16 lg:space-y-20">
            {/* text */}
            <div className="flex flex-col items-center gap-5 lg:items-start">
              <div className="bellefair uppercase leading-[100%] space-y-3">
                <p className="text-white/50 text-center text-lg md:text-2xl lg:text-left lg:text-[32px]">
                  {selectedCrewData?.role}
                </p>
                <p className="text-2xl whitespace-nowrap md:text-[40px] lg:text-[56px]">
                  {selectedCrewData?.name}
                </p>
              </div>
              <span className="barlow text-center text-[#D0D6F9] leading-[180%] text-[15px] max-w-xs md:max-w-lg md:text-base lg:text-lg lg:text-left">
                {selectedCrewData?.bio}
              </span>
            </div>
            {/* Pagination */}
            <div className="flex gap-1 justify-center items-center mb-6  lg:justify-start">
              {CrewData.map((crew) => (
                <div
                  className="p-2"
                  key={crew.name}
                  onClick={() => setSelectedCrew(crew.name)}
                >
                  <span
                    className={`w-3 h-3 block rounded-full ${
                      selectedCrew === crew.name ? "bg-white" : "bg-white/25"
                    }`}
                  ></span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="w-[20.5rem] h-[20.9rem] md:w-[42rem] md:h-[29rem] md:justify-end ">
            <img
              src={selectedCrewData?.images.png}
              alt={selectedCrewData?.name}
              className="w-full h-full object-contain fade-bottom"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Crew;
