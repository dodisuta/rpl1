"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function CardMoving() {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards  items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Kualitas lebih penting daripada kuantitas. Satu home run lebih baik daripada dua double.",
    name: "-Steve Jobs",
  },
  {
    quote: "Saya pikir penting untuk memiliki tujuan di mana Anda mencoba membuat sesuatu, dan kemudian bekerja sangat keras untuk mencapainya.",
    name: "-Elon Musk",
  },
  {
    quote: "harga untuk menjadi sukses itu terlalu mahal, maka harga penyesalan itu lebih mahal di bandingkan harga untuk menjadi sukses. Penyesalan adalah harga termahal yang anda akan bayar seumur hidupmu",
    name: "-Timothy Ronald",
  },
  {
    quote: "Imajinasi lebih penting daripada pengetahuan. Karena pengetahuan terbatas, sedangkan imajinasi melingkupi seluruh dunia.",
    name: "-Albert Einstein",
  },
  {
    quote: "Aturan Nomor 1: Jangan pernah kehilangan uang. Aturan Nomor 2: Jangan lupakan aturan Nomor 1.",
    name: "-Warren Buffett",
  },
];
