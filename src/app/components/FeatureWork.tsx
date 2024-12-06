import { Heebo } from "next/font/google";
import FeatureCard from "./FeatureCard";
const heeboFont = Heebo({ subsets: ["latin"] });
import Image01 from "../../../public/assets/image1.png";
import Image02 from "../../../public/assets/image2.png";
import Image03 from "../../../public/assets/image3.png";

const featureCardData = [
    {
        imageSrc:Image01,
        title:"Designing Dashboards",
        year:"2020",
        category:"Dashboard",
        description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        imageSrc:Image02,
        title:"Designing Dashboards",
        year:"2020",
        category:"Dashboard",
        description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        imageSrc:Image03,
        title:"Designing Dashboards",
        year:"2020",
        category:"Dashboard",
        description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
]
const FeatureWork = () => {
  return (
    <div className="w-[100%] md:w-[919px] md:h-[934.2px] p-1 flex flex-col m-auto">
      {/* Title */}
      <div className={`${heeboFont.className} font-medium text-[22px]`}>
        <p>Feature Works</p>
      </div>

      {/* Main Content: Image and Text */}
      {featureCardData.map((card, index) => (
        <FeatureCard
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
          year={card.year}
          category={card.category}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default FeatureWork;
