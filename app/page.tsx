import Footer from "./components/homepage/footer";
import Header from "./components/homepage/header";
import Hero from "./components/homepage/hero";
import LatestNews from "./components/homepage/latest-news";
import PrimaryCTA from "./components/homepage/primary-cta";
import SecondaryCTA from "./components/homepage/secondary-cta";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PrimaryCTA />
      <LatestNews />
      <SecondaryCTA />
      <Footer />
    </main>
  );
}
