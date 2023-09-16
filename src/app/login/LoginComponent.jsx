"use client";

import { useState } from "react";
import Image from "next/image";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import NavigationBar from "@components/NavigationBar";
import ButtonBackTop from "@components/ButtonBackTop";
import FooterSection from "@components/FooterSection";
import { initFirebase } from "@app/firebase";

export default function LoginComponent() {
  const [eyeClose, setEyeClose] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const app = initFirebase()
  // console.log(app);

  return (
    <>
      <NavigationBar active="" />
      <div className="flex justify-between mt-20 items-center px-8 min-h-screen relative">
        <div className="hero-login lg:inline-block hidden">
          <Image
            width={600}
            height={600}
            src="/assets/Login/Hero-Login.png"
            alt="hero-login"
            className="translate-y-8"
          />
        </div>
        <div className="main-form flex items-center flex-col mx-auto">
          <div className="head-form flex flex-col justify-center items-center gap-1 mb-3">
            <Image
              width={250}
              height={250}
              src="/assets/Logo/logo.png"
              alt="tranquil-icon"
            />
            <h1 className="text-lg font-medium">Sembuh Bersama TranquilMind</h1>
          </div>
          <form
            action="/auth/sign-in"
            method="post"
            className="flex flex-col justify-center items-center gap-4 w-[19.5rem]"
          >
            <div className="email-field">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="email"
                className="bg-white border relative border-slate-300 rounded-2xl px-10 py-2 text-center"
                required
                onChange={({ target }) => setEmail(target.value)}
                value={email}
              />
            </div>
            <div className="password-field w-fit relative">
              {eyeClose ? (
                <>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="bg-white border relative border-slate-300 rounded-2xl px-10 py-2 text-center"
                    required
                    onChange={({ target }) => setPassword(target.value)}
                    value={password}
                  />
                  <FaEye
                    onClick={() => setEyeClose((prev) => !prev)}
                    className="cursor-pointer absolute right-5 top-[0.8rem] text-slate-500"
                  />
                </>
              ) : (
                <>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="bg-white border relative border-slate-300 rounded-2xl px-10 py-2 text-center"
                    required
                    onChange={({ target }) => setPassword(target.value)}
                    value={password}
                  />
                  <FaEyeSlash
                    onClick={() => setEyeClose((prev) => !prev)}
                    className="cursor-pointer absolute right-5 top-[0.8rem] text-slate-500"
                  />
                </>
              )}
            </div>
            <button
              type="submit"
              className="text-white bg-primary disabled:bg-slate-400 disabled:cursor-not-allowed  rounded-full py-2 px-7 self-start"
            >
              Masuk
            </button>
          </form>
        </div>
        <div className="bubbles absolute -right-10 -top-10 w-24 h-24 bg-gradient-to-b from-[#128EF0] to-[#D9D9D9] rounded-full"></div>
        <div className="bubbles lg:visible invisible absolute -right-10 -bottom-10 w-24 h-24 bg-gradient-to-b from-[#128EF0] to-[#D9D9D9] rounded-full"></div>
        <div className="bubbles lg:invisible visible absolute -left-10 -bottom-10 w-24 h-24 bg-gradient-to-b from-[#128EF0] to-[#D9D9D9] rounded-full"></div>
      </div>
      <FooterSection />
      <ButtonBackTop />
    </>
  );
}
