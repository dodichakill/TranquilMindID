"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Login = () => {
  const [eyeClose, setEyeClose] = React.useState(true);

  return (
    <div className='flex justify-between items-center px-8 min-h-screen relative'>
      <div className='hero-login lg:inline-block hidden'>
        <Image
          width={600}
          height={600}
          src='/assets/Login/Hero-Login.png'
          alt='hero-login'
          className='translate-y-8'
        />
      </div>
      <div className='main-form flex items-center flex-col mx-auto'>
        <div className='head-form flex flex-col justify-center items-center gap-1 mb-3'>
          <Image
            width={250}
            height={250}
            src='/assets/Logo/logo.png'
            alt='tranquil-icon'
          />
          <h1 className='text-lg font-medium'>Sembuh Bersama TranquilMind</h1>
        </div>
        <form
          action='#'
          className='flex flex-col justify-center items-center gap-4'
        >
          <button className='flex justify-center items-center gap-3 bg-white border relative border-slate-300 rounded-2xl px-[4.5rem] py-2 lg:text-base text-[0.9rem]'>
            <FcGoogle className='absolute left-2 text-3xl' />
            Login dengan Google
          </button>
          <div className='or-line relative w-full'>
            <div className='bg-white px-3 absolute right-[50%] top-[50%] translate-x-[50%] -translate-y-[50%] text-sm'>
              Atau
            </div>
            <hr className='border border-slate-200 my-2' />
          </div>
          <div className='username-field'>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='Username'
              className='bg-white border relative border-slate-300 rounded-2xl px-10 py-2 text-center'
              required
            />
          </div>
          <div className='password-field w-fit relative'>
            {eyeClose ? (
              <>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                  className='bg-white border relative border-slate-300 rounded-2xl px-10 py-2 text-center'
                  required
                />
                <FaEye
                  onClick={() => setEyeClose((prev) => !prev)}
                  className='cursor-pointer absolute right-5 top-[0.8rem] text-slate-500'
                />
              </>
            ) : (
              <>
                <input
                  type='text'
                  name='password'
                  id='password'
                  placeholder='Password'
                  className='bg-white border relative border-slate-300 rounded-2xl px-10 py-2 text-center'
                  required
                />
                <FaEyeSlash
                  onClick={() => setEyeClose((prev) => !prev)}
                  className='cursor-pointer absolute right-5 top-[0.8rem] text-slate-500'
                />
              </>
            )}
          </div>
          <button
            type='submit'
            className='text-white bg-primary rounded-full py-2 px-7 self-start'
          >
            Masuk
          </button>
          <h3 className='self-start sm:text-base text-sm'>
            Belum punya akun?{" "}
            <Link href='/register' className='text-primary'>
              Buat akun
            </Link>
          </h3>
        </form>
      </div>
      <div className='bubbles absolute -right-10 -top-10 w-24 h-24 bg-gradient-to-b from-[#128EF0] to-[#D9D9D9] rounded-full'></div>
      <div className='bubbles lg:visible invisible absolute -right-10 -bottom-10 w-24 h-24 bg-gradient-to-b from-[#128EF0] to-[#D9D9D9] rounded-full'></div>
      <div className='bubbles lg:invisible visible absolute -left-10 -bottom-10 w-24 h-24 bg-gradient-to-b from-[#128EF0] to-[#D9D9D9] rounded-full'></div>
    </div>
  );
};

export default Login;
