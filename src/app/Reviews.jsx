"use client";

import CarouselReviews from "@components/CarouselReviews";
import React from "react";

export default function Reviews() {
  return (
    <>
      {/* Desktop Version */}
      <div className="w-full hidden md:block">
        <div className="flex flex-col-reverse md:flex-row h-[41rem] mb-5">
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
                Ulasan dari berbagai kalangan pengguna yang merasa terbantu
                dengan adanya layanan kami di TranquilMind.id
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="w-full mt-16 md:hidden">
        <h1 className="heading text-center">
          Ulasan Pengguna Tentang TranquilMind.id
        </h1>
        <CarouselReviews />
      </div>
    </>
  );
}
