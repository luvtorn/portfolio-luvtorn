import About from "./components/About/About";
import ContactForm from "./components/ContactForm/ContactForm";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import HomeEffects from "./components/HomeEffects";
import Projects from "./components/Projects/Projects";

export default function Home() {
  return (
    <div className="site-shell">
      <HomeEffects />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
