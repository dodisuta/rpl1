import Image from "next/image";
import React from "react";

const Content = () => {
  const contentData = [
    {
      image: "/images/kelas.jpeg",
      title: "Ketika Anda bangun setiap pagi,",
      textGradient: "ingatlah bahwa hari ini adalah hadiah yang berharga dan Anda memiliki",
      textDescription: "kesempatan untuk membuatnya lebih baik dari pada kemarin",
    },
    {
      image: "/images/foto1.jpeg",
      title: "Jangan,",
      textGradient: "tunggu kesempurnaan mulailah dari sekarang, dengan apa yang Anda miliki",
      textDescription: "Kesempurnaan akan datang dengan waktu dan dedikasi.",
    },
    {
      image: "/images/foto2.jpeg",
      title: "Jangan meragukan apakah diri,",
      textGradient: "kalian itu pantas untuk impian yang kalian impikan, tapi kalian justru tanya terbalik apakah mimpi yang kalian mimpikan itu",
      textDescription: "justru pantas untuk kalian perjuangkan? pilih lain mimpi yang layak di perjuangkan",
    },
    {
      image: "/images/foto13.jpeg",
      title: "Dalam dunia,",
      textGradient: "dengan kuat, dan jangan pernah ragu-ragu untuk bermimpi besar. Dunia membe",
      textDescription: "rikan jalan bagi mereka yang berani bermimpi dan bertindak.",
    },
    {
      image: "/images/foto4.jpeg",
      title: "Dalam dunia",
      textGradient: "teknologi anda di tuntut untuk terus belajar, dimana ketika anda",
      textDescription: "berhenti belajar, disitulah kekalahan anda dimulai.",
    },
    {
      image: "/images/foto6.jpeg",
      title: "Dunia",
      textGradient: "tidak dirubah oleh orang pintar yang takut, dunia di rub",
      textDescription: "ah oleh orang bodoh yang rela melakukan apapun.",
    },
    {
      image: "/images/foto12.jpeg",
      title: "Kenapa harus sukses di usia muda?",
      textGradient: "tujuanya cuma satu, bikin bangga dan bahagia kedua orang tua selama mereka",
      textDescription: "masih ada disini. Itu privilege sesungguhnya!",
    },
  ];

  return (
    <div className="flex flex-col py-12  justify-center items-center w-full h-auto sm:px-[8%]">
      <div className="flex justify-center items-center text-center my-12 py-12 md:px-4 md:w-full h-[auto]">
        <p className="md:text-4xl text-lg font-bold">
          <span className="gradient">Kami mengundang Anda untuk bergabung dalam perjalanan kami, di mana ide dan inovasi bertemu dengan keahlian teknis. Di website ini, Anda akan menemukan bukan hanya foto-foto yang </span>
          merepresentasikan kemahiran kami, tetapi juga kata-kata yang menginspirasi kami dan memotivasi kami untuk menjadi lebih baik setiap hari.
        </p>
      </div>
      {contentData.map((data, index) => (
        <div key={index} className="flex md:justify-between mt-12 justify-center md:flex-row flex-col w-full items-center">
          <div className="sm:w-6/12 w-full">
            <Image width={1000} height={1000} alt="..." src={data.image} className="w-[500px] h-[400px] object-cover rounded-sm" />
          </div>
          <div className="sm:w-6/12 w-full mt-9 md:text-3xl text-lg font-bold">
            <p>
              <span className="text-[30px] md:text-[50px] ">{data.title}</span>
              <span className="gradient">{data.textGradient}</span>
              {data.textDescription}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
