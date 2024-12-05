import { Heebo } from "next/font/google";
const heeboFont = Heebo({ subsets: ["latin"] });
const RecentPostCard = () => {
  return (
    <div>
      {/* second div */}
      <div className="w-[100%] md:w-[483px] h-[356px] bg-white flex items-center">
        <div className="m-auto w-[100%] md:w-[391px] h-[286px] flex flex-col items-start justify-between p-4">
          <h2
            className={`${heeboFont.className} font-bold text-[20px] md:text-[26px]`}
          >
            Making a design system from scratch
          </h2>
          <div className="w-[80%] md:w-[301.28px] h-[42.12px] flex items-center justify-between">
            <p
              className={`${heeboFont.className} text-[16px] md:text-[18px]  font-normal text-black/70`}
            >
              12 Feb 2020
            </p>
            <p
              className={`${heeboFont.className} text-[16px] md:text-[18px]  font-normal text-black/70`}
            >
              |
            </p>
            <p
              className={`${heeboFont.className} text-[16px] md:text-[18px]  font-normal text-black/70`}
            >
              Design , Pattern
            </p>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentPostCard;
