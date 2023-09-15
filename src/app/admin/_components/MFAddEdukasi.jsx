"use client";

import { useEffect, useState } from "react";
import ModalForm from "./ModalForm";
import InputText from "@components/InputText";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";

export default function MFAddEdukasi() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");
  const [content, setContent] = useState("");

  const roleForm = showModal === true;
  const handleSubmit = async () => {
    try {
      const supabase = createClientComponentClient();
      const { data, error } = await supabase
        .from("edukasi")
        .insert([
          {
            title,
            image: img,
            description: desc,
            content,
          },
        ])
        .select();
      setTitle("");
      setImg("");
      setDesc("");
      setContent("");
      setShowModal(false);
      revalidatePath("/admin");
    } catch (err) {
      console.log("problem cuy : ", err);
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
        title={"Deskripsi singkat"}
        key={2}
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <InputText
        type="rich"
        id={"content"}
        placeholder={"Tulis di sini ..."}
        title={"isi konten"}
        key={3}
        value={content}
        onChange={(e) => setContent(e)}
      />
    </ModalForm>
  );
}
