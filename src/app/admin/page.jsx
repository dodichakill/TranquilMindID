"use client";
import { Accordion } from "flowbite-react";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MFAddEdukasi from "./_components/MFAddEdukasi";
import NavbarMobile from "./_components/NavbarMobile";
import NavbarDesktop from "./_components/NavbarDesktop";
import TableEdukasi from "./_components/TableEdukasi";

const MainContent = () => {
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Data Artikel Edukasi</Accordion.Title>
        <Accordion.Content>
          <MFAddEdukasi />
          <TableEdukasi />
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default function Dashboard() {
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
