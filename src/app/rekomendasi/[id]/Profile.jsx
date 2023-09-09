"use client";

import Image from "next/image";
import { useState } from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaHospital, FaLocationDot, FaStethoscope } from "react-icons/fa6";
import { MdSchool } from "react-icons/md";

const Profile = async () => {
  const data = {
    id: 1,
    name: "Novi Maulidita, M.PSI",
    type: "Psikolog",
    image: "/assets/Homepage/psikolog.png",
    place: "RS Harapan Bersama",
  };
  return (
    <>
      <div className="w-[40rem] p-5 pb-4 bg-white rounded-t-xl border-2 border-slate-300">
        <div className="flex gap-5">
          <Image src={data.image} width={100} height={100} alt="psikolog" />
          <div className="w-full">
            <p className="text-xl leading-tight font-semibold">{data.name}</p>
            <p className="font-roboto font-semibold text-gray-400 mb-2 flex items-center gap-2">
              <FaStethoscope /> {data.type}
            </p>
            <hr />
            <p className="font-roboto font-semibold text-gray-400 mt-2 flex items-center gap-2">
              <FaHospital /> {data.place}
            </p>
          </div>
        </div>
        <p className="font-roboto w-full mt-4 mb-2 text-slate-500">
          Sepuh M.Psi, Psikiater adalah seorang Psikiater. Saat ini, beliau
          berpraktik di RS Edelweiss Bandung dan RSU Hermina Arcamanik. Beliau
          dapat membantu layanan Konsultasi psikologi.
        </p>
      </div>
      <div className="w-[40rem] p-5 flex items-center border-2 border-t-0 border-slate-300 gap-5">
        <MdSchool className="text-3xl box-content text-primary p-5 bg-slate-100 rounded-full" />
        <div className="">
          <h2 className="sub_heading">Riwayat Pendidikan</h2>
          <div className="desc text-slate-500">
            <p>◉ S2 Psikologi, Universitas Dipenogoro, 2019 </p>
            <p>◉ S1 Psikologi, Universitas Gajah Mada, 2015 </p>
          </div>
        </div>
      </div>
      <div className="w-[40rem] p-5 flex items-center border-2 border-t-0 border-slate-300 gap-5">
        <FaLocationDot className="text-3xl box-content text-primary p-5 bg-slate-100 rounded-full" />
        <div className="">
          <h2 className="sub_heading">Pengalaman Praktik</h2>
          <div className="desc text-slate-500">
            <p>◉ RS Kardinah Tegal, Jawa Tengah </p>
            <p>◉ Praktik Pribadi Semarang, Jawa Tengah </p>
          </div>
        </div>
      </div>
      <div className="w-[40rem] rounded-b-xl p-5 flex items-center border-2 border-t-0 border-slate-300 gap-5">
        <AiFillSafetyCertificate className="text-3xl box-content text-primary p-5 bg-slate-100 rounded-full" />
        <div className="">
          <h2 className="sub_heading">Nomor STR</h2>
          <div className="desc text-slate-500">
            <p>22 09 0 1 4 77-22090147</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
