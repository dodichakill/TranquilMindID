import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiSolidDashboard } from "react-icons/bi";
import { FaRightFromBracket } from "react-icons/fa6";
const navLogo = "/assets/Logo/logo-footer.png";

export default function NavbarDesktop({ titlePage }) {
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
}
