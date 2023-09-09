"use client";

import { Alert, Button, Carousel } from "flowbite-react";
import Image from "next/image";
import React from "react";

export default function CarouselReviews({ data }) {
  return (
    <div className="container_2 px-5">
      <div className=" sm:h-[35rem]">
        <Carousel>
          <div className="p-5 w-96 shadow bg-white rounded-xl relative">
            <div className="flex flex-col items-center justify-center textcenter">
              <Image
                src="/assets/Homepage/user3.png"
                width={100}
                height={100}
                alt="user"
                className="rounded-full object-cover"
              />
              <h2 className="text-lg font-bold">Amelia</h2>
              <p className="text-base text-gray-400 font-medium">Mahasiswa</p>
              <p className="mt-2 desc">
                TranquilMind.id adalah tempat yang tepat untuk menemukan
                ketenangan mental dan jiwa. Mereka menyediakan panduan dan
                dukungan yang membantu menjelajahi kedamaian dalam kesehatan
                mental dan jiwa melalui artikel, podcast, kiat praktis, dan
                tenaga profesional. Dengan sumber daya yang disediakan oleh
                TranquilMind.id, Anda dapat memulai transformasi menuju
                ketenangan batin yang lebih baik.
              </p>
            </div>
          </div>
          <div className="p-5 w-96 shadow bg-white rounded-xl relative">
            <div className="flex flex-col items-center justify-center textcenter">
              <Image
                src="/assets/Homepage/user2.png"
                width={100}
                height={100}
                alt="user"
                className="rounded-full object-cover"
              />
              <h2 className="text-lg font-bold">John Smith</h2>
              <p className="text-base text-gray-400 font-medium">
                Web Developer
              </p>
              <p className="mt-2 desc">
                TranquilMind.id adalah tempat yang menyediakan panduan dan
                dukungan untuk menjelajahi kedamaian dalam kesehatan mental dan
                jiwa. Mereka menyediakan artikel, podcast, kiat praktis, dan
                tenaga profesional untuk membantu Anda dalam transformasi menuju
                ketenangan batin yang lebih baik. saya menyukainya
              </p>
            </div>
          </div>
          <div className="p-5 w-96 shadow bg-white rounded-xl relative">
            <div className="flex flex-col items-center justify-center textcenter">
              <Image
                src="/assets/Homepage/user1.png"
                width={100}
                height={100}
                alt="user"
                className="rounded-full object-cover"
              />
              <h2 className="text-lg font-bold">John Doe</h2>
              <p className="text-base text-gray-400 font-medium">Data Analis</p>
              <p className="mt-2 desc">
                TranquilMind.id memberikan panduan dan dukungan berharga dalam
                menjelajahi kedamaian dalam kesehatan mental dan jiwa. Mereka
                menyediakan artikel, podcast, dan kiat praktis yang dapat
                diterapkan dalam kehidupan sehari-hari. Tenaga profesional di
                TranquilMind.id siap membantu Anda dalam transformasi menuju
                ketenangan batin yang lebih baik. Dengan sumber daya yang mereka
                sediakan, Anda dapat meraih kesejahteraan mental yang lebih
                baik.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
