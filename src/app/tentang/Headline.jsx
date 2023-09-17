import React from "react";

export default function Headline() {
  return (
    <div
      className="w-full h-96 md:h-screen flex justify-center items-center mb-10 md:mb-28"
      style={{
        backgroundImage: "url('/assets/About/bg.jpg')",
        objectFit: "cover",
      }}
    >
      <div className="px-10 bg-white/50 backdrop-blur-lg text-center py-20 z-0">
        <h1 className="heading">Sebuah Perjalanan</h1>
        <p className="desc">
          Kenalan lebih dekat dengan sejarah TranquilMind.id dan orang-orang
          dibaliknya
        </p>
      </div>
    </div>
  );
}
