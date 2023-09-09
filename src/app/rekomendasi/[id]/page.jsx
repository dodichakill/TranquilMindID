import Headline from "@app/rekomendasi/Headline";
import NavigationBar from "@components/NavigationBar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import React from "react";
import Profile from "./Profile";
import { BsTicketPerforatedFill, BsWhatsapp } from "react-icons/bs";
const DetailRekomendasi = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <NavigationBar active="rekomendasi" user={user} />
      <div className="flex flex-col md:flex-row mt-5 md:mt-24">
        <div className="container_2">
          <Profile />
        </div>
        <div className="container_2 w-full">
          <button className="btn bg-green-400 cursor-pointer hover:bg-green-500 active:bg-green-600 w-fit text-white flex gap-3 items-center shadow">
            {" "}
            <BsWhatsapp /> <span>Whatsapp</span>
          </button>
          <div className="voucher py-4 px-5 bg-primary text-white font-semibold rounded-lg w-fit flex items-center gap-3 my-5">
            <BsTicketPerforatedFill />
            Kode Voucher{" "}
            <span className="bg-white text-black text-lg box-content px-2 rounded-lg">
              G4C0RK4N6
            </span>
          </div>

          <p className="text-primary italic">
            *Perhatian: Tunjukan kode voucher ini agar kamu dapat potongan harga
            dari TranquilMind.id ya!
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1188741000224!2d109.12572947454025!3d-6.876358367281645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb9da81ce9b81%3A0x2c088f349b6bf884!2sRSU%20Islam%20Harapan%20Anda!5e0!3m2!1sen!2sid!4v1694146082139!5m2!1sen!2sid"
            className="w-full h-96 p-2 rounded-lg bg-primary/25 mt-5 border-0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default DetailRekomendasi;
