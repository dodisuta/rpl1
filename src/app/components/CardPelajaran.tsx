import React from "react";
import Card from "./Card";

export function CardPelajaran() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      <Card hari={"Senin"} className={"flex flex-col w-[300px] h-[110px] text-lg text-slate-400"}>
        <p>1. Pemrograman web</p>
        <p>2. Pjok</p>
        <p>3. Kewirausahaan</p>
      </Card>
      <Card hari={"Selasa"} className={"flex flex-col w-[300px] h-[110px] text-lg text-slate-400"}>
        <p>1. Asj</p>
        <p>2. Bahasa Indonesia</p>
        <p>3. Pemrograman berbasis teks, grafis dan multimedia</p>
      </Card>
      <Card hari={"Rabu"} className={"flex flex-col w-[300px] h-[110px] text-lg text-slate-400"}>
        <p>1. Bahasa Sunda</p>
        <p>2. Basis data</p>
        <p>3. Sejarah</p>
        <p>4. Bahasa Inggris</p>
      </Card>
      <Card hari={"Kamis"} className={"flex flex-col w-[300px] h-[110px] text-lg text-slate-400"}>
        <p>1. Bahasa Inggris</p>
        <p>2. Pkn</p>
        <p>3. Pkv</p>
        <p>4. Agama</p>
      </Card>
      <Card hari={"Jum'at"} className={"flex flex-col w-[300px] h-[110px] text-lg text-slate-400"}>
        <div className="flex gap-x-1">
          <p>1. Mtk </p>
        </div>
        <div className="flex gap-x-1">
          <p>2. Desain grafis</p>
        </div>
        <div className="flex gap-x-1">
          <p>3. Pemrograman perangkat bergerak</p>
        </div>
      </Card>
      <Card hari={""} className={"flex flex-col w-[300px] h-[110px] text-lg text-slate-400"}>
        <p>“Belajarlah kamu semua, dan mengajarlah kamu semua, dan hormatilah guru-gurumu, serta berlaku baiklah terhadap orang yang mengajarkanmu.” (HR Thabrani).</p>
      </Card>
    </div>
  );
}
