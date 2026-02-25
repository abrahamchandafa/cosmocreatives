import { HomePage } from "../components/HomePage";
import { Incubating } from "../components/Incubating";
import { ChinaMap } from "../components/ChinaMap";
import { Talent } from "../components/Talent";
import { Expand } from "../components/Expand";
import { Contact } from "../components/Contact";
import "../Home.css";

export const Home = () => {

  return (
    <>
      <title>Cosmo Creatives | Global to China Talent & IP Platform</title>
      <meta name="description" content="Cosmo is a Greater China-focused talent and IP platform, bridging global artists, brands, and cultural properties with the Chinese entertainment market." />
      <meta name="keywords" content="China talent agency, artist management China, brand partnerships China, cultural strategy, music publishing" />
      <meta property="og:title" content="Cosmo Creatives | Global to China Talent & IP Platform" />
      <meta property="og:description" content="Bridging global artists, brands, and cultural properties with the Chinese entertainment market." />
      <meta property="og:url" content="https://cosmocreatives.com/" />
      <meta property="og:image" content="https://cosmocreatives.com/og-image.jpg" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://cosmocreatives.com/" />
      
      <div className="snap-container">
        <section className="snap-section">
          <HomePage />
        </section>
        <section className="snap-section">
          <Incubating />
        </section>
        <section className="snap-section">
          <ChinaMap />
        </section>
        <section className="snap-section">
          <Talent />
        </section>
        <section className="snap-section">
          <Expand />
        </section>
        <section className="snap-section">
          <Contact />
        </section>
      </div>
    </>
  );
};