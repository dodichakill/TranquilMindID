"use client";

import Image from "next/image";
import React, { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { BsRepeat } from "react-icons/bs";
import { BsRepeat1 } from "react-icons/bs";
import { HiSpeakerWave } from "react-icons/hi2";
import { AiFillPauseCircle } from "react-icons/ai";

function AudioPlayerSection() {
  const [repeat, setRepeat] = useState(true);
  const [play, setPlay] = useState(true);

  return (
    <div className='flex justify-between items-center fixed bottom-16 py-1 lg:py-2 px-2 sm:px-3 lg:px-8 lg:bottom-0 w-full h-14 sm:h-[4.5rem] lg:h-[5.5rem] bg-primary text-white z-[99999]'>
      <div className='title-audio flex justify-center items-center gap-1 sm:gap-3'>
        <Image
          src="/assets/Podcast/dummy-4.png"
          alt='audio-thumbnail'
          width={70}
          height={70}
          className="lg:w-[70px] sm:w-[50px] w-[35px]"
          style={{ borderRadius: '10px' }}
        />
        <div className='title-desc sm:flex justify-center items-start flex-col gap-1 hidden'>
          <h1 className="font-semibold text-sm sm:text-md lg:text-lg">apa ya? gak tahu</h1>
          <p className="text-xs lg:text-sm">Rintik Sedu Podcast</p>
        </div>
      </div>
      <div className='core-audio flex flex-col justify-center items-center sm:gap-2 lg:gap-3'>
        <div className='box-player flex justify-center items-center gap-2 sm:gap-4'>
          <TbPlayerTrackNextFilled className="text-base sm:text-2xl lg:text-3xl cursor-pointer" style={{ transform: 'rotateY(180deg)' }} />
          {play ? (
            <>
              <AiFillPlayCircle className="text-base sm:text-2xl lg:text-3xl cursor-pointer" onClick={() => {setPlay((prev) => !prev)}} />
            </>
          ) : (
            <>
              <AiFillPauseCircle className="text-base sm:text-2xl lg:text-3xl cursor-pointer" onClick={() => {setPlay((prev) => !prev)}} />
            </>
          )}
          <TbPlayerTrackNextFilled className="text-base sm:text-2xl lg:text-3xl cursor-pointer" />
          {repeat ? (
            <>
              <BsRepeat onClick={() => {setRepeat((prev) => !prev)}} className="text-base sm:text-2xl lg:text-3xl cursor-pointer" />
            </>
          ) : (
            <>
              <BsRepeat1 onClick={() => {setRepeat((prev) => !prev)}} className="text-base sm:text-2xl lg:text-3xl cursor-pointer" />
            </>
          )}
        </div>
        <div className='load-progress flex justify-center items-center gap-2'>
          <p className="lg:text-base sm:text-sm text-[0.6rem]">00:00</p>
          <div className='progress-bar w-32 h-[0.16rem] sm:w-56 sm:h-[0.17rem] lg:w-72 lg:h-[0.2rem] bg-white rounded-full'></div>
          <p className="lg:text-base sm:text-sm text-[0.6rem]">03:00</p>
        </div>
      </div>
      <div className='speaker flex justify-center items-center gap-2'>
        <HiSpeakerWave className="sm:text-xl lg:text-2xl" />
        <div className='progress-bar w-12 h-[0.16rem] sm:w-24 sm:h-[0.17rem] lg:w-32 lg:h-[0.2rem] bg-white rounded-full'></div>
      </div>
    </div>
  );
}

export default AudioPlayerSection;
