import React from "react";
import { Tabs } from "../components/ui/tabs";
import { CardPiket } from "../components/CardPiket";
import { CardPelajaran } from "../components/CardPelajaran";

const Tab = () => {
  const tabs = [
    {
      title: "Jadwal Pelajaran",
      value: "pelajaran",
      content: (
        <div className="w-full h-full text-xl md:text-4xl font-bold text-white ">
          <CardPiket />
        </div>
      ),
    },
    {
      title: "Jadwal Piket",
      value: "piket",
      content: (
        <div className="w-full h-full text-xl md:text-4xl font-bold text-white ">
          <CardPelajaran />
        </div>
      ),
    },
  ];

  return (
    <div className="h-screen [perspective:1000px]  flex flex-col max-w-5xl sm:mx-auto w-full items-center justify-center">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default Tab;
