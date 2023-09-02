"use client";

import React from "react";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

const FooterSection = () => {
  return (
    <div className='w-full h-fit mb-[4rem] lg:mb-0'>
      <div className='body-footer gap-8 sm:gap-6 lg:gap-0 grid sm:grid-cols-2 lg:grid-cols-4 place-items-start py-9 px-7 sm:pl-10 pr-10 bg-black text-white'>
        <Image
          width={250}
          height={250}
          alt='logo-tranquil'
          src='/assets/Logo/logo-footer.png'
          className="-translate-y-6 lg:-translate-x-0 -translate-x-6"
        />
        <div className='field flex flex-col items-start justify-center gap-3'>
          <h1 className='text-xl font-bold'>Sosmed Kami</h1>
          <p className='tracking-wider flex justify-center items-center gap-3'>
            <GrInstagram className='cursor-pointer text-2xl text-rose-500' />{" "}
            TranquilMind.id
          </p>
          <p className='tracking-wider flex justify-center items-center gap-3'>
            <ImFacebook className='cursor-pointer text-2xl text-blue-500' />{" "}
            TranquilMind.id
          </p>
          <p className='tracking-wider flex justify-center items-center gap-3'>
            <BsYoutube className='cursor-pointer text-2xl text-red-500' />{" "}
            TranquilMind.id
          </p>
          <p className='tracking-wider flex justify-center items-center gap-3'>
            <FaTwitter className='cursor-pointer text-2xl text-cyan-500' />{" "}
            TranquilMind.id
          </p>
        </div>
        <div className='field flex flex-col items-start justify-center gap-3'>
          <h1 className='text-xl font-bold'>Kontak Kami</h1>
          <p className='flex justify-center items-center tracking-wider gap-3'>
            <FaPhoneAlt className='text-2xl text-slate-300' /> 08123456789
          </p>
          <p className='flex justify-center items-center tracking-wider gap-2'>
            <IoMdMail className='text-3xl text-slate-300' />{" "}
            tranquilmind.id@gmail.com
          </p>
        </div>
        <div className='field flex flex-col items-start justify-center gap-3'>
          <h1 className='text-xl font-bold'>Alamat Kami</h1>
          <p className='flex justify-center items-center gap-3 text-md'>
            <FaMapMarkerAlt className='text-4xl text-slate-300' /> Jalan Mataram No
            9, Pesurungan Lor, Kota Tegal, Jawa Tengah
          </p>
        </div>
      </div>
      <div className='copyright-footer flex justify-center items-center gap-2 text-center text-xs sm:text-md py-3 sm:py-4 bg-[#E3E3E3]'>
        <FaRegCopyright className="text-xl" />
        <p>
          2023 by <span className='font-bold'>Tech Titans</span> - Web Dev IEC
          2023
        </p>
      </div>
    </div>
  );
};

export default FooterSection;
