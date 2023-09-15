"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Table } from "flowbite-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

export default async function TableEdukasi() {
  const cols = [
    "No",
    "Judul Artikel",
    "Foto Artikel",
    "Deskripsi singkat",
    "Aksi",
  ];

  const supabase = createClientComponentClient();
  const [edukasi, setEdukasi] = useState([]);

  useEffect(() => {
    fetchEdukasi();

    const subscription = supabase
      .from("edukasi")
      .on("*", () => fetchEdukasi())
      .subscribe();

    return () => supabase.removeSubscription(subscription);
  }, []);

  async function fetchEdukasi() {
    const { data } = await supabase.from("edukasi").select();
    setEdukasi(data);
  }

  return edukasi ? (
    <Table striped>
      <Table.Head>
        {cols.map((col) => (
          <Table.HeadCell>{col}</Table.HeadCell>
        ))}
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {edukasi.map((row, i) => (
          <Table.Row
            key={row.id}
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            <Table.Cell>{i + 1}</Table.Cell>
            <Table.Cell>{row.title}</Table.Cell>
            <Table.Cell>
              <Image src={row.image} alt={row.title} width={100} height={100} />
            </Table.Cell>
            <Table.Cell>{row.description}</Table.Cell>
            <Table.Cell className="grid gap-2">
              <button className="font-medium bg-primary items-center px-3 py-2 text-white hover:underline rounded-lg flex gap-2">
                <AiFillEye className="mr-2" /> Lihat Konten
              </button>
              <button className="font-medium bg-yellow-400 items-center px-3 py-2 text-white hover:underline rounded-lg flex gap-2">
                <FaEdit className="mr-2" /> Ubah Data
              </button>
              <button className="font-medium bg-red-500 items-center px-3 py-2 text-white hover:underline rounded-lg flex gap-2">
                <FaTrash className="mr-2" /> Hapus Data
              </button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ) : (
    <LoadingSpinner />
  );
}
