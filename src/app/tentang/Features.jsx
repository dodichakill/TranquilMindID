import React from "react";
import Timeline from "./Timeline";

export default function Features() {
  return (
    <div className="w-full mt-10 md:mt-28">
      <h1 className="heading text-center">Fitur TranquilMind.id</h1>

      <div className="w-full bg-primary rounded-t-[2rem] md:rounded-t-[5rem] p-5 flex justify-center items-center mb-10 md:mb-20">
        <div className="relative w-full max-w-xl p-5">
          <Timeline />
        </div>
      </div>
    </div>
  );
}
