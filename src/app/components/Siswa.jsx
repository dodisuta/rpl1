"use client" 
import React from "react";
import Wrap from "../components/Wrap";
import { NextUIProvider } from "@nextui-org/react";

const Siswa = () => {
  return (
    <NextUIProvider>
      <div id="siswa" className="w-full md:mt-[20px] sm:px-[5.4%] flex flex-col justify-center items-center">
        <div className="w-full py-[20px] my-[50px] text-center ">
          <div className="flex justify-center mt-12 items-end">
            <h1 className="text-gray-500 tex font-bold sm:mb-5 text-base sm:text-3xl">V.4.0</h1>
            <h1 className="sm:text-[65px] font-bold text-4xl py-3 ">Siswa</h1>
          </div>
        </div>
        <Wrap />
      </div>
    </NextUIProvider>
  );
};

export default Siswa;
