"use client";

import React, { useEffect } from "react";
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

const NavigationBar = ({ active, user }) => {
  const [pathname, setPathname] = React.useState("");
  const [music, setMusic] = React.useState({ name: "Hutan", audio: "" });
  const [isMusicPlay, setIsMusicPlay] = React.useState(false);
  const [isProfileClick, setIsProfileClick] = React.useState(false);

  useEffect(() => {
    const nowPathname = window.location.pathname;
    if (nowPathname === "/login" || nowPathname === "/register") {
      setPathname(nowPathname);
    }
  }, []);

  const userAuth = user || null;

  return (
    <React.Fragment>
      {/* Desktop and Tablet Version */}
      <div className="flex justify-between items-center pr-5 py-1 sm:px-3 sm:py-2 sm:pr-12 lg:fixed top-0 left-0 w-full lg:bg-white/80 lg:backdrop-blur-md z-50">
        <Link href="/" className="navbar-brand">
          <Image
            src="/assets/Logo/logo.png"
            width={200}
            height={200}
            alt="logo-tranquilmind.id"
          />
        </Link>
        <div className="navbar-link hidden lg:flex justify-center items-center gap-4 text-primary">
          <Link
            href="/"
            className={`flex justify-center items-center gap-3 transition duration-300 ease-in-out hover:text-white group hover:bg-primary focus:text-white group focus:bg-primary active:text-white group active:bg-primary rounded-full p-3 outline-none ${
              active === "beranda" ? "text-white group bg-primary " : ""
            }`}
          >
            <div
              className={`border-[3px] transition duration-100 ease-in-out border-primary rounded-full p-1 group-hover:border-white group-focus:border-white group-active:border-white ${
                active === "beranda" ? "border-white" : ""
              }`}
            >
              <AiOutlineHome className="text-xl" />
            </div>
            Beranda
          </Link>
          <Link
            href="/linimasa"
            className={`flex justify-center items-center gap-3 transition duration-300 ease-in-out hover:text-white group hover:bg-primary focus:text-white group focus:bg-primary active:text-white group active:bg-primary rounded-full p-3 outline-none ${
              active === "linimasa" ? "text-white group bg-primary " : ""
            }`}
          >
            <div
              className={`border-[3px] transition duration-100 ease-in-out border-primary rounded-full p-1 group-hover:border-white group-focus:border-white group-active:border-white ${
                active === "linimasa" ? "border-white" : ""
              }`}
            >
              <MdTimeline className="text-xl" />
            </div>
            Linimasa
          </Link>
          <Link
            href="/rekomendasi"
            className={`flex justify-center items-center gap-3 transition duration-300 ease-in-out hover:text-white group hover:bg-primary focus:text-white group focus:bg-primary active:text-white group active:bg-primary rounded-full p-3 outline-none ${
              active === "rekomendasi" ? "text-white group bg-primary " : ""
            }`}
          >
            <div
              className={`border-[3px] transition duration-100 ease-in-out border-primary rounded-full p-1 group-hover:border-white group-focus:border-white group-active:border-white ${
                active === "rekomendasi" ? "border-white" : ""
              }`}
            >
              <GoGitBranch className="text-xl" />
            </div>
            Rekomendasi
          </Link>
          <Link
            href="/edukasi"
            className={`flex justify-center items-center gap-3 transition duration-300 ease-in-out hover:text-white group hover:bg-primary focus:text-white group focus:bg-primary active:text-white group active:bg-primary rounded-full p-3 outline-none ${
              active === "edukasi" ? "text-white group bg-primary " : ""
            }`}
          >
            <div
              className={`border-[3px] transition duration-100 ease-in-out border-primary rounded-full p-1 group-hover:border-white group-focus:border-white group-active:border-white ${
                active === "edukasi" ? "border-white" : ""
              }`}
            >
              <VscBook className="text-xl" />
            </div>
            Edukasi
          </Link>
          <Link
            href="/podcast"
            className={`flex justify-center items-center gap-3 transition duration-300 ease-in-out hover:text-white group hover:bg-primary focus:text-white group focus:bg-primary active:text-white group active:bg-primary rounded-full p-3 outline-none ${
              active === "podcast" ? "text-white group bg-primary " : ""
            }`}
          >
            <div
              className={`border-[3px] transition duration-100 ease-in-out border-primary rounded-full p-1 group-hover:border-white group-focus:border-white group-active:border-white ${
                active === "podcast" ? "border-white" : ""
              }`}
            >
              <BiPodcast className="text-xl" />
            </div>
            Podcast
          </Link>
        </div>
        {userAuth ? (
          <div className={`profile  ${isProfileClick ? "relative" : ""}`}>
            {isProfileClick ? (
              <>
                <div
                  className={`card rounded-xl shadow-lg  bg-primary text-white absolute -right-5 -top-5`}
                >
                  <div className="p-5 flex items-center gap-2">
                    <div className="flex-1">
                      <p>{userAuth.email}</p>
                    </div>
                    <div className="flex-1">
                      <BiUserCircle
                        className="text-xl h-10 w-10 cursor-pointer"
                        onClick={() => setIsProfileClick(!isProfileClick)}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <hr />
                    <div className="p-5 gap-2 flex flex-col overflow-auto w-full">
                      <div className="w-full h-20 relative rounded-xl  p-2">
                        <Image
                          src="https://images.pexels.com/photos/2085998/pexels-photo-2085998.jpeg?auto=compress&cs=tinysrgb&w=1600"
                          width={80}
                          height={160}
                          className="w-full h-full object-cover rounded-xl flex-1 shrink-0"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b h-full rounded-xl from-[#01086654] to-[#01010e54] p-5 flex items-center justify-between">
                          <p className="text-xl">{music.name}</p>
                          {isMusicPlay ? (
                            <BsFillPauseCircleFill
                              className="h-10 w-10 cursor-pointer"
                              onClick={() => setIsMusicPlay(!isMusicPlay)}
                            />
                          ) : (
                            <BsFillPlayCircleFill
                              className="h-10 w-10 cursor-pointer"
                              onClick={() => setIsMusicPlay(!isMusicPlay)}
                            />
                          )}
                        </div>
                      </div>
                      <Dropdown label="Pilih Latar Musik">
                        <Dropdown.Item
                          onClick={() => setMusic({ name: "Hutan", audio: "" })}
                        >
                          Hutan
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() =>
                            setMusic({ name: "Air Terjun", audio: "" })
                          }
                        >
                          Air Terjun
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => setMusic({ name: "Hujan", audio: "" })}
                        >
                          Hujan
                        </Dropdown.Item>
                      </Dropdown>
                    </div>

                    <hr />
                  </div>
                  <div className="p-5 flex flex-col gap-4">
                    <Link href="/tentangkami">
                      <BsFillInfoCircleFill className="h-5 inline w-5 mr-2" />{" "}
                      Tentang Kami
                    </Link>
                    <form
                      action="/auth/sign-out"
                      method="post"
                      className="cursor-pointer"
                    >
                      <button type="submit">
                        <BiExit className="h-5 inline w-5 mr-2" /> Keluar Akun
                      </button>
                    </form>
                  </div>
                </div>
                <BiUserCircle
                  className="rounded-full p-[0.2rem] ring-2 ring-gray-300 h-10 w-10"
                  onClick={() => setIsProfileClick(!isProfileClick)}
                />
              </>
            ) : (
              <BiUserCircle
                className="rounded-full p-[0.2rem] cursor-pointer ring-2 ring-gray-300 h-10 w-10"
                width={40}
                height={40}
                onClick={() => setIsProfileClick(!isProfileClick)}
              />
            )}
          </div>
        ) : pathname === "/login" || pathname === "/register" ? (
          <p style={{ visibility: "hidden" }}>oke</p>
        ) : (
          <Link href="/login" className="btn bg-black text-white">
            Masuk / Daftar
          </Link>
        )}
      </div>

      {/* Mobile Version */}
      <div className="visible lg:invisible fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 text-primary">
        <div className="grid h-full max-w-lg gap-0 sm:gap-8 grid-cols-5 mx-auto font-medium">
          <Link
            href="/"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"
          >
            <AiOutlineHome className="text-2xl sm:text-3xl" />
            <span className="text-[10px] sm:text-sm group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Beranda
            </span>
          </Link>
          <Link
            href="/linimasa"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"
          >
            <MdTimeline className="text-2xl sm:text-3xl" />
            <span className="text-[10px] sm:text-sm group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Linimasa
            </span>
          </Link>
          <Link
            href="/rekomendasi"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"
          >
            <GoGitBranch className="text-2xl sm:text-3xl" />
            <span className="text-[10px] sm:text-sm group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Rekomendasi
            </span>
          </Link>
          <Link
            href="/edukasi"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"
          >
            <VscBook className="text-2xl sm:text-3xl" />
            <span className="text-[10px] sm:text-sm group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Edukasi
            </span>
          </Link>
          <Link
            href="/podcast"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"
          >
            <BiPodcast className="text-2xl sm:text-3xl" />
            <span className="text-[10px] sm:text-sm group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Podcast
            </span>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavigationBar;
