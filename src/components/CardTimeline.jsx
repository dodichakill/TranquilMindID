"use client";

import { useState } from "react";
import ReadMoreTimeline from "./ReadMoreTimeline";

const CardTimeline = ({ posTopOne, posTopTwo }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <div
        className={`absolute w-4 h-4 bg-white rounded-full mt-1.5 ${posTopOne} -left-[0.70rem] border border-primary`}
      ></div>
      <div className={`absolute w-fit ${posTopTwo} mt-1.5`}>
        <div className='box-timeline bg-primary rounded-2xl w-[300px] py-8 text-white px-6 flex justify-center items-center gap-3'>
          <h2>Menarik napas dalam</h2>
          <input
            type='checkbox'
            name='checkbox'
            className='bg-white text-primary w-6 h-6 border border-white rounded-full checked:bg-slate-800'
          />
        </div>
        <button className='font-medium text-sm bg-white px-3 py-1 rounded-lg shadow-xl w-[160px] translate-x-[9rem]' onClick={() => setReadMore((prev) => !prev)}>
          Baca Selengkapnya
        </button>
        <p className='mb-4 text-xs mt-2 font-normal text-primary'>
          *Perhatian: Langkah ini akan otomatis terverifikasi <br /> oleh sistem
          saat 7 hari berjalan
        </p>
        {readMore && (
          <>
            <ReadMoreTimeline
              content='Caranya, tarik napas selama 4 detik, kemudian tahan selama 7 detik,
          lalu lepaskan kembali perlahan-lahan dalam 8 detik. Lakukan beberapa
          kali hingga pikiran lebih tenang.'
            />
          </>
        )}
      </div>
    </>
  );
};

export default CardTimeline;
