"use client";

import { useEffect, useState } from "react";
import ModalForm from "./ModalForm";
import InputText from "@components/InputText";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@app/firebase";
import { toast } from "react-toastify";
export default function MFAddProfesional() {
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");
  const [placeWork, setPlaceWork] = useState("");
  const [typeJob, setTypeJob] = useState("");
  const [educations, setEducations] = useState("");
  const [experience, setExperience] = useState("");
  const [STR, setSTR] = useState("");
  const [nomorHP, setNomorHP] = useState("");
  const [vocher, setVocher] = useState("");
  const [maps, setMaps] = useState("");

  const roleForm = showModal === true;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        name !== "" &&
        typeJob !== "" &&
        img !== "" &&
        desc !== "" &&
        placeWork !== "" &&
        educations !== "" &&
        STR !== "" &&
        nomorHP !== "" &&
        vocher !== "" &&
        maps !== "" &&
        experience !== ""
      ) {
        await addDoc(collection(db, "profesional"), {
          name,
          typeJob,
          img,
          desc,
          placeWork,
          educations,
          STR,
          nomorHP,
          vocher,
          experience,
          maps,
        });

        toast.success("berhasil menambahkan data!");
        setName("");
        setTypeJob("");
        setImg("");
        setDesc("");
        setPlaceWork("");
        setEducations("");
        setSTR("");
        setNomorHP("");
        setVocher("");
        setExperience("");
        setMaps("");
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
      nameModal="Tambah Data Tenaga Profesional"
      onSubmit={handleSubmit}
    >
      <InputText
        id={"name"}
        placeholder={"misal: prof xyz ..."}
        title={"Nama"}
        key={1}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputText
        id={"typeJob"}
        placeholder={"misal: Psikologi ..."}
        title={"Jenis pekerjaan"}
        key={2}
        value={typeJob}
        onChange={(e) => setTypeJob(e.target.value)}
      />

      <InputText
        id={"img"}
        placeholder={
          "misal: https://images.pexels.com/photos/id/pexels-photo-2085998.jpeg"
        }
        title={"Foto"}
        value={img}
        onChange={(e) => setImg(e.target.value)}
        key={3}
      />
      <InputText
        type="textarea"
        id={"desc"}
        placeholder={
          "misal: Sepuh M.Psi, Psikiater adalah seorang Psikiater..."
        }
        title={"Deskripsi"}
        key={4}
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <InputText
        id={"placeWork"}
        placeholder={"RS xyz..."}
        title={"Tempat Kerja"}
        key={5}
        value={placeWork}
        onChange={(e) => setPlaceWork(e.target.value)}
      />

      <InputText
        type="textarea"
        id={"educations"}
        placeholder={"Tulis di sini ..."}
        title={"Pendidikan"}
        key={6}
        value={educations}
        onChange={(e) => setEducations(e.target.value)}
      />
      <InputText
        id={"STR"}
        placeholder={"Tulis di sini ..."}
        title={"Nomor STR"}
        key={7}
        value={STR}
        onChange={(e) => setSTR(e.target.value)}
      />
      <InputText
        id={"nomorHP"}
        placeholder={"Tulis di sini ..."}
        title={"nomor HP"}
        key={8}
        value={nomorHP}
        onChange={(e) => setNomorHP(e.target.value)}
      />
      <InputText
        id={"vocher"}
        placeholder={"Tulis di sini ..."}
        title={"kode vocher"}
        key={9}
        value={vocher}
        onChange={(e) => setVocher(e.target.value)}
      />

      <InputText
        type="textarea"
        id={"experience"}
        placeholder={"Tulis di sini ..."}
        title={"Pengalaman"}
        key={10}
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
      />
      <InputText
        id={"vocher"}
        placeholder={"Tulis di sini ..."}
        title={"Lokasi G-Maps"}
        key={11}
        value={maps}
        onChange={(e) => setMaps(e.target.value)}
      />
    </ModalForm>
  );
}
