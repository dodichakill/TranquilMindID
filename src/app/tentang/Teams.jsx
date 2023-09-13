import Image from "next/image";
import React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

function Card({ name, img, title, ig, li }) {
  return (
    <div className="p-2 w-[17rem]">
      <div className="relative w-full">
        <Image
          width={200}
          height={200}
          src={img}
          className="object-cover w-full h-[20rem] transition hover:scale-105"
        />
        <div className="absolute right-2 bottom-2 flex flex-col gap-4 text-2xl justify-center items-center py-5 px-4 border-2 border-primary bg-white rounded-full shadow-lg">
          <a
            href={li}
            target="_blank"
            className="p-1 hover:text-primary transition hover:scale-150"
          >
            <BsLinkedin />
          </a>
          <a
            href={ig}
            target="_blank"
            className="p-1 hover:text-primary transition hover:scale-150"
          >
            <BsInstagram />
          </a>
        </div>
      </div>
      <div className="w-full h-3 my-2 rounded-b-lg bg-primary" />
      <div className="text-center w-full">
        <h3 className="font-roboto font-semibold text-xl">{name}</h3>
        <p className="text-lg">{title}</p>
      </div>
    </div>
  );
}
export default function Teams() {
  const listSepuh = [
    {
      id: 1,
      name: "Dodi",
      title: "Web Developer",
      img: "/assets/About/dodi.png",
      ig: "https://www.instagram.com/hrl9127/",
      li: "https://www.linkedin.com/in/dodi-dev/",
    },
    {
      id: 2,
      name: "Faisal",
      title: "UIUX Designer",
      img: "/assets/About/faisal.png",
      ig: "https://instagram.com/arrp_3",
      li: "https://www.linkedin.com/in/faisal-arrahman-pratama-280b15248",
    },
    {
      id: 3,
      name: "Karel",
      title: "Web Developer",
      img: "/assets/About/karel.png",
      ig: "https://instagram.com/foxy_foxh",
      li: "https://www.linkedin.com/in/karel-trisnanto-utomo-8564ba259",
    },
  ];
  return (
    <>
      <div className="container mt-20">
        <h1 className="heading text-center">Tim TranquilMind.id</h1>

        <div className="w-full m-auto max-w-4xl flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 my-10">
          {listSepuh.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              img={item.img}
              title={item.title}
              ig={item.ig}
              li={item.li}
            />
          ))}
        </div>
      </div>
    </>
  );
}
