import ControlledCarousel from "@/components/client/carouselHome";
import Footer from "@/components/client/footer";
import MainGridsHome from "@/components/client/mainGridsHome";

export default function Home() {
  return (
    <>
      <ControlledCarousel />
      <MainGridsHome />
      <Footer />
    </>
  );
}