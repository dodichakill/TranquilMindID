"use client";

import { useEffect, useState } from "react";
import CardPsikologLink from "./CardPsikologLink";
import { Spinner } from "flowbite-react";
import { db } from "@app/firebase";
import { collection, query, onSnapshot } from "@firebase/firestore";
export default function ListProfesional() {
  // const dataProfessional = [
  //   {
  //     id: 1,
  //     name: "Novi Maulidita, M.PSI",
  //     type: "Psikolog",
  //     image: "/assets/Homepage/psikolog.png",
  //     place: "RS Harapan Bersama",
  //   },
  //   {
  //     id: 2,
  //     name: "Novi Maulidita, M.PSI",
  //     type: "Psikiater",
  //     image: "/assets/Homepage/psikiater.png",
  //     place: "RS Kardinah Tegal",
  //   },
  //   {
  //     id: 3,
  //     name: "Novi Maulidita, M.PSI",
  //     type: "Psikolog",
  //     image: "/assets/Homepage/psikolog.png",
  //     place: "RS Putra Bahagia",
  //   },
  //   {
  //     id: 4,
  //     name: "Novi Maulidita, M.PSI",
  //     type: "Psikiater",
  //     image: "/assets/Homepage/psikiater.png",
  //     place: "RS Muhammadiyah Solo",
  //   },
  //   {
  //     id: 5,
  //     name: "Novi Maulidita, M.PSI",
  //     type: "Psikolog",
  //     image: "/assets/Homepage/psikolog.png",
  //     place: "RS Harapan Bersama",
  //   },
  //   {
  //     id: 6,
  //     name: "Novi Maulidita, M.PSI",
  //     type: "Psikiater",
  //     image: "/assets/Homepage/psikiater.png",
  //     place: "RS Muhammadiyah Solo",
  //   },
  // ];

  const [loading, setLoading] = useState(true);
  const [dataProfesional, setDataProfesional] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "profesional"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemArr = [];
      console.log(" querySnapshot : ", querySnapshot);

      querySnapshot.forEach((doc) => {
        console.log(doc);
        itemArr.push({ ...doc.data(), id: doc.id });
      });

      setDataProfesional(itemArr);
      console.log("item Arr : ", itemArr);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <div className="w-full bg-primary rounded-t-2xl md:rounded-t-[5rem] mt-12 md:mt-24">
        <div className="container">
          <h1 className="heading text-center text-white mt-10 md:mt-20">
            Psikolog dan Psikiater
          </h1>
          <div className="w-full flex flex-wrap gap-5 items-center justify-center mt-10">
            {!loading ? (
              dataProfesional.map((data) => (
                <CardPsikologLink
                  id={data.id}
                  name={data.name}
                  type={data.typeJob}
                  image={data.img}
                  place={data.placeWork}
                  key={data.id}
                />
              ))
            ) : (
              <Spinner size={"xl"} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
