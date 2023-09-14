"use client";

import { Accordion, Navbar, Table } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { AiFillEye, AiOutlineHome } from "react-icons/ai";
import { FaRightFromBracket } from "react-icons/fa6";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import MFAddEdukasi from "./_components/MFAddEdukasi";
import { BiSolidDashboard } from "react-icons/bi";
import { MdPreview } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

const navLogo = "/assets/Logo/logo-footer.png";
const icLogo = "/assets/Logo/icLogo.png";

// const MyTable = ({cols, rows, data}) => {
//   return (
//     <Table striped>
//       <Table.Head>
//         <Table.HeadCell>Product name</Table.HeadCell>
//         <Table.HeadCell>Color</Table.HeadCell>
//         <Table.HeadCell>Category</Table.HeadCell>
//         <Table.HeadCell>Price</Table.HeadCell>
//         <Table.HeadCell>
//           <span className="sr-only">Edit</span>
//         </Table.HeadCell>
//       </Table.Head>
//       <Table.Body className="divide-y">
//         <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//           <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
//             Apple MacBook Pro 17"
//           </Table.Cell>
//           <Table.Cell>Sliver</Table.Cell>
//           <Table.Cell>Laptop</Table.Cell>
//           <Table.Cell>$2999</Table.Cell>
//           <Table.Cell>
//             <a
//               className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
//               href="/tables"
//             >
//               <p>Edit</p>
//             </a>
//           </Table.Cell>
//         </Table.Row>
//         <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//           <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
//             <p>Microsoft Surface Pro</p>
//           </Table.Cell>
//           <Table.Cell>White</Table.Cell>
//           <Table.Cell>Laptop PC</Table.Cell>
//           <Table.Cell>$1999</Table.Cell>
//           <Table.Cell>
//             <a
//               className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
//               href="/tables"
//             >
//               <p>Edit</p>
//             </a>
//           </Table.Cell>
//         </Table.Row>
//         <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//           <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
//             Magic Mouse 2
//           </Table.Cell>
//           <Table.Cell>Black</Table.Cell>
//           <Table.Cell>Accessories</Table.Cell>
//           <Table.Cell>$99</Table.Cell>
//           <Table.Cell>
//             <a
//               className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
//               href="/tables"
//             >
//               <p>Edit</p>
//             </a>
//           </Table.Cell>
//         </Table.Row>
//         <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//           <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
//             <p>Google Pixel Phone</p>
//           </Table.Cell>
//           <Table.Cell>Gray</Table.Cell>
//           <Table.Cell>Phone</Table.Cell>
//           <Table.Cell>$799</Table.Cell>
//           <Table.Cell>
//             <a
//               className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
//               href="/tables"
//             >
//               <p>Edit</p>
//             </a>
//           </Table.Cell>
//         </Table.Row>
//         <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//           <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
//             Apple Watch 5
//           </Table.Cell>
//           <Table.Cell>Red</Table.Cell>
//           <Table.Cell>Wearables</Table.Cell>
//           <Table.Cell>$999</Table.Cell>
//           <Table.Cell>
//             <a
//               className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
//               href="/tables"
//             >
//               <p>Edit</p>
//             </a>
//           </Table.Cell>
//         </Table.Row>
//       </Table.Body>
//     </Table>
//   );
// };
const MyTable = () => {
  const cols = [
    "No",
    "Judul Artikel",
    "Foto Artikel",
    "Deskripsi singkat",
    "Aksi",
  ];
  const rows = [
    {
      id: 1,
      title: "Depresi",
      image:
        "https://images.pexels.com/photos/2085998/pexels-photo-2085998.jpeg?auto=compress&cs=tinysrgb&w=100",
      description: "ini contoh deskripsi yagesya...",
      content:
        "ini contoh content yagesya... ini contoh content yagesya... ini contoh content yagesya... ini contoh content yagesya...",
    },
    {
      id: 2,
      title: "Anxiety",
      image:
        "https://images.pexels.com/photos/2085998/pexels-photo-2085998.jpeg?auto=compress&cs=tinysrgb&w=100",
      description: "ini contoh deskripsi yagesya...",
      content:
        "ini contoh content yagesya... ini contoh content yagesya... ini contoh content yagesya... ini contoh content yagesya...",
    },
    {
      id: 3,
      title: "Skyzofrenia",
      image:
        "https://images.pexels.com/photos/2085998/pexels-photo-2085998.jpeg?auto=compress&cs=tinysrgb&w=100",
      description: "ini contoh deskripsi yagesya...",
      content:
        "ini contoh content yagesya... ini contoh content yagesya... ini contoh content yagesya... ini contoh content yagesya...",
    },
  ];

  return (
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
        {rows.map((row, i) => (
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
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
                <AiFillEye className="mr-2" /> Ubah Data
              </button>
              <button className="font-medium bg-red-500 items-center px-3 py-2 text-white hover:underline rounded-lg flex gap-2">
                <FaTrash className="mr-2" /> Hapus Data
              </button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
const NavbarMobile = () => {
  return (
    <div className="navbar sm:hidden bg-white sticky z-50 top-0">
      <Navbar fluid rounded>
        <Navbar.Brand>
          <Image
            width={100}
            height={100}
            alt="Flowbite React Logo"
            className="mr-3 h-6 w-8 sm:h-9"
            src={icLogo}
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            TranquilMind.id
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link active href="#">
            <p>Beranda</p>
          </Navbar.Link>
          <Navbar.Link>
            <p>Logout</p>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
const NavbarDesktop = ({ titlePage }) => {
  return (
    <div className="hidden nav-left w-72 bg-blue-600 h-full sm:block sticky top-0">
      <Image
        width={200}
        height={200}
        src={navLogo}
        alt="logo"
        className="p-3 mb-5 w-full border-b-2 border-sky-100/30"
      />
      <div className="menu p-5 text-slate-200">
        <h3 className="text-xl uppercase text-white mb-3 pb-2 border-b-2 border-b-slate-300">
          <div className="flex items-center">
            <BiSolidDashboard className="ml-5" />
            <span className="ml-5">Dashboard</span>
          </div>
        </h3>
        <ul className="w-full text-lg">
          <li className="mb-3">
            {titlePage === "beranda" ? (
              <Link
                href="/admin"
                className="text-white hover:bg-slate-100/50 btn font-bold bg-slate-200/30 flex items-center"
              >
                <AiOutlineHome />
                <span className="ml-2 capitalize">Beranda</span>
              </Link>
            ) : (
              <Link
                href="/admin"
                className="flex items-center btn hover:bg-slate-100/20"
              >
                <AiOutlineHome />
                <span className="ml-2 capitalize">Beranda</span>
              </Link>
            )}
          </li>
          <li>
            <Link
              Link
              href={"admin-logout"}
              method="post"
              as="button"
              className="bg-red-500/50 hover:bg-red-500 rounded-lg text-white  btn font-semibold shadow flex items-center"
            >
              <FaRightFromBracket />
              <span className="ml-2 capitalize">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
const showAccordion = () => {
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Data Artikel Edukasi</Accordion.Title>
        <Accordion.Content>
          <MFAddEdukasi />
          <MyTable />
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default function DashboardPages() {
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
            {showAccordion()}
            {/* main content end */}
          </div>
        </div>

        {/* mainpanel end */}
      </div>
    </>
  );
}
