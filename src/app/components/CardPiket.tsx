import React from "react";
import Card from "./Card";

export function CardPiket() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
        <Card hari={"Senin"} className={"flex text-slate-400 flex-col w-[300px] text-lg "}>
          <p>Muhamad Nabil Abinaya</p>
          <p>Alia Komalasari</p>
          <p>Ressa Julianti</p>
          <p>RIsmala Wahyuni</p>
          <p>Tsani Mushifa</p>
          <p>Farhat Daniel Pasha</p>
          <p>Refi Zakirahi</p>
        </Card>
        <Card hari={"Selasa"} className={"flex text-slate-400 flex-col w-[300px] text-lg "}>
          <p>Iwan Guswandi</p>
          <p>Faisal Febriansyah Sanusi</p>
          <p>Kevin Sujiman</p>
          <p>Yusuf </p>
          <p>Rima Eka Amarsya</p>
          <p>Roby</p>
          <p>Latifah</p>
        </Card>
        <Card hari={"Rabu"} className={"flex text-slate-400 flex-col w-[300px] text-lg "}>
          <p>Cintia Bela</p>
          <p>Anggelia </p>
          <p>Putri</p>
          <p>Muhamad Havis</p>
          <p>Rangga</p>
          <p>Dina Widianti</p>
        </Card>
        <Card hari={"Kamis"} className={"flex text-slate-400 flex-col w-[300px] text-lg "}>
          <p>Dodi Suta Faturohman</p>
          <p>Sholeh Sutisna</p>
          <p>Mia</p>
          <p>Sovia Cahya</p>
          <p>Aditia Setiawan</p>
          <p>Mutiara</p>
        </Card>
        <Card hari={"Jum'at"} className={"flex text-slate-400 flex-col w-[300px] text-lg "}>
          <p>Tifal Ba`adilah Islami</p>
          <p>Nur Aisyah Witari</p>
          <p>Mulan</p>
          <p>Nadya</p>
          <p>Siska Ummu Hasanah</p>
          <p>Sandi Supdiadi</p>
        </Card>
        <Card hari={""} className={"flex text-slate-400 flex-col w-[300px] text-lg "}>
          <p>Dalam sebuah riwayat, Aisyah Radhiallahu Anha menyebutkan bahwa, Rasulullah pernah bersabda yang artinya: “Agama itu dibangun berasaskan kebersihan.” (HR. Muslim).</p>
        </Card>
    </div>
  );
}
