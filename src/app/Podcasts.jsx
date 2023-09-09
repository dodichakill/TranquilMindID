"use client";

import { Button } from "flowbite-react";
import Image from "next/image";
import React from "react";

export default function Podcasts() {
  return (
    <div className="container m-auto mb-10">
      <h1 className="heading text-center">Kumpulan Podcast Kami</h1>
      <Button className="btn bg-primary flex m-auto text-white flex-1">
        Lebih banyak
      </Button>

      {/* cards start */}
      <div className="flex flex-col md:flex-row m-auto justify-center items-center gap-3 md:gap-0 md:justify-evenly mt-10 w-full">
        <div className="w-64 p-2 bg-primary/75 rounded-lg shadow cursor-pointer hover:scale-105 transition-all">
          <Image
            src="/assets/Homepage/p-psikologid.webp"
            alt="card"
            width={300}
            height={300}
            className="bg-white mb-5"
          />
          <div className="sub_heading text-center text-white">
            Podcast Psikologid
          </div>
        </div>
        <div className="w-64 p-2 bg-primary/75 rounded-lg shadow cursor-pointer hover:scale-105 transition-all">
          <Image
            src="/assets/Homepage/p-jedalangkah.webp"
            alt="card"
            width={300}
            height={300}
            className="bg-white mb-5"
          />
          <div className="sub_heading text-center text-white">
            Podcast Jeda Langkah
          </div>
        </div>
        <div className="w-64 p-2 bg-primary/75 rounded-lg shadow cursor-pointer hover:scale-105 transition-all">
          <Image
            src="/assets/Homepage/p-greatmind.webp"
            alt="card"
            width={300}
            height={300}
            className="bg-white mb-5"
          />
          <div className="sub_heading text-center text-white">
            Podcast GreatMind
          </div>
        </div>
      </div>
      {/* cards end */}
    </div>
  );
}
