"use client";
import { Github, Instagram } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Footer = () => {
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
    <div className="w-full flex h-[100px] py-2 justify-center sm:justify-between  sm:px-12 items-center bottom-0 absolute h-100px">
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex justify-center items-center gap-x-2 ">
          <p className="font-extrabold text-lg md:text-xl gradient">Spelgesa </p>
          <p className="text-xs sm:text-base">Copyright © 2024 - All rights reserved</p>
        </div>
        <div className="flex w-full justify-center items-center gap-x-2">
          <p className="text-xs sm:text-sm">Jl. Tanjung Manunggal V, Sukatali, Situraja.</p>
          <Link href="https://www.instagram.com/spelgesa/">
            <Instagram className="cursor-pointer" />
          </Link>
          <Link href="https://github.com/dodisuta/rpl1">
            <Github className="cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
