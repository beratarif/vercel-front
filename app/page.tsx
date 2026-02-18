import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import './style.css';



export default function Home() {
  return (
    <main>
      <section className="hero">
        <Navbar/>
        <Hero/>
      </section>
    </main>
  );
}

