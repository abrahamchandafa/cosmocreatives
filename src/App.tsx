import "./App.css";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./components/HomePage";
import { Incubating } from "./components/Incubating";
import { ChinaMap } from "./components/ChinaMap";
import { Talent } from "./components/Talent";
import { Expand } from "./components/Expand";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <Incubating />
      <ChinaMap />
      <Talent />
      <Expand />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
