"use client";

import { Button } from "flowbite-react";
import Image from "next/image";
import React from "react";

export default function Headline() {
  return (
    <div className="container min-h-screen my-16 flex items-center m-auto gap-2">
      <div className="w-full max-w-2xl">
        <h1 className="text-5xl leading-tight mb-5 font-bold text-black">
          Temukan Ketenangan Mental & Jiwamu Bersama TranquilMind.id
        </h1>
        <p className="desc">
          Panduan dan dukungan untuk menjelajahi kedamaian dalam kesehatan
          mental dan Jiwamu melalui artikel, podcast, kiat praktis dan tenaga
          profesional. Transformasi menuju ketenangan batinmu dimulai di sini.
        </p>
        <div className="flex gap-4 z-0">
          <Button className="btn bg-primary">Mulai Sekarang </Button>
          <Button className="btn bg-white text-primary hover:text-white">
            Kenali Kami
          </Button>
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
