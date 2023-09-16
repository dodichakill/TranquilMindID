"use client";
import { db } from "@app/firebase";
import {
  collection,
  query,
  onSnapshot,
  deleteDoc,
  doc,
} from "@firebase/firestore";
import { Button, Table } from "flowbite-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
// import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { toast } from "react-toastify";
import MSEdukasi from "./MSEdukasi";
import LoadingSpinner from "@components/LoadingSpinner";

export default function TableEdukasi() {
  const cols = [
    "No",
    "Judul Artikel",
    "Foto Artikel",
    "Deskripsi singkat",
    "Aksi",
  ];

  const [edukasi, setEdukasi] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "edukasi"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemArr = [];
      console.log(" querySnapshot : ", querySnapshot);

      querySnapshot.forEach((doc) => {
        console.log(doc);
        itemArr.push({ ...doc.data(), id: doc.id });
      });

      setEdukasi(itemArr);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "edukasi", id));
    toast.success("berhasil menghapus data artikel");
  };

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
            <Table.Cell>{row.deskripsi.slice(0, 55)}...</Table.Cell>
            <Table.Cell className="grid gap-2">
              <MSEdukasi data={row} />
              <Button
                className="flex gap-2 items-center bg-red-500"
                onClick={() => handleDelete(row.id)}
              >
                <FaTrash className="mr-2" /> <span>Hapus Data</span>
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ) : (
    <LoadingSpinner />
  );
}
