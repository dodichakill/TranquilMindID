"use client";

import CardPsikolog from "@components/CardPsikolog";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Headline() {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="flex h-[35rem] mt-32 mb-0">
        <div className="flex-1 flex items-center py-20 rounded-xl bg-white">
          <div className="container_2">
            <h1 className="heading">
              Rekomendasi <br /> Psikolog & Psikiater
            </h1>
            <p className="desc">
              Dapatkan informasi tentang rekomendasi psikolog dan psikiater
              terbaik yang dapat membantu anda lebih lanjut
            </p>
            <div className="w-full relative">
              <input
                type="text"
                placeholder="Cari berdasarkan nama atau jenis profesi di sini..."
                className="bg-white text-left border w-full relative border-slate-300 rounded-full px-5 py-3"
                onChange={({ target }) => setSearch(target.value)}
                value={search}
              />
              <FaSearch className="cursor-pointer absolute right-5 text-xl top-[0.8rem] text-slate-500" />
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center rounded-l-xl bg-primary py-20">
          <div className="flex flex-col gap-5">
            <CardPsikolog
              name="Novi Maulidita, M.PSI"
              type="Psikolog"
              image="/assets/Homepage/psikolog.png"
              place="RS Harapan Bersama"
            />
            <CardPsikolog
              name="dr. Aulia Fatmawati, Sp.KJ"
              type="Psikiater"
              image="/assets/Homepage/psikiater.png"
              place="RS Kardina Tegal"
            />
          </div>
        </div>
      </div>
    </>
  );
}
