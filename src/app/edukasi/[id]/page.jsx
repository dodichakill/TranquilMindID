"use client";
import { db } from "@app/firebase";
import { collection, query, onSnapshot } from "@firebase/firestore";
import { useParams } from "next/navigation";
import NavigationBar from "@components/NavigationBar";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Image from "next/image";
import FooterSection from "@components/FooterSection";
import ButtonBackTop from "@components/ButtonBackTop";
import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";

const ArticlePage = () => {
  const { id } = useParams();
  const [dataArtikel, setDataArtikel] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "edukasi"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemArr = [];
      console.log(" querySnapshot : ", querySnapshot);

      querySnapshot.forEach((doc) => {
        itemArr.push({ ...doc.data(), id: doc.id });
      });

      setDataArtikel(itemArr.find((data) => data.id == id));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <NavigationBar active="edukasi" />
      <div className="container relative my-5 sm:my-8 lg:my-20 flex flex-col justify-center items-start gap-6">
        <Link
          href="/edukasi"
          className="button-back sm:text-base text-sm absolute font-medium left-4 top-4 flex justify-center items-center gap-2"
        >
          <AiOutlineArrowLeft className="sm:text-2xl" />
          Kembali
        </Link>
        {dataArtikel ? (
          <>
            <div className="img-box flex flex-col justify-center self-center items-center gap-2 my-2 sm:my-4 mt-8 sm:mt-12">
              <Image
                src={dataArtikel.image}
                alt="hero-detail-artikel"
                width={800}
                height={800}
                className="rounded-xl shadow-md"
              />
              <a
                href={dataArtikel.image}
                className="self-start text-[0.5rem] sm:text-xs"
                target="_blank"
              >
                source: {dataArtikel.image}
              </a>
            </div>
            <div className="title-article">
              <h1 className="text-xl sm:text-2xl mb-2 lg:text-3xl font-semibold">
                {dataArtikel.title}
              </h1>
              <p className="text-xs sm:text-base">{dataArtikel.deskripsi}</p>
            </div>
            <div className="gejala">
              <h1 className="text-xl sm:text-2xl mb-2 lg:text-3xl font-semibold">
                Gejala {dataArtikel.title}
              </h1>
              <p className="text-xs sm:text-base">{dataArtikel.gejala}</p>
            </div>
            <div className="penyebab">
              <h1 className="text-xl sm:text-2xl mb-2 lg:text-3xl font-semibold">
                Faktor Penyebab
              </h1>
              <p className="text-xs sm:text-base">{dataArtikel.penyebab}</p>
            </div>
            <div className="penanganan">
              <h1 className="text-xl sm:text-2xl mb-2 lg:text-3xl font-semibold">
                Penanganan
              </h1>
              <p className="text-xs sm:text-base">{dataArtikel.penanganan}</p>
            </div>
          </>
        ) : (
          <Spinner size={"xl"} className="mt-10" />
        )}
      </div>
      <FooterSection />
      <ButtonBackTop />
    </>
  );
};

export default ArticlePage;
