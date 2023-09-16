"use client";
import { Accordion } from "flowbite-react";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MFAddEdukasi from "./_components/MFAddEdukasi";
import NavbarMobile from "./_components/NavbarMobile";
import NavbarDesktop from "./_components/NavbarDesktop";
import TableEdukasi from "./_components/TableEdukasi";
import MFAddProfesional from "./_components/MFAddProfesional";
import TableProfesional from "./_components/TableProfesional";
import { useRouter } from "next/navigation";

const MainContent = () => {
  return (
    <Accordion>
      {/* edukasi start*/}
      <Accordion.Panel>
        <Accordion.Title>Data Artikel Edukasi</Accordion.Title>
        <Accordion.Content>
          <MFAddEdukasi />
          <TableEdukasi />
        </Accordion.Content>
      </Accordion.Panel>
      {/* edukasi end*/}

      {/* rekomendasi start*/}
      <Accordion.Panel>
        <Accordion.Title>Tenaga Profesional</Accordion.Title>
        <Accordion.Content>
          <MFAddProfesional />
          <TableProfesional />
        </Accordion.Content>
      </Accordion.Panel>
      {/* edukasi end*/}
    </Accordion>
  );
};

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isLogin = window.localStorage.getItem("isAdminLoggedIn");
      if (!isLogin) {
        router.push("/login");
      }
    }
  });
  return (
    <>
      <NavbarMobile />
      <div className="contoh relative bg-slate-100 w-full h-screen flex overflow-auto">
        <NavbarDesktop titlePage="beranda" />

        {/* mainpanel start */}

        <div className="w-full px-5 py-2">
          {<ToastContainer />}
          <div className="w-full min-h-24 flex flex-col justify-center p-5 sm:p-10 bg-white mb-5 rounded-lg">
            <h1 className="text-2xl font-bold  text-slate-700">Halo, Admin!</h1>
            <p className="slate text-slate-500">
              Selamat datang di halaman Dashboard Admin TranquilMind.id
            </p>
          </div>
          <div className="p-5 bg-white overflow-auto">
            {/* main content start */}
            <MainContent />
            {/* main content end */}
          </div>
        </div>

        {/* mainpanel end */}
      </div>
    </>
  );
}
