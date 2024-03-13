import { Image } from "@nextui-org/react";
import { MainContent } from "./components/MainContent";
import  Content  from "./components/Contents";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto  px-5">
      <div className="w-full h-screen bg-black bg-grid-white/[0.2] flex-col  relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <MainContent />
      </div>
      <div className="w-full h-screen bg-black bg-grid-white/[0.2] flex-col  relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Image isZoomed src="/images/full.jpeg" alt="Picture of the author" width={1000} className="w-full h-screen"></Image>
      </div>
      <div className="w-full mt-12 h-auto bg-black bg-grid-white/[0.2] flex-col  relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Content />
      </div>
    </div>
  );
}
