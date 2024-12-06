import Image, { StaticImageData } from "next/image";
import { Heebo } from "next/font/google";

const heeboFont = Heebo({ subsets: ["latin"] });

interface FeatureCardProps {
  imageSrc: StaticImageData; // Path to the image
  title: string;    // Title of the feature
  year: string;     // Year of the feature
  category: string; // Category of the feature
  description: string; // Description text
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imageSrc, title, year, category, description }) => {
  return (
    <div className="flex justify-around items-center gap-9 space-y-5 ">
      {/* Image */}
      <div className="flex-shrink-0">
        <Image src={imageSrc} alt={title} width={246} height={180} />
      </div>

      {/* Text Section */}
      <div className="flex flex-col py-6 px-4 items-start justify-center">
        <h3 className={`${heeboFont.className} font-bold text-[30px] mb-2`}>
          {title}
        </h3>
        <div className="space-x-4">
          <span className="bg-myPink text-white rounded-xl px-3 py-1">
            {year}
          </span>
          <span className="text-gray-600 rounded-xl px-3 py-1">
            {category}
          </span>
        </div>
        <p className={`${heeboFont.className} font-light text-[18px] text-gray-700 mt-5`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
