"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ModalShow from "./ModalShow";

export default function MSEdukasi({ data }) {
  const [showModal, setShowModal] = useState(false);

  const roleForm = showModal === true;
  return (
    <ModalShow
      showRole={roleForm}
      onBtnClick={() => setShowModal(true)}
      onBtnClose={() => setShowModal(false)}
      textBtn="Lihat konten"
      size="2xl"
      nameModal="Preview Content"
    >
      <div className="w-full">
        <Image src={data.image} width={350} height={350} />
        <h2 className="sub_heading mt-5">{data.title}</h2>
        <p className="desc">{data.deskripsi}</p>
        <h2 className="sub_heading">Gejala</h2>
        <p className="desc">{data.gejala}</p>
        <h2 className="sub_heading">Penyebab</h2>
        <p className="desc">{data.penyebab}</p>
        <h2 className="sub_heading">Penanganan</h2>
        <p className="desc">{data.penanganan}</p>
      </div>
    </ModalShow>
  );
}
