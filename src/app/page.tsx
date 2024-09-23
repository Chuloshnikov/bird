import Carousel from "@/components/carousel";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/HeroSection";


export default function Home() {
  return (
   <div>
    <HeroSection/>
    <Carousel/>
    <FeaturesSection/>
   </div>
  );
}
