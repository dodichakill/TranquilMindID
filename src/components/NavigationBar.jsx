"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { MdTimeline } from "react-icons/md";
import { VscBook } from "react-icons/vsc";
import { BiPodcast } from "react-icons/bi";
import { GoGitBranch } from "react-icons/go";

const NavigationBar = ({ active }) => {
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
        <div className="profile cursor-pointer">
          <Image
            className="rounded-full p-[0.2rem] ring-2 ring-gray-300"
            src="https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=600"
            width={40}
            height={40}
            alt="user-avatar"
          />
        </div>
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
