import { HomePage } from "../components/HomePage";
import { Incubating } from "../components/Incubating";
import { ChinaMap } from "../components/ChinaMap";
import { Talent } from "../components/Talent";
import { Expand } from "../components/Expand";
import { Contact } from "../components/Contact";
import "../Home.css";

export const Home = () => {

  return (
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
  );
};