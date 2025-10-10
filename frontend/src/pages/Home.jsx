import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import homeBanner from "../assets/Home_banner.png";

export default function Home() {
  return (
    <>
      <Banner image={homeBanner} text="Chez vous,
      partout et ailleurs" />
      <Gallery />
    </>
  );
}
