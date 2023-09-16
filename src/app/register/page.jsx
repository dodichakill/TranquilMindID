"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import NavigationBar from "@components/NavigationBar";
import { redirect, useSearchParams } from "next/navigation";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import FooterSection from "@components/FooterSection";
import ButtonBackTop from "@components/ButtonBackTop";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [eyeClose, setEyeClose] = React.useState(true);
  const [eyeCloseConfirmPasswd, setEyeCloseConfirmPasswd] =
    React.useState(true);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPassswordConfirm] = React.useState("");

  const handleRegister = async () => {
    try {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          localStorage.setItem("user", JSON.stringify(user));
          console.log(localStorage.getItem("user"));
        }
      );

      toast.success("Berhasil mendaftar");
      redirect("/");
      // Update profil pengguna dengan nama
    } catch (error) {
      alert(error.message);
      toast.error("Gagal mendaftar, coba lagi!");
      console.log(error.message);
    }
  };

  return (
    <>
      <NavigationBar active="" />
      <div className="flex justify-between items-center mt-20 px-8 min-h-screen relative">
        <ToastContainer />
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
          <div className="flex flex-col justify-center items-center mt-4 gap-4 w-[19.5rem]">
            <div className="name-field">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nama"
                className="bg-white border relative border-slate-300 rounded-2xl px-10 py-2 text-center"
                onChange={({ target }) => setName(target.value)}
                value={name}
                required
              />
            </div>
            <div className="email-field">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="bg-white border relative border-slate-300 rounded-2xl px-10 py-2 text-center"
                onChange={({ target }) => setEmail(target.value)}
                value={email}
                required
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
                    onChange={({ target }) => setPassword(target.value)}
                    value={password}
                    required
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
                    onChange={({ target }) => setPassword(target.value)}
                    value={password}
                    required
                  />
                  <FaEyeSlash
                    onClick={() => setEyeClose((prev) => !prev)}
                    className="cursor-pointer absolute right-5 top-[0.8rem] text-slate-500"
                  />
                </>
              )}
            </div>
            <div className="password-confirm-field w-fit relative">
              {eyeCloseConfirmPasswd ? (
                <>
                  <input
                    type="password"
                    name="password-confirm"
                    id="password-confirm"
                    placeholder="Konfirmasi Password"
                    className={`${
                      passwordConfirm === password && password.length >= 5
                        ? "focus:ring-green-500 focus:border-green-500"
                        : passwordConfirm !== password && password.length >= 5
                        ? "focus:ring-red-500 focus:border-red-500"
                        : ""
                    } bg-white border relative border-slate-300 rounded-2xl px-10 py-2 text-center peer`}
                    onChange={({ target }) => setPassswordConfirm(target.value)}
                    value={passwordConfirm}
                    required
                  />
                  <FaEye
                    onClick={() => setEyeCloseConfirmPasswd((prev) => !prev)}
                    className="cursor-pointer absolute right-5 top-[0.8rem] text-slate-500"
                  />
                  {passwordConfirm === password && password.length >= 5 ? (
                    <>
                      <p className="peer-focus:block hidden text-xs text-green-500 mt-2">
                        password cocok
                      </p>
                    </>
                  ) : passwordConfirm !== password && password.length >= 5 ? (
                    <>
                      <p className="peer-focus:block hidden text-xs text-red-500 mt-2">
                        password tidak cocok
                      </p>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <>
                  <input
                    type="text"
                    name="password-confirm"
                    id="password-confirm"
                    placeholder="Konfirmasi Password"
                    className={`${
                      passwordConfirm === password && password.length >= 5
                        ? "focus:ring-green-500 focus:border-green-500"
                        : passwordConfirm !== password && password.length >= 5
                        ? "focus:ring-red-500 focus:border-red-500"
                        : ""
                    } bg-white border relative border-slate-300 rounded-2xl px-10 py-2 text-center peer`}
                    onChange={({ target }) => setPassswordConfirm(target.value)}
                    value={passwordConfirm}
                    required
                  />
                  <FaEyeSlash
                    onClick={() => setEyeCloseConfirmPasswd((prev) => !prev)}
                    className="cursor-pointer absolute right-5 top-[0.8rem] text-slate-500"
                  />
                  {passwordConfirm === password && password.length >= 5 ? (
                    <>
                      <p className="peer-focus:block hidden text-xs text-green-500 mt-2">
                        password cocok
                      </p>
                    </>
                  ) : passwordConfirm !== password && password.length >= 5 ? (
                    <>
                      <p className="peer-focus:block hidden text-xs text-red-500 mt-2">
                        password tidak cocok
                      </p>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </div>
            <button
              onClick={handleRegister}
              className="text-white bg-primary rounded-full py-2 px-7 self-start"
            >
              Daftar
            </button>
            <h3 className="self-start lg:text-base text-sm">
              Sudah punya akun?{" "}
              <Link href="/login" className="text-primary">
                Login
              </Link>
            </h3>
          </div>
        </div>
        <div className="hero-register lg:inline-block hidden">
          <Image
            width={600}
            height={600}
            src="/assets/Register/Hero-Register.png"
            alt="hero-register"
            className="translate-y-8"
          />
        </div>
        <div className="bubbles absolute -left-10 -top-10 w-24 h-24 bg-gradient-to-b from-[#128EF0] to-[#D9D9D9] rounded-full"></div>
        <div className="bubbles lg:visible invisible absolute -left-10 -bottom-10 w-24 h-24 bg-gradient-to-b from-[#128EF0] to-[#D9D9D9] rounded-full"></div>
        <div className="bubbles lg:invisible visible absolute -right-10 -bottom-10 w-24 h-24 bg-gradient-to-b from-[#128EF0] to-[#D9D9D9] rounded-full"></div>
      </div>
      <FooterSection />
      <ButtonBackTop />
    </>
  );
};

export default Register;
