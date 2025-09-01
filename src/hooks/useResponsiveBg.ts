import {useState, useEffect} from "react"

interface bgImages {
    bgMobile: string;
    bgTablet: string;
    bgDesktop: string;
}

const useResponsiveBg = (images: bgImages): string => {
  const {bgMobile, bgTablet, bgDesktop } = images;
   const [bg, setBg] = useState<string>(bgMobile);

  useEffect(() => {
    const updateBg = () => {
      if (window.innerWidth >= 1024) setBg(bgDesktop);
        else if (window.innerWidth >= 640) setBg(bgTablet);
       else  setBg(bgMobile);
      
    };
    updateBg();
    window.addEventListener("resize", updateBg);
    return () => window.removeEventListener("resize", updateBg);

  }, [bgMobile, bgTablet, bgDesktop]);
  return bg;

}

export default useResponsiveBg