"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { HiMiniPause, HiPlay } from "react-icons/hi2";

export default function ItemPodcast({
  podcast,
  handleIsPlayed = () => {},
}) {
  const [playAudio, setPlayAudio] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(podcast.audio);
    audioRef.current.addEventListener("ended", () => {
      setPlayAudio(false);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [podcast.audio]);

  const handlePlayAudio = () => {
    audioRef.current.play();
    setPlayAudio(true);
  };

  const handlePauseAudio = () => {
    audioRef.current.pause();
    setPlayAudio(false);
  };

  return (
    <div
      className='card-podcast relative flex justify-center items-center gap-3 p-2 lg:pr-5 rounded-3xl text-white bg-primary hover:-translate-y-1 transition cursor-pointer w-[320px] sm:w-[370px]'
      onClick={() => {
        playAudio ? handlePauseAudio() : handlePlayAudio();
        handleIsPlayed(podcast.title_original, podcast.image);
      }}
    >
      {playAudio ? (
        <HiMiniPause
          style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.3)" }}
          className='text-3xl text-white font-semibold absolute top-14 left-14'
        />
      ) : (
        <HiPlay
          style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.3)" }}
          className='text-3xl text-white font-semibold absolute top-14 left-14'
        />
      )}
      <Image
        src={podcast.image}
        width={120}
        height={120}
        alt='image-podcast'
        className='rounded-2xl'
      />
      <div className='desc'>
        <h2 className='font-semibold text-base sm:text-xl'>
          {podcast.title_original}
        </h2>
        <p className='text-[0.6rem] sm:text-xs mt-1 sm:mt-2'>
          {playAudio ? "Tekan untuk pause" : "Tekan untuk dengarkan ->"}
        </p>
      </div>
    </div>
  );
}
