"use client";

import { useParams } from "next/navigation";
import { dataArtikel } from "../page";
import NavigationBar from "@components/NavigationBar";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Image from "next/image";

const ArticlePage = () => {
  const { article } = useParams();
  const detailArticle = dataArtikel.filter(
    (data) => data.title.toLowerCase() === decodeURIComponent(article).toLowerCase()
  );

  return (
    <>
      <NavigationBar active='edukasi' />
      <div className='container relative my-5 sm:my-8 lg:my-20 flex flex-col justify-center items-start gap-6'>
        <Link
          href='/edukasi'
          className='button-back sm:text-base text-sm absolute font-medium left-4 top-4 flex justify-center items-center gap-2'
        >
          <AiOutlineArrowLeft className='sm:text-2xl' />
          Kembali
        </Link>
        {detailArticle.map((data) => (
          <>
            <div className='img-box flex flex-col justify-center self-center items-center gap-2 my-2 sm:my-4 mt-8 sm:mt-12'>
              <Image
                src={data.image}
                alt='hero-detail-artikel'
                width={800}
                height={800}
                className="rounded-xl shadow-md"
              />
              <a href={data.image} className="self-start text-[0.5rem] sm:text-xs" target="_blank">source: {data.image}</a>
            </div>
            <div className='title-article'>
              <h1 className="text-xl sm:text-2xl mb-2 lg:text-3xl font-semibold">{data.title}</h1>
              <p className="text-xs sm:text-base">{data.deskripsi}</p>
            </div>
            <div className='gejala'>
              <h1 className="text-xl sm:text-2xl mb-2 lg:text-3xl font-semibold">Gejala {data.title}</h1>
              <p className="text-xs sm:text-base">{data.gejala}</p>
            </div>
            <div className='penyebab'>
              <h1 className="text-xl sm:text-2xl mb-2 lg:text-3xl font-semibold">Faktor Penyebab</h1>
              <p className="text-xs sm:text-base">{data.penyebab}</p>
            </div>
            <div className='penanganan'>
              <h1 className="text-xl sm:text-2xl mb-2 lg:text-3xl font-semibold">Penanganan</h1>
              <p className="text-xs sm:text-base">{data.penanganan}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ArticlePage;
