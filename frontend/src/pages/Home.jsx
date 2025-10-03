import Header from "../components/Header";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import homeBanner from "../assets/Home_banner.png";

export default function Home() {
  return (
    <>
      <Header />
      <Banner image={homeBanner} text="Chez vous, partout et ailleurs" />
      <Gallery />
      <Footer />
    </>
  );
}
