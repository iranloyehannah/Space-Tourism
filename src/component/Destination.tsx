// =================== Lib ===================
import { Destinations, type DestinationProps } from "../lib/destinationData";
// =================== States & link ===================
import { useState } from "react";
// =================== Animation===================
import { motion } from "framer-motion";

const Destination = () => {
  const [selectedName, setSelectedName] = useState<string>("Moon");
  const selectedDestination: DestinationProps | undefined = Destinations.find(
    (dest) => dest.name === selectedName
  );

  return (
    <motion.section className="w-full min-h-screen bg-[url('./assets/destination/background-destination-mobile.jpg')] sm:bg-[url('./assets/destination/background-destination-tablet.jpg')] lg:bg-[url('./assets/destination/background-destination-desktop.png')] bg-cover bg-no-repeat bg-center"
    initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="w-full h-full flex flex-col p-15 pt-22 md:pt-32 text-white px-5 barlow-condensed leading-[100%] items-center md:items-start lg:px-28">
        <div className="flex items-center gap-2 tracking-[0.15em] text-base  md:text-xl lg:text-[1.75rem] uppercase lg:mb-16">
          <span className="font-bold text-white/25">01</span>
          <p className="">PICK YOUR DESTINATION</p>
        </div>

        <div className="w-full flex flex-col items-center gap-15 lg:h-full lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          {/* Image */}
          <div className="flex justify-center pt-5 w-[10rem] h-[10rem] md:w-[18.8rem] md:h-[18.8rem] lg:w-[29rem] lg:h-[29rem] lg:justify-start">
            <img
              src={selectedDestination?.images.png}
              alt={selectedDestination?.name}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col items-center lg:items-start gap-10 md:gap-18 text-center lg:text-left lg:gap-17">
            {/* Destination Names */}
            <div className="flex gap-10 uppercase">
              {Destinations.map((dest) => (
                <div
                  className="relative cursor-pointer group"
                  key={dest.name}
                  onClick={() => setSelectedName(dest.name)}
                >
                  <p className="text-sm tracking-[0.15em] font-normal md:text-base">
                    {dest.name}
                  </p>
                  <span
                    className={`absolute left-0 -bottom-3 h-[3px] w-full transition-all duration-300 ease-out ${
                      selectedName === dest.name
                        ? "bg-white"
                        : "bg-transparent group-hover:bg-white/50"
                    }`}
                  ></span>
                </div>
              ))}
            </div>

            {/* Text */}
            <div className="flex flex-col gap-5 md:space-y-7 lg:space-y-10 pt-3">
              <h1 className="text-[3.5rem] bellefair uppercase md:text-[5rem] lg:text-[6rem]">
                {selectedDestination?.name}
              </h1>
              <p className="text-[15px] leading-[180%] pt-3 md:pt-0 barlow max-w-sm text-[#D0D6F9] md:text-base md:max-w-md lg:max-w-lg lg:text-lg">
                {selectedDestination?.description}
              </p>
            </div>

            {/* Divider */}
            <div className="w-full border-b border-white/25"></div>

            {/* Distance & Travel Time */}
            <div className="w-full uppercase barlow-condensed font-normal flex flex-col items-center justify-center gap-7 pb-3 md:flex-row lg:justify-start lg:space-x-10 md:pb-10">
              <div className="space-y-3 lg:space-y-5">
                <p className="text-sm tracking-[0.13em] text-[#D0D6F9]">
                  AVG. DISTANCE
                </p>
                <p className="text-[1.75rem] bellefair">
                  {selectedDestination?.distance}
                </p>
              </div>
              <div className="space-y-3 lg:space-y-5">
                <p className="text-sm tracking-[0.13em] text-[#D0D6F9]">
                  Est. Travel Time
                </p>
                <p className="text-[1.75rem] bellefair">
                  {selectedDestination?.travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Destination;
