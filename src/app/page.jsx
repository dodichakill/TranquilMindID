// "use client";

import CarouselBanner from "@components/CarouselBanner";
import Headline from "./Headline";
import Features from "./Features";
import Podcasts from "./Podcasts";
import Recommendation from "./Recommendation";
import Reviews from "./Reviews";
import NavigationBar from "@components/NavigationBar";
import FooterSection from "@components/FooterSection";
import ButtonBackTop from "@components/ButtonBackTop";

export default function Home() {
  const dataBannerCarousel = [
    {
      id: 1,
      title: "Depresi",
      desc: "Depresi adalah gangguan suasana hati yang menyebabkan penderitanya terus-menerus merasa sedih. Perasaan sedih pada depresi bisa berlangsung hingga berminggu-minggu atau berbulan-bulan.",
      image: "/assets/Homepage/depresi.png",
      link: "/edukasi/depresi",
    },
    {
      id: 2,
      title: "Kecemasan",
      desc: "Kecemasan merupakan perasaan khawatir atau takut  berlebihan terhadap suatu keadaan atau objek tertentu. Penyebab kecemasan tidak dapat ditentukan sendiri karena sangat kompleks.",
      image: "/assets/Homepage/anxiety.png",
      link: "/edukasi/kecemasan",
    },
    {
      id: 3,
      title: "Skizofrenia",
      desc: "Skizofrenia adalah gangguan mental berat yang dapat memengaruhi tingkah laku, emosi, dan komunikasi. Penderita skizofrenia bisa mengalami halusinasi, delusi, kekacauan berpikir, dan perubahan perilaku.",
      image: "/assets/Homepage/skizo.png",
      link: "/edukasi/skizofrenia",
    },
  ];

  return (
    <>
      <NavigationBar active="beranda" />

      <Headline />
      <Features />

      <Podcasts />

      <Recommendation />

      <CarouselBanner data={dataBannerCarousel} />

      <Reviews />

      <FooterSection />
      <ButtonBackTop />
    </>
  );
}
