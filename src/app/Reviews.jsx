"use client";

import CardPsikolog from "@components/CardPsikolog";
import CarouselReviews from "@components/CarouselReviews";
import { Button } from "flowbite-react";
import Image from "next/image";
import React from "react";

export default function Reviews() {
  return (
    <>
      <div className="flex h-[40rem]">
        <div className="flex-1 flex items-center justify-center rounded-br-xl bg-primary py-20">
          <div className="flex w-full flex-col gap-5">
            <CarouselReviews />
          </div>
        </div>
        <div className="flex-1 flex items-center py-20 rounded-xl bg-white">
          <div className="container_2">
            <h1 className="heading">
              Ulasan Pengguna <br /> Tentang TranquilMind.id
            </h1>
            <p className="desc">
              Ulasan dari berbagai kalangan pengguna yang merasa terbantu dengan
              adanya layanan kami di TranquilMind.id
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
