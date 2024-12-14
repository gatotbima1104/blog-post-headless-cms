import Footer from "@/components/atom/Footer";
import FeaturedPost from "@/components/FeaturedPost";
// import Hero from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import PopularPost from "@/components/PopularPost";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeaturedPost/>
      <PopularPost/>
      {/* <Hero/> */}
      <Footer/>
    </div>
  );
}
