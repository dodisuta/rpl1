"use client";
import React, { useState, useEffect } from "react";
import { Meteors } from "./ui/Meteors";

const Card = ({ children, className, hari }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };
    mediaQuery.addListener(handleResize);

    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);

  return (
    <div className="">
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-start">
          <h1 className="font-bold text-2xl sm:text-3xl text-white mb-4 relative z-50">{hari}</h1>
          <div className={className}>{children}</div>
          {!isMobile && <Meteors number={20} />} {/* Menampilkan Meteors hanya jika bukan perangkat mobile */}
        </div>
      </div>
    </div>
  );
};

export default Card;
