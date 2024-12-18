import FeatureWork from "./components/FeatureWork";
import Hero from "./components/Hero";
import RecentPost from "./components/RecentPost";

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <Hero />
      <RecentPost />
      <FeatureWork />
    </div>
  );
}
