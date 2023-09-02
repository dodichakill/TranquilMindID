"use client";

import CarouselBanner from "@components/CarouselBanner";
import Headline from "./Headline";
import Features from "./Features";
import Podcasts from "./Podcasts";
import Recommendation from "./Recommendation";
import Reviews from "./Reviews";
import NavigationBar from "@components/NavigationBar";

export default function Home() {
  const dataBannerCarousel = [
    {
      id: 1,
      title: "Depresi",
      desc: "Merupakan perasaan sedih dan kehilangan minat yang berlangsung dalam jangka waktu yang panjang",
      image: "/assets/Homepage/depresi.png",
      link: "/",
    },
    {
      id: 2,
      title: "Kecemasan",
      desc: "Termasuk gangguan kecemasan umum, gangguan panik, dan fobia.",
      image: "/assets/Homepage/anxiety.png",
      link: "/",
    },
    {
      id: 3,
      title: "Skizofrenia",
      desc: "Merupakan gangguan mental yang serius yang mempengaruhi pemikiran, perasaan, dan perilaku seseorang.",
      image: "/assets/Homepage/skizo.png",
      link: "/",
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
    </>
  );
}
