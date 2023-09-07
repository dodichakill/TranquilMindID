import React from "react";
import NavigationBar from "@components/NavigationBar";
import Image from "next/image";
import ItemPodcast from "@components/ItemPodcast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";

const dataPodcast = [
  {
    id: 1,
    title: "apa ya? gak tahu...",
    channel: "Rintik Sedu Podcast",
    img: "/assets/Podcast/dummy-2.png",
  },
  {
    id: 2,
    title: "apa ya? gak tahu...",
    channel: "Rintik Sedu Podcast",
    img: "/assets/Podcast/dummy-2.png",
  },
  {
    id: 3,
    title: "apa ya? gak tahu...",
    channel: "Rintik Sedu Podcast",
    img: "/assets/Podcast/dummy-2.png",
  },
  {
    id: 4,
    title: "apa ya? gak tahu...",
    channel: "Rintik Sedu Podcast",
    img: "/assets/Podcast/dummy-2.png",
  },
  {
    id: 5,
    title: "apa ya? gak tahu...",
    channel: "Rintik Sedu Podcast",
    img: "/assets/Podcast/dummy-2.png",
  },
  {
    id: 6,
    title: "apa ya? gak tahu...",
    channel: "Rintik Sedu Podcast",
    img: "/assets/Podcast/dummy-2.png",
  },
  {
    id: 7,
    title: "apa ya? gak tahu...",
    channel: "Rintik Sedu Podcast",
    img: "/assets/Podcast/dummy-2.png",
  },
  {
    id: 8,
    title: "apa ya? gak tahu...",
    channel: "Rintik Sedu Podcast",
    img: "/assets/Podcast/dummy-2.png",
  },
  {
    id: 9,
    title: "apa ya? gak tahu...",
    channel: "Rintik Sedu Podcast",
    img: "/assets/Podcast/dummy-2.png",
  },
  {
    id: 10,
    title: "apa ya? gak tahu...",
    channel: "Rintik Sedu Podcast",
    img: "/assets/Podcast/dummy-2.png",
  },
  {
    id: 11,
    title: "apa ya? gak tahu...",
    channel: "Rintik Sedu Podcast",
    img: "/assets/Podcast/dummy-2.png",
  },
  {
    id: 12,
    title: "apa ya? gak tahu...",
    channel: "Rintik Sedu Podcast",
    img: "/assets/Podcast/dummy-2.png",
  },
  {
    id: 13,
    title: "apa ya? gak tahu...",
    channel: "Rintik Sedu Podcast",
    img: "/assets/Podcast/dummy-2.png",
  },
  {
    id: 14,
    title: "apa ya? gak tahu...",
    channel: "Rintik Sedu Podcast",
    img: "/assets/Podcast/dummy-2.png",
  },
  {
    id: 15,
    title: "apa ya? gak tahu...",
    channel: "Rintik Sedu Podcast",
    img: "/assets/Podcast/dummy-2.png",
  },
];

export default function ListPodcast() {
  return (
    <>
      <NavigationBar active='podcast' />
      <div className='my-20 mt-10 lg:mt-24 lg:mb-0 flex justify-between items-start gap-5 pr-6'>
        <div className='sidebar-podcast flex flex-col justify-start items-center bg-primary h-[1000px] w-[22rem] text-white'>
          <Link
            href='/podcast'
            className='back-button flex justify-start w-full items-center gap-3 my-5 pl-4 font-semibold'
          >
            <AiOutlineArrowLeft className='text-3xl' />
            <span className='text-xl'>Kembali</span>
          </Link>
          <Image
            src='/assets/Podcast/dummy-4.png'
            width={250}
            height={250}
            alt='podcast-image'
          />
          <div className='px-12 my-3 title-podcast self-start'>
            <h1 className='font-semibold text-xl'>Rintik Sedu Podcast</h1>
            <p>18 Podcast</p>
          </div>
          <div className='px-12 my-3 about-podcast'>
            <h1 className='font-semibold text-xl'>Tentang</h1>
            <p>Karna ada banyak hal yang harus di gapapain {":)"}</p>
          </div>
        </div>
        <div className='podcast-list grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 place-items-center mt-16'>
          {dataPodcast.map((podcast) => (
            <>
              <ItemPodcast podcast={podcast} />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
