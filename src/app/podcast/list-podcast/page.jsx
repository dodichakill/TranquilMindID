"use client";

import React, { useEffect, useState } from "react";
import NavigationBar from "@components/NavigationBar";
import Image from "next/image";
import ItemPodcast from "@components/ItemPodcast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import { client } from "@api";

export default function ListPodcast() {
  const clientPodcast = client;
  const [dataListPodcast, setDataListPodcast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAudioTitle, setIsAudioTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleIsPlayed = (title, image) => {
    setIsAudioTitle(title);
    setImageUrl(image);
  };

  useEffect(() => {
    const fetchingDataFromAPI = async () => {
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
          setDataListPodcast(response.data.results);
          // setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchingDataFromAPI();
    console.log(dataListPodcast);
  }, []);

  return (
    <>
      <NavigationBar active='podcast' />
      <div className='my-20 mt-10 lg:mt-24 lg:mb-0 flex justify-between items-start lg:flex-row flex-col gap-5 lg:pr-6'>
        <div className='sidebar-podcast flex flex-col justify-start items-start lg:items-center bg-primary h-fit w-full pb-4 lg:pb-0 lg:h-[880px] lg:w-[22rem] text-white pl-3'>
          <Link
            href='/podcast'
            className='back-button flex justify-start w-full items-center gap-3 my-5 pl-4 font-semibold'
          >
            <AiOutlineArrowLeft className='text-3xl' />
            <span className='text-xl'>Kembali</span>
          </Link>
          <div className='desc-pod lg:flex-col flex sm:flex-row flex-col'>
            <Image
              src={imageUrl ? imageUrl : "/assets/Podcast/dummy-4.png"}
              width={250}
              height={250}
              alt='podcast-image'
              className='px-8 rounded-2xl'
            />
            <div className='desc-box flex flex-col justify-center items-center'>
              <div className='px-8 sm:px-0 lg:px-8 my-3 title-podcast self-start'>
                <h1 className='font-semibold text-xl w-[230px]'>
                  {isAudioTitle ? isAudioTitle : "Dengarkan Podcast"}
                </h1>
              </div>
              <div className='my-3 about-podcast self-start pl-8 sm:pl-0 lg:pl-8'>
                <h1 className='font-semibold text-xl'>Sumber</h1>
                <div className='flex justify-center items-center mt-4 text-sm sm:text-lg'>
                  <a href='https://www.listennotes.com/api' target='_blank'>
                    Listennotes API
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {!loading ? (
          <>
            <div
              className={`podcast-list grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 place-items-center lg:mt-16 mt-6 lg:translate-x-0 translate-x-6 sm:translate-x-2`}
            >
              {dataListPodcast.map((pod) => (
                <>
                  <ItemPodcast
                    podcast={pod}
                    key={pod.id}
                    handleIsPlayed={handleIsPlayed}
                  />
                </>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className='custom-loader flex justify-center items-center self-center lg:-translate-x-[550px]'></div>
          </>
        )}
      </div>
    </>
  );
}
