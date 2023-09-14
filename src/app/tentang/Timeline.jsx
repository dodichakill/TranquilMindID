import Image from "next/image";
import React from "react";

function Item({ name, image, desc }) {
  return (
    <>
      {/* desktop */}
      <li class="mb-10 ml-4 relative hidden md:block">
        <div className="absolute -left-44 top-14 text-right font-semibold text-white text-xl w-32">
          {name}
        </div>
        <div class="absolute w-5 h-5 top-14 bg-sky-700 rounded-full mt-1.5 -left-8 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <Image src={image} width={200} height={200} />
          <p className="text-white text-lg">{desc}</p>
        </div>
      </li>

      {/* mobile */}

      <li class="mb-10 ml-4 relative md:hidden">
        <div class="absolute w-5 h-5 bg-sky-700 rounded-full mt-1.5 -left-7 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <div className="text-left font-semibold text-white text-xl w-32">
          {name}
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <Image src={image} width={200} height={200} />
          <p className="text-white text-lg">{desc}</p>
        </div>
      </li>
    </>
  );
}
export default function Timeline() {
  const listFeature = [
    {
      id: 1,
      name: "Latar Musik",
      image: "/assets/Homepage/latar.gif",
      desc: "Relaksasikan harimu dengan latar musik.",
    },
    {
      id: 2,
      name: "Linimasa",
      image: "/assets/Homepage/linimasa.gif",
      desc: "Monitoring perjalanan pulihkan jiwa dan kesehatan mentalmu.",
    },
    {
      id: 3,
      name: "Rekomendasi",
      image: "/assets/About/rekomendasi.gif",
      desc: "Dapatkan informasi tentang rekomendasi psikolog dan psikiater terbaik yang dapat membantu anda lebih lanjut",
    },
    {
      id: 4,
      name: "Edukasi",
      image: "/assets/About/edukasi.gif",
      desc: "Temukan informasi tentang kesehatan mental dan psikologi.",
    },
    {
      id: 5,
      name: "Podcast",
      image: "/assets/Homepage/podcast.gif",
      desc: "Temani harimu dengan obrolan menarik dimanapun kapanpun.",
    },
  ];
  return (
    <div className="w-full md:max-w-xl mx-auto">
      <ol class="relative border-l-8 border-white dark:border-gray-700">
        {listFeature.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            image={item.image}
            desc={item.desc}
          />
        ))}
      </ol>
    </div>
  );
}
