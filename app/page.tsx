import Image from "next/image";
import Hero from "./Sections/Hero";
import ShowcaseSection from "./Sections/ShowcaseSection";
import NavBar from "./Components/NavBar";
import LogoSection from "./Sections/LogoSection";
import FeatureCards from "./Sections/FeatureCards";
import ExperienceSection from "./Sections/ExperienceSection";
import TechStack from "./Sections/TechStack";
import Testimonials from "./Sections/Testimonials";

export default function Home() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <ShowcaseSection/>
      <LogoSection/>
      <FeatureCards/>
      <ExperienceSection/>
      <TechStack/>
      <Testimonials/>

    </>
  );
}
