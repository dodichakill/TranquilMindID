"use client";

import { useEffect, useState } from "react";
import ModalForm from "./ModalForm";
import InputText from "@components/InputText";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@app/firebase";
import { toast } from "react-toastify";
export default function MFAddEdukasi() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");
  const [gejala, setGejala] = useState("");
  const [penyebab, setPenyebab] = useState("");
  const [penanganan, setPenanganan] = useState("");
  const [disabled, setDisabled] = useState(false);
  const roleForm = showModal === true;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        title !== "" &&
        img !== "" &&
        desc !== "" &&
        gejala !== "" &&
        penyebab !== "" &&
        penanganan !== ""
      ) {
        await addDoc(collection(db, "edukasi"), {
          title,
          image: img,
          deskripsi: desc,
          gejala,
          penyebab,
          penanganan,
        });

        toast.success("berhasil menambahkan data!");
        setTitle("");
        setImg("");
        setDesc("");
        setGejala("");
        setPenyebab("");
        setPenanganan("");
        setShowModal(false);
      }
    } catch (err) {
      console.log("problem cuy : ", err);
      toast.error("Gagal menambahkan data!");
    }
  };
  return (
    <ModalForm
      showRole={roleForm}
      onClose={() => setShowModal(false)}
      onBtnClick={() => setShowModal(true)}
      textBtn="Tambah Data"
      size="2xl"
      nameModal="Tambah Data Artikel Edukasi"
      onSubmit={handleSubmit}
    >
      <InputText
        id={"title"}
        placeholder={"misal: Overthinking ..."}
        title={"Judul Artikel"}
        key={1}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <InputText
        id={"foto"}
        placeholder={
          "misal: https://images.pexels.com/photos/id/pexels-photo-2085998.jpeg"
        }
        title={"Foto Artikel"}
        value={img}
        onChange={(e) => setImg(e.target.value)}
        key={4}
      />
      <InputText
        type="textarea"
        id={"desc"}
        placeholder={"misal: Overthinking adalah suatu keadan ketika .."}
        title={"Deskripsi"}
        key={2}
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <InputText
        type="textarea"
        id={"gejala"}
        placeholder={"Tulis di sini ..."}
        title={"gejala"}
        key={3}
        value={gejala}
        onChange={(e) => setGejala(e.target.value)}
      />
      <InputText
        type="textarea"
        id={"penyebab"}
        placeholder={"Tulis di sini ..."}
        title={"penyebab"}
        key={3}
        value={penyebab}
        onChange={(e) => setPenyebab(e.target.value)}
      />
      <InputText
        type="textarea"
        id={"penanganan"}
        placeholder={"Tulis di sini ..."}
        title={"penanganan"}
        key={3}
        value={penanganan}
        onChange={(e) => setPenanganan(e.target.value)}
      />
    </ModalForm>
  );
}
