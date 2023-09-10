import ChannelPodcast from "@components/ChannelPodcast";
import ItemPodcast from "@components/ItemPodcast";
import NavigationBar from "@components/NavigationBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiSearch } from "react-icons/bi";

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
];

const dataChannelPodcast = [
  {
    img: "/assets/Podcast/dummy-4.png",
    title: "Rintik Sedu Podcast"
  },
  {
    img: "/assets/Podcast/dummy-3.png",
    title: "Suara Ibra Podcast"
  },
  {
    img: "/assets/Podcast/dummy.png",
    title: "Diary Gen Z Podcast"
  },
  {
    img: "/assets/Podcast/dummy-4.png",
    title: "Rintik Sedu Podcast"
  },
  {
    img: "/assets/Podcast/dummy-3.png",
    title: "Suara Ibra Podcast"
  },
  {
    img: "/assets/Podcast/dummy-4.png",
    title: "Rintik Sedu Podcast"
  },
  {
    img: "/assets/Podcast/dummy-3.png",
    title: "Suara Ibra Podcast"
  },
  {
    img: "/assets/Podcast/dummy.png",
    title: "Diary Gen Z Podcast"
  },
  {
    img: "/assets/Podcast/dummy-4.png",
    title: "Rintik Sedu Podcast"
  },
  {
    img: "/assets/Podcast/dummy-3.png",
    title: "Suara Ibra Podcast"
  },
]

const Podcast = () => {
  return (
    <>
      <NavigationBar active='podcast' />
      <div className='my-20 mt-10 lg:mt-20'>
        {/* Landing Page Podcast */}
        <div className='wrapper-homepage container flex justify-center items-center flex-col-reverse lg:flex-row lg: gap-5'>
          <div className='content-hero'>
            <h1 className='text-2xl sm:text-3xl lg:text-5xl font-medium mb-3'>
              Dengerin podcast untuk <br /> temani harimu di <br />{" "}
              TranquilMind.id
            </h1>
            <p className='text-xs sm:text-lg'>
              Jangan biarkan waktu luang Anda terbuang sia-sia, dengarkan
              podcast kami <br className='hidden sm:inline-block' /> dan temukan
              hiburan dan wawasan yang tepat untuk Anda!
            </p>
            <div className='search-bar relative mt-4'>
              <BiSearch className='absolute top-[13px] left-[13px] text-2xl text-slate-500' />
              <input
                type='text'
                name='search'
                id='search'
                className='border-slate-400 search-bar rounded-full px-5 pl-12 py-3 w-[320px] sm:w-[600px]'
                placeholder='Search podcast...'
              />
            </div>
          </div>
          <div className='hero-gif'>
            <Image
              src='/assets/Podcast/hero.gif'
              alt='hero-gif'
              width={600}
              height={600}
            />
          </div>
        </div>
        {/* Mid Section */}
        <div className='mid-section flex justify-evenly items-center lg:flex-row flex-col gap-5 container'>
          <div className='hero-mid flex flex-col justify-center items-center gap-5 mt-16'>
            <Image
              src='/assets/Podcast/pablita-podcast.gif'
              width={300}
              height={300}
              alt='hero-middle'
            />
            <div className='desc-hero flex justify-center items-center gap-3'>
              <h1 className="text-3xl sm:text-5xl font-medium font-inter">Podcast</h1>
              <div className="border-l-4 border-primary h-20 w-48 sm:h-24 sm:w-56 flex justify-center items-center pl-3 text-sm sm:text-lg">
                <p>Temani harimu dengan obrolan menarik dimanapun kapanpun.</p>
              </div>
            </div>
          </div>
          <div className='list-podcast flex justify-center items-center flex-col mt-16'>
            <Link
              href='/podcast/list-podcast'
              className='button-lainnya self-end rounded-full border border-primary text-primary bg-white px-5 py-1 hover:bg-primary hover:text-white transition duration-300 mb-3'
            >
              Lainya
            </Link>
            <div className='wrapper-card-podcast grid grid-cols-1 sm:grid-cols-2 place-items-center gap-3'>
              {dataPodcast.map((pod) => (
                <>
                  <ItemPodcast podcast={pod} key={pod.id} />
                </>
              ))}
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="container">
          <div className="head-bot-sec mt-20 mb-5 translate-x-2">
            <h1 className="font-semibold text-2xl text-primary">Channel Podcast</h1>
            <p>Pilihan channel podcast untuk anda</p>
          </div>
          <div className="channel-podcast-list grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-6 place-items-center">
            {dataChannelPodcast.map((channel) => (
              <>
                <ChannelPodcast channel={channel} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Podcast;
