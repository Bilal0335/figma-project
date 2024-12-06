import Link from "next/link";
import RecentPostCard from "./RecentPostCard";
import { Heebo } from "next/font/google";
const heeboFont = Heebo({ subsets: ["latin"] });
const RecentPost = () => {
  return (
    <div className="my-[66px] bg-recentBackground md:h-[502px] flex flex-col justify-evenly">
      <div className="w-[92%] md:w-[1031] mx-auto p-6 flex justify-between flex-col">
        <div className="flex justify-between flex-row">
          <h1
            className={`${heeboFont.className} font-medium text-[22px] capitalize`}
          >
            recent post
          </h1>
          <Link
            href={""}
            className={`${heeboFont.className} font-medium text-[22px] text-myPink`}
          >
            View all
          </Link>
        </div>
        <div className=" mt-6 flex  flex-col md:flex-row gap-9">
          <RecentPostCard />
          <RecentPostCard />
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
