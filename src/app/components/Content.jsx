import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <div className="flex flex-col py-12  justify-center items-center w-full h-auto sm:px-[8%]">
      <div className="flex justify-center items-center text-center my-12 py-12 md:px-4 md:w-full h-[auto]">
        <p className="md:text-4xl text-lg font-bold">
          <span className="gradient">Kami mengundang Anda untuk bergabung dalam perjalanan kami, di mana ide dan inovasi bertemu dengan keahlian teknis. Di website ini, Anda akan menemukan bukan hanya foto-foto yang </span>
          merepresentasikan kemahiran kami, tetapi juga kata-kata yang menginspirasi kami dan memotivasi kami untuk menjadi lebih baik setiap hari.
        </p>
      </div>
      <div className="flex md:justify-between  justify-center md:flex-row flex-col w-full items-center">
        <div className="sm:w-6/12 w-full">
          <Image width={1000} height={1000} alt="..." src={"/images/kelas.jpeg"} className="w-[500px] h-[400px] object-cover rounded-sm" />
        </div>
        <div className="sm:w-6/12 w-full mt-9 md:text-3xl text-lg font-bold">
          <p>
            <span className="text-[30px] md:text-[50px] ">Ketika Anda bangun setiap pagi,</span>
            <span className="gradient"> ingatlah bahwa hari ini adalah hadiah yang berharga dan Anda memiliki </span> kesempatan untuk membuatnya lebih baik dari pada kemarin
          </p>
        </div>
      </div>
      <div className="flex md:justify-between mt-12 justify-center md:flex-row flex-col w-full items-center">
        <div className="sm:w-6/12 w-full">
          <Image loading="lazy" width={1000} height={1000} alt="..." src={"/images/kelas/foto1.jpeg"} className="w-[500px] h-[400px] object-cover rounded-sm" />
        </div>
        <div className="sm:w-6/12 w-full mt-9 md:text-3xl text-lg font-bold">
          <p>
            <span className="text-[30px] md:text-[50px] ">Jangan </span>
            <span className="gradient">tunggu kesempurnaan mulailah dari sekarang, dengan apa yang Anda miliki</span> Kesempurnaan akan datang dengan waktu dan dedikasi.
          </p>
        </div>
      </div>
      <div className="flex md:justify-between mt-12 justify-center md:flex-row flex-col w-full items-center">
        <div className="sm:w-6/12 w-full">
          <Image width={1000} height={1000} alt="..." src={"/images/kelas/foto2.jpeg"} className="w-[500px] h-[400px] object-cover rounded-sm" />
        </div>
        <div className="sm:w-6/12 w-full mt-9 md:text-3xl text-lg font-bold">
          <p>
            <span className="text-[30px] md:text-[50px] ">Jangan meragukan apakah diri </span>
            <span className="gradient">kalian itu pantas untuk impian yang kalian impikan, tapi kalian justru tanya terbalik apakah mimpi yang kalian mimpikan itu </span> justru pantas untuk kalian perjuangkan? pilih lah mimpi yang layak di
            perjuangkan.
          </p>
        </div>
      </div>
      <div className="flex md:justify-between mt-12 justify-center md:flex-row flex-col w-full items-center">
        <div className="sm:w-6/12 w-full">
          <Image width={1000} height={1000} alt="..." src={"/images/kelas/foto13.jpeg"} className="w-[500px] h-[400px] object-cover rounded-sm" />
        </div>
        <div className="sm:w-6/12 w-full mt-9 md:text-3xl text-lg font-bold">
          <p>
            <span className="text-[30px] md:text-[50px] ">Bekerjalah dengan tekun, berharaplah </span>
            <span className="gradient">dengan kuat, dan jangan pernah ragu-ragu untuk bermimpi besar. Dunia membe</span>rikan jalan bagi mereka yang berani bermimpi dan bertindak.
          </p>
        </div>
      </div>
      <div className="flex md:justify-between mt-12 justify-center md:flex-row flex-col w-full items-center">
        <div className="sm:w-6/12 w-full">
          <Image width={1000} height={1000} alt="..." src={"/images/kelas/foto4.jpeg"} className="w-[500px] h-[400px] object-cover rounded-sm" />
        </div>
        <div className="sm:w-6/12 w-full mt-9 md:text-3xl text-lg font-bold">
          <p>
            <span className="text-[30px] md:text-[50px] ">Dalam dunia </span>
            <span className="gradient">teknologi anda di tuntut untuk terus belajar, dimana ketika anda</span> berhenti belajar, disitulah kekalahan anda dimulai
          </p>
        </div>
      </div>
      <div className="flex md:justify-between mt-12 justify-center md:flex-row flex-col w-full items-center">
        <div className="sm:w-6/12 w-full">
          <Image width={1000} height={1000} alt="..." src={"/images/kelas/foto6.jpeg"} className="w-[500px] h-[400px] object-cover rounded-sm" />
        </div>
        <div className="sm:w-6/12 w-full mt-9 md:text-3xl text-lg font-bold">
          <p>
            <span className="text-[30px] md:text-[50px] ">Dunia </span>
            <span className="gradient"> tidak dirubah oleh orang pintar yang takut, dunia di rub</span>ah oleh orang bodoh yang rela melakukan apapun.
          </p>
        </div>
      </div>
      <div className="flex md:justify-between mt-12 justify-center md:flex-row flex-col w-full items-center">
        <div className="sm:w-6/12 w-full">
          <Image width={1000} height={1000} alt="..." src={"/images/kelas/foto12.jpeg"} className="w-[500px] h-[400px] object-cover rounded-sm" />
        </div>
        <div className="sm:w-6/12 w-full mt-9 md:text-3xl text-lg font-bold">
          <p>
            <span className="text-[30px] md:text-[50px] ">Kenapa harus sukses di usia muda?</span>
            <span className="gradient"> tujuanya cuma satu, bikin bangga dan bahagia kedua orang tua selama mereka</span> masih ada disini. Itu privilege sesungguhnya!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
