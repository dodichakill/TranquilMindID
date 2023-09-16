"use client";
import { db } from "@app/firebase";
import { collection, query, onSnapshot } from "@firebase/firestore";
import NavigationBar from "@components/NavigationBar";
import CarouselBanner from "@components/CarouselBanner";
import CardArticle from "@components/CardArticle";
import { useEffect, useState } from "react";
import FooterSection from "@components/FooterSection";
import ButtonBackTop from "@components/ButtonBackTop";
import { Spinner } from "flowbite-react";

const dataBannerCarousel = [
  {
    id: 1,
    title: "Depresi",
    desc: "Depresi adalah gangguan suasana hati yang menyebabkan penderitanya terus-menerus merasa sedih. Perasaan sedih pada depresi bisa berlangsung hingga berminggu-minggu atau berbulan-bulan.",
    image: "/assets/Homepage/depresi.png",
    link: "/edukasi/W0Z1McBsfWE1PqNXibmy",
  },
  {
    id: 2,
    title: "Kecemasan",
    desc: "Kecemasan merupakan perasaan khawatir atau takut  berlebihan terhadap suatu keadaan atau objek tertentu. Penyebab kecemasan tidak dapat ditentukan sendiri karena sangat kompleks.",
    image: "/assets/Homepage/anxiety.png",
    link: "/edukasi/sSnG49zAbb5FzmIF2V5W",
  },
  {
    id: 3,
    title: "Skizofrenia",
    desc: "Skizofrenia adalah gangguan mental berat yang dapat memengaruhi tingkah laku, emosi, dan komunikasi. Penderita skizofrenia bisa mengalami halusinasi, delusi, kekacauan berpikir, dan perubahan perilaku.",
    image: "/assets/Homepage/skizo.png",
    link: "/edukasi/g5mQT239RpU24UVhY6EG",
  },
];

const Edukasi = () => {
  const [loading, setLoading] = useState(true);
  const [dataArtikel, setDataArtikel] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "edukasi"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemArr = [];
      console.log(" querySnapshot : ", querySnapshot);

      querySnapshot.forEach((doc) => {
        console.log(doc);
        itemArr.push({ ...doc.data(), id: doc.id });
      });

      setDataArtikel(itemArr);
      console.log("item Arr : ", itemArr);
    });

    setLoading(false);

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <NavigationBar active="edukasi" />
      <div className="my-5 sm:my-8 lg:my-[5.5rem] flex flex-col justify-center items-center gap-8 sm:gap-12 lg:gap-16">
        <CarouselBanner data={dataBannerCarousel} />
        {!loading ? (
          <>
            <div className="container grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8">
              <div className="title w-[300px] sm:w-[600px] lg:text-start text-center">
                <h1
                  className="text-lg sm:text-3xl lg:text-4xl font-semibold text-primary mb-2"
                  style={{ textShadow: "0.5px 0.5px 0.5px rgba(0,0,0,0.3)" }}
                >
                  Kenali Berbagai Gangguan Mental
                </h1>
                <p className="text-xs sm:text-lg">
                  Ada berbagai macam gangguan mental dan cara penyembuhannya.
                  Baca artikel untuk menambah pengetahuan Anda
                </p>
              </div>
              {dataArtikel ? (
                dataArtikel.map((data) => (
                  <>
                    <CardArticle
                      key={data.id}
                      idArticle={data.id}
                      titleArticle={data.title}
                      imgArticle={data.image}
                      shortDesc={data.deskripsi.slice(0, 90)}
                      linkArticle={data.title}
                    />
                  </>
                ))
              ) : (
                <Spinner size={"xl"} />
              )}
            </div>
          </>
        ) : (
          <>
            <div className="loading">Loading data...</div>
          </>
        )}
      </div>
      <FooterSection />
      <ButtonBackTop />
    </>
  );
};

export default Edukasi;
