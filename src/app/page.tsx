import Carousel from "@/components/carousel";
import ContentManagementSystemSection from "@/components/home/ContentManagementSystemSection";
import EcommerceSection from "@/components/home/EcommerceSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/HeroSection";
import PricingSection from "@/components/home/PricingSection";
import StartBuildSection from "@/components/home/StartBuildSection";


export default function Home() {
  return (
   <div>
    <HeroSection/>
    <Carousel/>
    <FeaturesSection/>
    <EcommerceSection/>
    <ContentManagementSystemSection/>
    <PricingSection/>
    <StartBuildSection/>
   </div>
  );
}
