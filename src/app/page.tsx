import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Company from "@/components/Company";
import Services from "@/components/Services";
import Leadership from "@/components/Leadership";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Company />
        <Services />
        <Leadership />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
