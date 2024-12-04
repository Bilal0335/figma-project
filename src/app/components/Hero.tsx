import { Heebo } from "next/font/google";
import Image from "next/image";
const heeboFont = Heebo({ subsets: ["latin"] });
const Hero = () => {
  return (
    <div className="mx-auto my-[66px] md:w-[1030px] md:h-[308px] flex items-center md:flex-row flex-col-reverse justify-between p-6">
      {/* text section */}
      <div className="md:w-[521px] h-[305px] flex md:justify-between items-start flex-col justify-evenly">
        <h1
          className={`${heeboFont.className} font-black text-[27px] md:text-[48px] text-myBlack`}
        >
          Hi, I am John,
          <br />
          Creative Technologist
        </h1>
        <p
          className={`${heeboFont.className} text-myBlack text-[16px] font-normal`}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button
          className={`w-[205px] h-[50px] ${heeboFont.className} bg-myPink text-white font-medium text-[18px] rounded-sm shadow-md shadow-black/60`}
        >
          Download Resume
        </button>
      </div>
      {/* image section */}
      <div className=" relative w-[292px] h-[299px]">
        <Image
          src={"/assets/hero-img.png"}
          alt="Hero Image"
          width={292}
          height={299}
          className=" z-50"
        />
        <div className="bg-backgroundEllipse absolute -z-10 rounded-full top-2 right-2 w-[292px] h-[299px]"></div>
      </div>
    </div>
  );
};

export default Hero;
