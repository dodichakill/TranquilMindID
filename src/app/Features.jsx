"use client";

import { Button } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function Features() {
  const router = useRouter();

  return (
    <div id="features" className='w-full box-border bg-primary pt-16 md:pt-28 mb-20 md:mb-40 flex flex-col justify-center'>
      <div className='w-full max-w-[45em] flex flex-col pb-48 m-auto justify-center'>
        <h1 className='heading text-white text-center'>
          Mulai tes yuk! Biar tau kamu terkena gangguan apa
        </h1>
        <Button
          className='btn_secondary text-black bg-white m-auto inline-flex w-auto'
          id='tes'
          onClick={() => router.push("/linimasa")}
        >
          Mulai Tes
        </Button>
      </div>

      {/* cards start */}
      <div className='w-full m-auto flex justify-center items-center relative bg-white h-[50rem] md:h-auto p-10 box-border rounded-t-3xl md:rounded-t-full'>
        <div className='flex flex-col md:flex-row w-full box-border justify-evenly items-center absolute -top-32'>
          <div className='text-center w-64'>
            <Image
              src='/assets/Homepage/podcast.gif'
              alt='card'
              width={300}
              height={300}
            />
            <p className='sub_heading'>Podcast</p>
            <p className='desc'>
              Temani harimu dengan obrolan menarik dimanapun kapanpun.
            </p>
          </div>

          <div className='text-center w-64'>
            <Image
              src='/assets/Homepage/latar.gif'
              alt='card'
              width={300}
              height={300}
            />
            <p className='sub_heading'>Latar Musik</p>
            <p className='desc'>Relaksasikan harimu dengan latar musik.</p>
          </div>

          <div className='text-center w-64'>
            <Image
              src='/assets/Homepage/linimasa.gif'
              alt='card'
              width={200}
              height={200}
              className='m-auto'
            />
            <p className='sub_heading'>Linimasa</p>
            <p className='desc'>
              Monitoring perjalanan pulihkan jiwa dan kesehatan mentalmu.
            </p>
          </div>
        </div>
      </div>
      {/* cards end */}
    </div>
  );
}
