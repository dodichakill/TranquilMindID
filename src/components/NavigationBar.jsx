"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { MdTimeline } from "react-icons/md";
import { VscBook } from "react-icons/vsc";
import { BiPodcast, BiUserCircle, BiExit } from "react-icons/bi";
import { GoGitBranch } from "react-icons/go";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillInfoCircleFill,
} from "react-icons/bs";
import { Dropdown } from "flowbite-react";
import { IoMdHeadset } from "react-icons/io";

const NavigationBar = ({ active, user }) => {
  const [pathname, setPathname] = React.useState("");
  const [music, setMusic] = React.useState({
    name: "relaxing",
    audio: "/assets/Audio/relaxing.mp3",
  });
  const [isMusicPlay, setIsMusicPlay] = React.useState(false);
  const [isProfileClick, setIsProfileClick] = React.useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const nowPathname = window.location.pathname;
    if (nowPathname === "/login" || nowPathname === "/register") {
      setPathname(nowPathname);
    }

    audioRef.current = new Audio(music.audio);

    audioRef.current.addEventListener("ended", () => {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener("ended", () => {});
        audioRef.current = null;
      }
    };
  }, [music]);

  const handleDropdownChange = (newMusic) => {
    setMusic(newMusic);
    setIsMusicPlay(false);
  };

  const handlePlayAudio = () => {
    audioRef.current.play();
    setIsMusicPlay(true);
  };

  const handlePauseAudio = () => {
    audioRef.current.pause();
    setIsMusicPlay(false);
  };

  return (
    <React.Fragment>
      {/* Desktop and Tablet Version */}
      <div className='flex justify-between items-center pr-5 py-1 sm:px-3 sm:py-2 sm:pr-12 lg:fixed top-0 left-0 w-full lg:bg-white/80 lg:backdrop-blur-md z-50'>
        <Link href='/' className='navbar-brand'>
          <Image
            src='/assets/Logo/logo.png'
            width={200}
            height={200}
            alt='logo-tranquilmind.id'
          />
        </Link>
        <div className='navbar-link hidden lg:flex justify-center items-center gap-4 text-primary'>
          <Link
            href='/'
            className={`flex justify-center items-center gap-3 transition duration-300 ease-in-out hover:text-white group hover:bg-primary focus:text-white group focus:bg-primary active:text-white group active:bg-primary rounded-full p-3 outline-none ${
              active === "beranda" ? "text-white group bg-primary " : ""
            }`}
          >
            <div
              className={`border-[3px] transition duration-100 ease-in-out border-primary rounded-full p-1 group-hover:border-white group-focus:border-white group-active:border-white ${
                active === "beranda" ? "border-white" : ""
              }`}
            >
              <AiOutlineHome className='text-xl' />
            </div>
            Beranda
          </Link>
          <Link
            href='/linimasa'
            className={`flex justify-center items-center gap-3 transition duration-300 ease-in-out hover:text-white group hover:bg-primary focus:text-white group focus:bg-primary active:text-white group active:bg-primary rounded-full p-3 outline-none ${
              active === "linimasa" ? "text-white group bg-primary " : ""
            }`}
          >
            <div
              className={`border-[3px] transition duration-100 ease-in-out border-primary rounded-full p-1 group-hover:border-white group-focus:border-white group-active:border-white ${
                active === "linimasa" ? "border-white" : ""
              }`}
            >
              <MdTimeline className='text-xl' />
            </div>
            Linimasa
          </Link>
          <Link
            href='/rekomendasi'
            className={`flex justify-center items-center gap-3 transition duration-300 ease-in-out hover:text-white group hover:bg-primary focus:text-white group focus:bg-primary active:text-white group active:bg-primary rounded-full p-3 outline-none ${
              active === "rekomendasi" ? "text-white group bg-primary " : ""
            }`}
          >
            <div
              className={`border-[3px] transition duration-100 ease-in-out border-primary rounded-full p-1 group-hover:border-white group-focus:border-white group-active:border-white ${
                active === "rekomendasi" ? "border-white" : ""
              }`}
            >
              <GoGitBranch className='text-xl' />
            </div>
            Rekomendasi
          </Link>
          <Link
            href='/edukasi'
            className={`flex justify-center items-center gap-3 transition duration-300 ease-in-out hover:text-white group hover:bg-primary focus:text-white group focus:bg-primary active:text-white group active:bg-primary rounded-full p-3 outline-none ${
              active === "edukasi" ? "text-white group bg-primary " : ""
            }`}
          >
            <div
              className={`border-[3px] transition duration-100 ease-in-out border-primary rounded-full p-1 group-hover:border-white group-focus:border-white group-active:border-white ${
                active === "edukasi" ? "border-white" : ""
              }`}
            >
              <VscBook className='text-xl' />
            </div>
            Edukasi
          </Link>
          <Link
            href='/podcast'
            className={`flex justify-center items-center gap-3 transition duration-300 ease-in-out hover:text-white group hover:bg-primary focus:text-white group focus:bg-primary active:text-white group active:bg-primary rounded-full p-3 outline-none ${
              active === "podcast" ? "text-white group bg-primary " : ""
            }`}
          >
            <div
              className={`border-[3px] transition duration-100 ease-in-out border-primary rounded-full p-1 group-hover:border-white group-focus:border-white group-active:border-white ${
                active === "podcast" ? "border-white" : ""
              }`}
            >
              <BiPodcast className='text-xl' />
            </div>
            Podcast
          </Link>
        </div>
        <div className={`profile  ${isProfileClick ? "relative" : ""}`}>
          {isProfileClick ? (
            <>
              <div
                className={`card rounded-xl shadow-lg  w-[15rem] bg-primary text-white absolute -right-5 -top-5`}
              >
                <div className='p-5 flex items-center gap-2'>
                  <div className='flex-1'>
                    <p>Tenangkan Pikiran</p>
                  </div>
                  <div className=''>
                    <IoMdHeadset
                      className='text-xl h-10 w-10 cursor-pointer shadow-lg'
                      onClick={() => setIsProfileClick(!isProfileClick)}
                    />
                  </div>
                </div>
                <div className='w-full'>
                  <hr />
                  <div className='p-5 gap-2 flex flex-col overflow-auto w-full'>
                    <div className='w-full h-20 relative rounded-xl  p-2'>
                      <Image
                        src='https://images.pexels.com/photos/2085998/pexels-photo-2085998.jpeg?auto=compress&cs=tinysrgb&w=1600'
                        width={80}
                        height={160}
                        className='w-full h-full object-cover rounded-xl flex-1 shrink-0'
                      />
                      <div className='absolute bottom-0 left-0 w-full bg-gradient-to-b h-full rounded-xl from-[#01086654] to-[#01010e54] p-5 flex items-center justify-between'>
                        <p className='text-xl'>{music.name}</p>
                        {isMusicPlay ? (
                          <BsFillPauseCircleFill
                            className='h-10 w-10 cursor-pointer'
                            onClick={() => {
                              setIsMusicPlay(!isMusicPlay);
                              handlePauseAudio();
                            }}
                          />
                        ) : (
                          <BsFillPlayCircleFill
                            className='h-10 w-10 cursor-pointer'
                            onClick={() => {
                              setIsMusicPlay(!isMusicPlay);
                              handlePlayAudio();
                            }}
                          />
                        )}
                      </div>
                    </div>
                    <Dropdown label='Pilih Latar Musik'>
                      <Dropdown.Item
                        onClick={() =>
                          handleDropdownChange({
                            name: "Forest",
                            audio: "/assets/Audio/forest-lullaby.mp3",
                          })
                        }
                      >
                        Forest
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() =>
                          handleDropdownChange({
                            name: "Relaxing",
                            audio: "assets/Audio/relaxing.mp3",
                          })
                        }
                      >
                        Relaxing
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() =>
                          handleDropdownChange({
                            name: "Rain",
                            audio: "/assets/Audio/sleepy-rain.mp3",
                          })
                        }
                      >
                        Rain
                      </Dropdown.Item>
                    </Dropdown>
                  </div>

                  <hr />
                </div>
                <div className='p-5 flex flex-col gap-4'>
                  <Link href='/tentang'>
                    <BsFillInfoCircleFill className='h-5 inline w-5 mr-2' />{" "}
                    Tentang Kami
                  </Link>
                </div>
              </div>
              <BiUserCircle
                className='rounded-full p-[0.2rem] ring-2 ring-gray-300 h-10 w-10'
                onClick={() => setIsProfileClick(!isProfileClick)}
              />
            </>
          ) : (
            <IoMdHeadset
              className='rounded-full p-[0.2rem] cursor-pointer ring-2 ring-gray-300 h-10 w-10 text-primary'
              width={40}
              height={40}
              onClick={() => setIsProfileClick(!isProfileClick)}
            />
          )}
        </div>
      </div>

      {/* Mobile Version */}
      <div className='visible lg:invisible fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 text-primary'>
        <div className='grid h-full max-w-lg gap-0 sm:gap-8 grid-cols-5 mx-auto font-medium'>
          <Link
            href='/'
            className='inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group'
          >
            <AiOutlineHome className='text-2xl sm:text-3xl' />
            <span className='text-[10px] sm:text-sm group-hover:text-blue-600 dark:group-hover:text-blue-500'>
              Beranda
            </span>
          </Link>
          <Link
            href='/linimasa'
            className='inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group'
          >
            <MdTimeline className='text-2xl sm:text-3xl' />
            <span className='text-[10px] sm:text-sm group-hover:text-blue-600 dark:group-hover:text-blue-500'>
              Linimasa
            </span>
          </Link>
          <Link
            href='/rekomendasi'
            className='inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group'
          >
            <GoGitBranch className='text-2xl sm:text-3xl' />
            <span className='text-[10px] sm:text-sm group-hover:text-blue-600 dark:group-hover:text-blue-500'>
              Rekomendasi
            </span>
          </Link>
          <Link
            href='/edukasi'
            className='inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group'
          >
            <VscBook className='text-2xl sm:text-3xl' />
            <span className='text-[10px] sm:text-sm group-hover:text-blue-600 dark:group-hover:text-blue-500'>
              Edukasi
            </span>
          </Link>
          <Link
            href='/podcast'
            className='inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group'
          >
            <BiPodcast className='text-2xl sm:text-3xl' />
            <span className='text-[10px] sm:text-sm group-hover:text-blue-600 dark:group-hover:text-blue-500'>
              Podcast
            </span>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavigationBar;
