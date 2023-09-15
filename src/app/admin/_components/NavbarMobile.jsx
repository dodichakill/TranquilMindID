"use client";
import { Navbar } from "flowbite-react";
import Image from "next/image";
import React from "react";
const icLogo = "/assets/Logo/icLogo.png";

export default function NavbarMobile() {
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
}
