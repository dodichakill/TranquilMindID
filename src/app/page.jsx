// "use client";

import CarouselBanner from "@components/CarouselBanner";
import Headline from "./Headline";
import Features from "./Features";
import Podcasts from "./Podcasts";
import Recommendation from "./Recommendation";
import Reviews from "./Reviews";
import NavigationBar from "@components/NavigationBar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";
export default async function Home() {
  const dataBannerCarousel = [
    {
      id: 1,
      title: "Depresi",
      desc: `Merupakan perasaan sedih dan kehilangan minat yang berlangsung
      dalam jangka waktu yang panjang, Merupakan perasaan sedih dan
      kehilangan minat yang berlangsung dalam jangka waktu yang
      panjang, Merupakan perasaan sedih.`,
      image: "/assets/Homepage/depresi.png",
      link: "/",
    },
    {
      id: 2,
      title: "Kecemasan",
      desc: "Kecemasan adalah perasaan takut dan gelisah yang seringkali tidak jelas penyebabnya, memengaruhi kesejahteraan mental dengan gejala fisik dan dampak pada kehidupan sehari-hari.",
      image: "/assets/Homepage/anxiety.png",
      link: "/",
    },
    {
      id: 3,
      title: "Skizofrenia",
      desc: "Skizofrenia adalah gangguan mental yang memengaruhi pikiran, emosi, dan perilaku seseorang, sering kali disertai oleh halusinasi dan waham. Pengobatannya melibatkan terapi psikososial dan obat antipsikotik.",
      image: "/assets/Homepage/skizo.png",
      link: "/",
    },
  ];

  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <NavigationBar active="beranda" user={user} />

      <Headline />
      <Features />

      <Podcasts />

      <Recommendation />

      <CarouselBanner data={dataBannerCarousel} />

      <Reviews />
    </>
  );
}
