"use client";

import Image from "next/image";
import Link from "next/link";

const CardArticle = ({ linkArticle, titleArticle, imgArticle, shortDesc }) => {
  return (
    <>
      <Link href={`/edukasi/${linkArticle.toLowerCase()}`}
        className='box-article cursor-pointer hover:-translate-y-1 transition overflow-hidden rounded-2xl bg-white w-[300px] sm:w-[600px]'
        style={{ boxShadow: "1px 1px 8px 1px rgba(0,0,0,0.3)" }}
      >
        <div className='content-article pr-2 pb-6 sm:pb-0 flex justify-between items-center text-center sm:flex-row flex-col gap-9 sm:gap-0'>
          <Image
            src={imgArticle}
            alt='thumb-article'
            width={250}
            height={250}
            className='scale-125 sm:scale-100'
          />
          <div className='content-desc gap-1 sm:gap-2 px-5 text-start flex flex-col justify-center items-start'>
            <h1 className='text-lg sm:text-2xl font-semibold'>
              {titleArticle}
            </h1>
            <p className='text-xs sm:text-base'>
              {shortDesc}...{" "}
              <Link
                href={`/edukasi/${linkArticle.toLowerCase()}`}
                className='text-primary text-xs sm:text-base cursor-pointer'
              >
                lanjut baca
              </Link>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardArticle;
