"use client";

import { Alert, Button, Carousel } from "flowbite-react";
import Image from "next/image";
import React from "react";

export default function CarouselBanner({ data }) {
  return (
    <div className="w-full bg-primary px-5">
      <div className="h-64 sm:h-[40rem]">
        <Carousel>
          {data.map((item) => (
            <div className="w-full max-w-[75rem] m-auto p-5 box-border flex">
              <div className="w-[40rem] text-white flex box-border flex-col justify-center">
                <h1 className="heading">{item.title}</h1>
                <p className="desc">
                  Merupakan perasaan sedih dan kehilangan minat yang berlangsung
                  dalam jangka waktu yang panjang, Merupakan perasaan sedih dan
                  kehilangan minat yang berlangsung dalam jangka waktu yang
                  panjang, Merupakan perasaan sedih.
                </p>
                <div className="">
                  <Button
                    // href={item.link}
                    className="btn_secondary bg-white text-black inline-block "
                  >
                    Selengkapnya
                  </Button>
                </div>
              </div>
              <div className="flex-1 flex justify-center items-center">
                <Image
                  width={300}
                  height={300}
                  className="object-cover"
                  alt="..."
                  src={item.image}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
