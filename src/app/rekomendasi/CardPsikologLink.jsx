"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHospital, FaStethoscope } from "react-icons/fa6";

export default function CardPsikologLink({ id, name, type, image, place }) {
  return (
    <div className="flex justify-center">
      <Link
        href={`/rekomendasi/:${id}`}
        className="w-[30rem] p-6 hover:scale-110 transition-all bg-white rounded-xl shadow-lg"
      >
        <div className="flex gap-5">
          <Image src={image} width={100} height={100} alt="psikolog" />
          <div className="w-full">
            <p className="text-xl leading-tight font-semibold">{name}</p>
            <p className="font-roboto font-semibold text-gray-400 mb-2 flex items-center gap-2">
              <FaStethoscope /> {type}
            </p>
            <hr />
            <p className="font-roboto font-semibold text-gray-400 mt-2 flex items-center gap-2">
              <FaHospital /> {place}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
