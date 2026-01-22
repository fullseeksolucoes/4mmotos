import { Acessories } from "@/components/acessories/Acessories";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Hero } from "@/components/hero/Hero";
import { Services } from "@/components/services/Services";
import { TrustBar } from "@/components/trust-bar/TrustBar";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <Acessories />
      <Contact />
      <Footer />
    </>
  );
}
