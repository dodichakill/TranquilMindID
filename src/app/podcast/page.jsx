"use client";

import ChannelPodcast from "@components/ChannelPodcast";
import ItemPodcast from "@components/ItemPodcast";
import NavigationBar from "@components/NavigationBar";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { client } from "@services";
import FooterSection from "@components/FooterSection";
import ButtonBackTop from "@components/ButtonBackTop";

const Podcast = () => {
  const [resultDataListenAPI, setResultDataListenAPI] = useState([]);
  const [populerPodcast, setPopulerPodcast] = useState([]);
  const [loading, setLoading] = useState(true);
  const clientPodcast = client;

  useEffect(() => {
    const fetchingDataFromAPI = async () => {
      clientPodcast
        .fetchBestPodcasts({
          genre_id: "93",
          page: 2,
          region: "us",
          sort: "listen_score",
          safe_mode: 0,
        })
        .then((response) => {
          setPopulerPodcast(response.data.podcasts);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const fetchingDataFromAPI2 = async () => {
      clientPodcast
        .search({
          q: "star wars",
          sort_by_date: 0,
          type: "episode",
          offset: 0,
          len_min: 10,
          len_max: 30,
          genre_ids: "68,82",
          published_before: 1580172454000,
          published_after: 0,
          only_in: "title,description",
          language: "English",
          safe_mode: 0,
          unique_podcasts: 0,
          page_size: 10,
        })
        .then((response) => {
          setResultDataListenAPI(response.data.results);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchingDataFromAPI();
    fetchingDataFromAPI2();
  }, []);

  return (
    <>
      <NavigationBar active='podcast' />
      <div className='my-20 mt-10 lg:mt-20'>
        {/* Landing Page Podcast */}
        <div className='wrapper-homepage container flex justify-center items-center flex-col-reverse lg:flex-row lg: gap-5'>
          <div className='content-hero'>
            <h1 className='text-2xl sm:text-3xl lg:text-5xl font-medium mb-3'>
              Dengerin podcast untuk <br /> temani harimu di{" "}
              <br className='hidden lg:block' />{" "}
              <span className='text-primary'>TranquilMind.id</span>
            </h1>
            <p className='text-xs sm:text-lg'>
              Jangan biarkan waktu luang Anda terbuang sia-sia, dengarkan
              podcast <br className='hidden sm:inline-block' /> dan temukan
              hiburan dan wawasan yang tepat untuk Anda!
            </p>
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
              <h1 className='text-3xl sm:text-5xl font-medium font-inter'>
                Podcast
              </h1>
              <div className='border-l-4 border-primary h-20 w-48 sm:h-24 sm:w-56 flex justify-center items-center pl-3 text-sm sm:text-lg'>
                <p>Temani harimu dengan obrolan menarik dimanapun kapanpun.</p>
              </div>
            </div>
          </div>
          <div className='list-podcast flex justify-center items-center flex-col mt-16'>
            {!loading && (
              <>
                <Link
                  href='/podcast/list-podcast'
                  className='button-lainnya self-end rounded-full border border-primary text-primary bg-white px-5 py-1 hover:bg-primary hover:text-white transition duration-300 mb-3'
                >
                  Lainya
                </Link>
              </>
            )}
            <div className='wrapper-card-podcast grid grid-cols-1 sm:grid-cols-2 place-items-center gap-3'>
              {!loading ? (
                <>
                  {resultDataListenAPI.slice(0, 4).map((pod) => (
                    <>
                      <ItemPodcast
                        podcast={pod}
                        key={pod.id}
                      />
                    </>
                  ))}
                </>
              ) : (
                <>
                  <div className='custom-loader'></div>
                </>
              )}
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className='container'>
          <div className='head-bot-sec mt-20 mb-5 translate-x-2'>
            <h1 className='font-semibold text-2xl text-primary'>
              Podcast Populer
            </h1>
            <p>Daftar podcast terpopuler</p>
          </div>
          <div
            className={`channel-podcast-list ${
              !loading ? "grid" : "flex justify-center items-center"
            } grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-6 place-items-center`}
          >
            {loading ? (
              <>
                <div className='custom-loader'></div>
              </>
            ) : (
              <>
                {populerPodcast &&
                  populerPodcast.map((channel) => (
                    <>
                      <ChannelPodcast channel={channel} />
                    </>
                  ))}
              </>
            )}
          </div>
        </div>
        {!loading && (
          <>
            <div className='flex justify-center items-center mt-4 text-sm sm:text-lg font-semibold'>
              Sumber:&nbsp;
              <a href='https://www.listennotes.com/api' target='_blank'>
                Listennotes API
              </a>
            </div>
          </>
        )}
      </div>
      <FooterSection />
      <ButtonBackTop />
    </>
  );
};

export default Podcast;
