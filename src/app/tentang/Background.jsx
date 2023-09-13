import Image from "next/image";
import React from "react";

export default function Background() {
  return (
    <div className="container flex flex-col md:flex-row">
      <div className="flex-1 w-full p-5 md:p-0">
        <h2 className="heading">Latar Belakang Kami</h2>
        <p className="desc">
          Kesehatan mental merupakan hal yang penting bagi semua orang, termasuk
          anak muda. Namun, pada kenyataannya, masih banyak anak muda yang
          mengalami masalah kesehatan mental. Hal ini dapat disebabkan oleh
          berbagai faktor, seperti tekanan akademik, tekanan sosial, dan trauma.
          Menyadari hal tersebut, kami tergerak untuk menciptakan
          Tranquilmind.id
        </p>
      </div>
      <div className="w-full flex items-center justify-center flex-1">
        <Image
          src={"/assets/Logo/logo.png"}
          width={200}
          height={200}
          className="w-96 object-cover"
        />
      </div>
    </div>
  );
}
