import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Foundation from "../components/sections/Foundation";
import Features from "../components/sections/Features";
import CampusCircle from "../components/sections/CampusCircle";
import Future from "../components/sections/Future";
import Journey from "../components/sections/Journey";
import Philosophy from "../components/sections/Philosophy";
import Ecosystem from "../components/sections/Ecosystem";
import FAQ from "../components/sections/FAQ";
import Contact from "../components/sections/Contact";

import { whatsappLink } from "../data/siteData";

function Home() {
  const heroMedia = {
    type: "video",
    src: "/videos/schugnosis-campus.mp4",
    mimeType: "video/mp4",
  };

  return (
    <main>
      <Navbar
        whatsappLink={whatsappLink}
      />

      <Hero
        whatsappLink={whatsappLink}
        backgroundMedia={heroMedia}
      />

      <Foundation />

      <Features />

      <CampusCircle />

      <Future />

      <Journey />

      <Philosophy />

      <Ecosystem />

      <FAQ
        whatsappLink={whatsappLink}
      />

      <Contact
        whatsappLink={whatsappLink}
      />
    </main>
  );
}

export default Home;