"use client";

import CardPsikolog from "@components/CardPsikolog";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Recommendation() {
  const router = useRouter();

  return (
    <>
      <div className='flex md:h-[40rem] md:mt-32 mb-0'>
        <div className='flex-1 flex items-center py-20 rounded-xl bg-white'>
          <div className='container_2'>
            <h1 className='heading'>
              Rekomendasi <br /> Psikolog & Psikiater
            </h1>
            <p className='desc'>
              Dapatkan informasi tentang rekomendasi psikolog dan psikiater
              terbaik yang dapat membantu anda lebih lanjut
            </p>
            <Button
              onClick={() => router.push("/rekomendasi")}
              className='btn bg-primary text-white flex-1'
            >
              Selengkapnya
            </Button>
          </div>
        </div>
        <div className='flex-1 hidden md:flex items-center justify-center rounded-tl-xl bg-primary py-20'>
          <div className='flex flex-col gap-5'>
            <CardPsikolog
              name='Novi Maulidita, M.PSI'
              type='Psikolog'
              image='/assets/Homepage/psikolog.png'
              place='RS Harapan Bersama'
            />
            <CardPsikolog
              name='dr. Aulia Fatmawati, Sp.KJ'
              type='Psikiater'
              image='/assets/Homepage/psikiater.png'
              place='RS Kardina Tegal'
            />
          </div>
        </div>
      </div>
    </>
  );
}
