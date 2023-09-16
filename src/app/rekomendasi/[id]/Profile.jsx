"use client";

import Image from "next/image";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaHospital, FaLocationDot, FaStethoscope } from "react-icons/fa6";
import { MdSchool } from "react-icons/md";

const Profile = async ({
  image,
  name,
  desc,
  placeWork,
  typeJob,
  educations,
  experience,
  STR,
  voucher,
  nomorHP,
}) => {
  const data = {
    id: 1,
    name: "Novi Maulidita, M.PSI",
    type: "Psikolog",
    image: "/assets/Homepage/psikolog.png",
    place: "RS Harapan Bersama",
  };
  return (
    <>
      <div className="w-full md:w-[40rem] p-5 pb-4 bg-white rounded-t-xl border-2 border-slate-300">
        <div className="flex gap-5">
          <Image
            src={image}
            width={100}
            height={100}
            alt="psikolog"
            className="object-cover w-20 h-20 rounded-full"
          />
          <div className="w-full">
            <p className="text-xl leading-tight font-semibold">{name}</p>
            <p className="font-roboto font-semibold text-gray-400 mb-2 flex items-center gap-2">
              <FaStethoscope /> {typeJob}
            </p>
            <hr />
            <p className="font-roboto font-semibold text-gray-400 mt-2 flex items-center gap-2">
              <FaHospital /> {placeWork}
            </p>
          </div>
        </div>
        <p className="font-roboto w-full mt-4 mb-2 text-slate-500">{desc}</p>
      </div>
      <div className="w-full md:w-[40rem] p-5 flex items-center border-2 border-t-0 border-slate-300 gap-5">
        <MdSchool className="text-3xl box-content text-primary p-5 bg-slate-100 rounded-full" />
        <div className="">
          <h2 className="sub_heading">Riwayat Pendidikan</h2>
          <div className="desc text-slate-500">
            <p>◉ {educations} </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[40rem] p-5 flex items-center border-2 border-t-0 border-slate-300 gap-5">
        <FaLocationDot className="text-3xl box-content text-primary p-5 bg-slate-100 rounded-full" />
        <div className="">
          <h2 className="sub_heading">Pengalaman Kerja</h2>
          <div className="desc text-slate-500">
            <p>◉ {experience} </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[40rem] rounded-b-xl p-5 flex items-center border-2 border-t-0 border-slate-300 gap-5">
        <AiFillSafetyCertificate className="text-3xl box-content text-primary p-5 bg-slate-100 rounded-full" />
        <div className="">
          <h2 className="sub_heading">Nomor STR</h2>
          <div className="desc text-slate-500">
            <p>{STR}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
