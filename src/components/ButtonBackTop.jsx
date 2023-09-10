"use client";

import { useEffect, useState } from "react";
import { BiArrowToTop } from "react-icons/bi";

export default function ButtonBackTop() {
  const [isBackTop, setIsBackTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 25 ? setIsBackTop(true) : setIsBackTop(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`button-to-top ${
        isBackTop ? "visible" : "invisible"
      } flex justify-center items-center fixed bottom-20 right-3 lg:bottom-5 sm:right-5 rounded-full w-8 h-8 sm:w-10 sm:h-10 bg-primary z-[9999] ring-1 ring-offset-1 ring-slate-400`}
    >
      <BiArrowToTop className='text-white text-xl sm:text-2xl' />
    </button>
  );
}
