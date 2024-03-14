import React from "react";
import { TigadCard } from "./TigadCard";

const Galery = () => {
  return (
    <div id="galery" className="w-full flex flex-col justify-start items-center px-8% ">
      <div className="w-full py-[20px] flex flex-col justify-center items-center my-[50px] text-center ">
        <p className="tex font-bold w-full text-center">
          <span className="px-1 ">A</span> M E M O R Y{" "}
        </p>
        <div className="flex justify-center items-end">
          <h1 className="text-gray-500 font-bold sm:mb-5 text-base sm:text-3xl">Galery.</h1>
          <h1 className="sm:text-[65px] font-bold text-4xl py-3">Kelas</h1>
        </div>
      </div>
      <TigadCard />
    </div>
  );
};

export default Galery;
