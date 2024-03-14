import Image from "next/image";
import React from "react";

const Contents = () => {
  const contentData = [
    {
      image: "/images/kelas.jpeg",
      textGradient: "Ketika anda bangun setiap pagi, ingatlah bahwa hari ini adalah hadiah yang berharga dan",
      textDescription: " anda memiliki kesempatan untuk membuatnya lebih baik dari pada kemarin",
    },
    {
      image: "/images/foto7.jpg",
      textGradient: "Jangan tunggu kesempurnaan mulailah dari sekarang, dengan apa yang anda",
      textDescription: " miliki Kesempurnaan akan datang dengan waktu dan dedikasi.",
    },
    {
      image: "/images/foto2.jpg",
      textGradient: "Jangan meragukan apakah diri kalian itu pantas untuk impian yang kalian impikan, tapi kalian justru tanya terbalik apakah mimpi",
      textDescription: " yang kalian mimpikan itu justru pantas untuk kalian perjuangkan? pilih lain mimpi yang layak di perjuangkan",
    },
    {
      image: "/images/foto13.jpeg",
      textGradient: " Kehidupan bukanlah tentang menunggu badai berlalu, melainkan",
      textDescription: " tentang belajar bagaimana menari di hujan.",
    },
    {
      image: "/images/foto4.jpeg",
      textGradient: "Dalam dunia teknologi anda di tuntut untuk terus belajar, dimana ketika anda",
      textDescription: " berhenti belajar , disitulah kekalahan anda dimulai.",
    },
    {
      image: "/images/foto6.jpeg",
      textGradient: "Dunia tidak dirubah oleh orang pintar yang takut, dunia di",
      textDescription: " rubaholeh orang bodoh yang rela melakukan apapun.",
    },
    {
      image: "/images/foto12.jpg",
      textGradient: "Hal terpenting dalam hidup adalah belajar bagaimana mengikuti",
      textDescription: " impian anda, tidak peduli berapa kali anda jatuh.",
    },
  ];
  return (
    <div className="flex flex-col w-full sm:py-12">
      <div className="flex justify-center items-center text-center my-12 py-12 md:px-4 md:w-full h-[auto] px-5">
        <p className="md:text-4xl text-lg font-bold">
          <span className="gradient">Kami mengundang anda untuk bergabung dalam perjalanan kami, di mana ide dan inovasi bertemu dengan keahlian teknis. Di website ini, anda akan menemukan bukan hanya foto-foto yang </span>
          merepresentasikan kemahiran kami, tetapi juga kata-kata yang menginspirasi kami dan memotivasi kami untuk menjadi lebih baik setiap hari.
        </p>
      </div>
      {contentData.map((data, index) => (
        <div key={index} className="w-full h-auto my-[25px] bg-black bg-grid-white/[0.2] flex-col  relative flex items-center justify-center px-4 sm:px-12">
          {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}

          <div key={index} className="flex md:justify-between mt-12 justify-center md:flex-row flex-col w-full items-center">
            <div className="sm:w-6/12 w-full">
              <Image loading="lazy" width={1000} height={1000} alt="..." src={data.image} className="w-[500px] h-[400px] object-cover rounded-sm" />
            </div>
            <div className="sm:w-6/12 w-full mt-9 md:text-3xl text-lg font-bold">
              <p>
                <span className="gradient font-bold">{data.textGradient}</span>
                {data.textDescription}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contents;
