"use client";

import { useState } from "react";
import CardPsikologLink from "./CardPsikologLink";

export default function ListProfesional() {
  const dataProfessional = [
    {
      id: 1,
      name: "Novi Maulidita, M.PSI",
      type: "Psikolog",
      image: "/assets/Homepage/psikolog.png",
      place: "RS Harapan Bersama",
    },
    {
      id: 2,
      name: "Novi Maulidita, M.PSI",
      type: "Psikiater",
      image: "/assets/Homepage/psikiater.png",
      place: "RS Kardinah Tegal",
    },
    {
      id: 3,
      name: "Novi Maulidita, M.PSI",
      type: "Psikolog",
      image: "/assets/Homepage/psikolog.png",
      place: "RS Putra Bahagia",
    },
    {
      id: 4,
      name: "Novi Maulidita, M.PSI",
      type: "Psikiater",
      image: "/assets/Homepage/psikiater.png",
      place: "RS Muhammadiyah Solo",
    },
    {
      id: 5,
      name: "Novi Maulidita, M.PSI",
      type: "Psikolog",
      image: "/assets/Homepage/psikolog.png",
      place: "RS Harapan Bersama",
    },
    {
      id: 6,
      name: "Novi Maulidita, M.PSI",
      type: "Psikiater",
      image: "/assets/Homepage/psikiater.png",
      place: "RS Muhammadiyah Solo",
    },
  ];
  return (
    <>
      <div className="w-full bg-primary rounded-t-[5rem] mt-24">
        <div className="container">
          <h1 className="heading text-center text-white mt-20">
            Psikolog dan Psikiater
          </h1>
          <div className="w-full flex flex-wrap gap-5 items-center justify-center mt-10">
            {dataProfessional.map((data) => (
              <CardPsikologLink
                id={data.id}
                name={data.name}
                type={data.type}
                image={data.image}
                place={data.place}
                key={data.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
