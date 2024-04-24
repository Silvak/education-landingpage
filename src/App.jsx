import Layout from "@/components/Layout";
import Hero from "@/components/section/Hero";
import Courses from "@/components/section/Courses";
import About from "@/components/section/About";
import Features from "@/components/section/Features";
import Programs from "@/components/section/Programs";

import HeroCarousel from "@/components/HeroCarousel";
import data from "./data.json";

function App() {
  const { slides } = data.section1;
  return (
    <body>
      <Layout>
        <Hero />
      </Layout>

      {/* info hero */}
      <section className="bg-[url(/bgData.png)] bg-no-repeat bg-cover w-full h-[162px] relative">
        <div className="absolute right-[0] top-[-62px] w-[62px] overflow-hidden">
          <div className=" w-[124px] h-[124px] bg-[#FFCF59] rounded-full "></div>
        </div>
        <div className="absolute left-[0] bottom-[-30px] w-[82px] overflow-hidden rotate-180">
          <div className=" w-[124px] h-[124px] bg-[#FFCF59] rounded-full "></div>
        </div>
        <HeroCarousel slides={slides} />
      </section>

      <Layout>
        <Courses />
        <About />
      </Layout>

      <Features />

      <Layout>
        <Programs />
      </Layout>
    </body>
  );
}

export default App;
