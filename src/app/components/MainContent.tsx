import React from "react";
import { cn } from "./utils/cn";
import { Spotlight } from "./ui/SpotLight";

export function MainContent() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Spotlight className="-top-0 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="flex flex-col justify-center items-center h-[40rem] p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Spelgesa <br />bersatu demi kesuksesan
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Spelgesa adalah kependekan dari Sebelas RPL Satu. Terdiri dari 35 siswa, diantaranya 15 siswa laki-laki dan 20 siswa perempuan. Website ini dibuat pada 13 Maret 2024 dan diharapkan bisa membuat banyak kenangan indah bersama.This
          is the beginning of our journey.
        </p>
      </div>
    </div>
  );
}
