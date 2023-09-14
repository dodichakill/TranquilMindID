"use client";

import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Headline() {
  return (
    <div className="container min-h-screen my-20 flex flex-col md:flex-row items-center m-auto gap-2">
      <div className="w-full max-w-2xl">
        <h1 className="text-2xl md:text-5xl leading-tight mt-12 md:mt-5 mb-5 font-bold text-black">
          Temukan Ketenangan Mental & Jiwamu Bersama TranquilMind.id
        </h1>
        <p className="desc">
          Panduan dan dukungan untuk menjelajahi kedamaian dalam kesehatan
          mental dan Jiwamu melalui artikel, podcast, kiat praktis dan tenaga
          profesional. Transformasi menuju ketenangan batinmu dimulai di sini.
        </p>
        <div className="flex gap-4 z-0">
          <Link href="#tes" className="btn bg-primary text-white">
            Mulai Sekarang{" "}
          </Link>
          <Link
            href="/tentang"
            className="btn bg-white hover:bg-primary text-sm font-light text-primary hover:text-white flex items-center"
          >
            Kenali Kami
          </Link>
        </div>
      </div>
      <Image
        src="/assets/Homepage/hero.gif"
        width={320}
        height={320}
        alt="hero-tranquilmind.id"
        className="w-full max-w-xl h-auto"
      />
    </div>
  );
}
