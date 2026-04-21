import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Stats from "./_components/Stats";
import Intro from "./_components/Intro";
import Categories from "./_components/Categories";
import WhyUs from "./_components/WhyUs";
import Testimonials from "./_components/Testimonials";
import ContactSection from "./_components/ContactSection";
import Footer from "./_components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <Intro />
      <Categories />
      <WhyUs />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}
