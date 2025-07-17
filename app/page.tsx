import Image from "next/image";
import Hero from "./Sections/Hero";
import ShowcaseSection from "./Sections/ShowcaseSection";
import NavBar from "./Components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <ShowcaseSection/>
    </>
  );
}
