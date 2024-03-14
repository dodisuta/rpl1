import { Image } from "@nextui-org/react";
import { MainContent } from "./components/MainContent";
import Tab from "./components/Tab";
import Siswa from "./components/Siswa";
import Contents from "./components/Contents";
import Galery from "./components/Galery";
import { CardMoving } from "./components/CardMoving";
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col justify-center relative items-center w-full h-auto ">
      <div className="w-full h-screen bg-black bg-grid-white/[0.2] flex-col  relative flex items-center justify-center ">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <MainContent />
      </div>
      <div className="w-full h-[90vh] bg-black bg-grid-white/[0.2] flex-col  relative flex items-center justify-center px-5">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Image isZoomed loading="lazy" src="/images/full.jpeg" alt="Picture of the author" width={1000} className="w-full h-[600px]  sm:h-screen"></Image>
      </div>
      <Contents />
      <div className="w-full mt-12  h-auto bg-black bg-grid-white/[0.2] flex-col  relative flex items-center justify-center px-5">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Tab />
      </div>
      <div className="w-full mt-[1250px] sm:mt-[100px] h-auto bg-black bg-grid-white/[0.2] flex-col  relative flex items-center justify-center px-5">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Siswa />
      </div>
      <div className="w-full mt-12 h-auto bg-black bg-grid-white/[0.2] flex-col  relative flex items-center justify-center px-5">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Galery />
      </div>
      <div className="w-full mt-12 h-auto bg-black bg-grid-white/[0.2] flex-col  relative flex items-center justify-center px-5">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <CardMoving />
      </div>
      <Footer />
    </div>
  );
}
