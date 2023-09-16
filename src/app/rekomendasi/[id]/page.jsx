"use client";
import NavigationBar from "@components/NavigationBar";
import { db } from "@app/firebase";
import { collection, query, onSnapshot } from "@firebase/firestore";
import { redirect, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import { BsTicketPerforatedFill, BsWhatsapp } from "react-icons/bs";
import FooterSection from "@components/FooterSection";
import ButtonBackTop from "@components/ButtonBackTop";
import { Spinner } from "flowbite-react";
const DetailRekomendasi = async () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [dataDokter, setDataDokter] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "profesional"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemArr = [];
      console.log(" querySnapshot : ", querySnapshot);

      querySnapshot.forEach((doc) => {
        itemArr.push({ ...doc.data(), id: doc.id });
      });

      setDataDokter(itemArr.find((data) => data.id == id));
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <NavigationBar active="rekomendasi" />
      <div className="flex flex-col md:flex-row mt-5 md:mt-24">
        {!loading ? (
          <>
            <div className="container_2">
              <Profile
                image={dataDokter.img}
                name={dataDokter.name}
                desc={dataDokter.desc}
                placeWork={dataDokter.placeWork}
                typeJob={dataDokter.typeJob}
                educations={dataDokter.educations}
                experience={dataDokter.experience}
                STR={dataDokter.STR}
              />
            </div>
            <div className="container_2 w-full">
              <a
                className="btn bg-green-400 cursor-pointer hover:bg-green-500 active:bg-green-600 w-fit text-white flex gap-3 items-center shadow"
                href={`https://wa.me/62${dataDokter.nomorHP}?text=Halo%20${dataDokter.name}`}
                target="_blank"
              >
                {" "}
                <BsWhatsapp /> <span>Whatsapp</span>
              </a>
              <div className="voucher py-4 px-5 bg-primary text-white font-semibold rounded-lg w-fit flex items-center gap-3 my-5">
                <BsTicketPerforatedFill />
                Kode Voucher{" "}
                <span className="bg-white text-black text-lg box-content px-2 rounded-lg">
                  {dataDokter.vocher}
                </span>
              </div>

              <p className="text-primary italic">
                *Perhatian: Tunjukan kode voucher ini agar kamu dapat potongan
                harga dari TranquilMind.id ya!
              </p>

              <iframe
                src={dataDokter.maps}
                className="w-full h-96 p-2 rounded-lg bg-primary/25 mt-5 border-0"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </>
        ) : (
          <div className="w-full flex justify-center items-center">
            <Spinner size={"xl"} />
          </div>
        )}
      </div>
      <FooterSection />
      <ButtonBackTop />
    </>
  );
};

export default DetailRekomendasi;
