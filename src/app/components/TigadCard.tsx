import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3-dcard";
import kelas from "../data/kelas";

export function TigadCard() {
  const datas = kelas;
  return (
    <div className=" flex justify-center items-center  flex-wrap">
      {datas.map((data) => (
        <CardContainer key={data.id} className="inter-var">
          <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-white dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl   ">
            <CardItem translateZ="100" className="w-full">
              <Image loading="lazy" src={data.image} height="1000" width="1000" className="h-[400px] sm:h-[300px] w-[500px] sm:w-[400px] object-cover rounded-xl group-hover/card:shadow-xl" alt="thumbnail" />
            </CardItem>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
