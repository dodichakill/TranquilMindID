"use client";

import CardTimeline from "@components/CardTimeline";
import NavigationBar from "@components/NavigationBar";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineClose,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { VscBook } from "react-icons/vsc";
import { BiPodcast } from "react-icons/bi";
import { Tooltip } from "flowbite-react";

const ResultTest = () => {
  const [dataResult, setDataResult] = useState({});
  const [nextStep, setNextStep] = useState(false);
  const [popUpYes, setPopUpYes] = useState(false);
  const [popUpNo, setPopUpNo] = useState(false);
  const [checkedCount, setCheckedCount] = useState(1);
  const checkedHandler = () => {
    setCheckedCount((c) => (c += 1));
    return true;
  };

  useEffect(() => {
    setDataResult(JSON.parse(window.localStorage.getItem("resultTest")));
  }, []);

  return (
    <>
      <NavigationBar active='linimasa' />
      <div className='wrapper lg:mt-[5.25rem]'>
        {dataResult.classification == "Depresi Sedang" ||
        dataResult.classification == "Depresi Berat" ||
        dataResult.classification == "Depresi Sangat Berat" ? (
          <>
            <div className="main-hero w-screen h-screen bg-[url('/assets/Linimasa/hero-result.jpeg')] bg-cover bg-no-repeat flex bg-fixed justify-center items-center text-center">
              <div className='bg-white/50 backdrop-blur-md w-[300px] h-[200px] sm:w-[600px] lg:w-[700px] sm:h-[300px] flex justify-center items-center flex-col p-4 sm:px-10 gap-3 rounded-lg shadow'>
                <h1 className='text-2xl sm:text-4xl lg:text-5xl font-semibold'>
                  {dataResult.classification}
                </h1>
                <p className='text-xs sm:text-base lg:text-lg font-medium'>
                  {dataResult.interpretation}
                </p>
                <Link
                  href='/rekomendasi'
                  className='text-[0.6rem] sm:text-sm flex justify-center items-center gap-2 font-medium text-white bg-primary px-3 py-2 sm:px-4 sm:py-3 rounded-full transition'
                >
                  Rekomendasi Psikolog
                  <AiOutlineArrowRight />
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="main-hero w-screen h-screen bg-[url('/assets/Linimasa/hero-result.jpeg')] bg-cover bg-no-repeat flex bg-fixed justify-center items-center text-center">
              <div className='bg-white/50 backdrop-blur-md w-[300px] h-[200px] sm:w-[600px] lg:w-[700px] sm:h-[300px] flex justify-center items-center flex-col p-4 sm:px-10 gap-3 rounded-lg shadow'>
                <h1 className='text-2xl sm:text-4xl lg:text-5xl font-semibold'>
                  {dataResult.classification}
                </h1>
                <p className='text-xs sm:text-base lg:text-lg font-medium'>
                  {dataResult.interpretation}
                </p>
              </div>
            </div>
          </>
        )}

        <div className='timeline w-fit h-fit flex justify-center items-center flex-row lg:gap-20 lg:pl-10'>
          <ol className='relative hidden lg:block ml-8 h-[1500px]'>
            <li className='mb-10'>
              <div className='w-[100px] font-semibold absolute mt-1.5 top-[3.2rem] -left-[0.650rem]'>
                Langkah 1
              </div>
            </li>
            <li className='mb-10'>
              <div className='w-[100px] font-semibold absolute mt-1.5 top-[16.2rem] -left-[0.650rem]'>
                Langkah 2
              </div>
            </li>
            <li className='mb-10'>
              <div className='w-[100px] font-semibold absolute mt-1.5 top-[29.3rem] -left-[0.650rem]'>
                Langkah 3
              </div>
            </li>
            <li className='mb-10'>
              <div className='w-[100px] font-semibold absolute mt-1.5 top-[42.3rem] -left-[0.650rem]'>
                Langkah 4
              </div>
            </li>
            <li className='mb-10'>
              <div className='w-[100px] font-semibold absolute mt-1.5 top-[55.3rem] -left-[0.650rem]'>
                Langkah 5
              </div>
            </li>
          </ol>
          <ol className='relative border-l-8 border-gray-600 ml-8 h-[1500px]'>
            <li className='mb-10 ml-4'>
              <CardTimeline
                posTopOne='top-[3.5rem]'
                posTopTwo='top-[1.5rem]'
                shortDesc='Melakukan Aktivitas'
                longDesc='Lakukan aktivitas yang disukai, seperti menonton film atau mendengarkan musik. Berolahraga ringan, seperti berjalan-jalan atau yoga. Anda dianjurkan untuk mendengarkan musik musik jazz, pop, dan klasik.'
                handleChecked={checkedHandler}
              />
            </li>
            <li className='mb-10 ml-4'>
              <CardTimeline
                posTopOne='top-[16.5rem]'
                posTopTwo='top-[14.5rem]'
                shortDesc='Tidur Yang Cukup'
                longDesc='Tidur dan bangun pada jam yang sama setiap hari. Hindari konsumsi kafein dan alkohol. Anda dianjurkan untuk melakukan relaksasi sebelum tidur, seperti meditasi atau pernapasan dalam-dalam.'
                handleChecked={checkedHandler}
                disabledCheck={checkedCount < 2}
              />
            </li>
            <li className='mb-10 ml-4'>
              <CardTimeline
                posTopOne='top-[29.5rem]'
                posTopTwo='top-[27.5rem]'
                shortDesc='Makan Makanan Sehat'
                longDesc='Anda dianjurkan untuk makan makanan yang sehat dan bergizi. Hindari makanan cepat saji dan makanan yang mengandung gula berlebih. Anda dianjurkan makan dalam porsi kecil tapi sering.
                '
                handleChecked={checkedHandler}
                disabledCheck={checkedCount < 3}
              />
            </li>
            <li className='mb-10 ml-4'>
              <CardTimeline
                posTopOne='top-[42.5rem]'
                posTopTwo='top-[40.5rem]'
                shortDesc='Melakukan Interaksi Sosial'
                longDesc='Anda dianjurkan untuk bertemu dengan teman atau keluarga. Anda bisa melakukan kegiatan sosial, seperti bergabung dengan klub atau organisasi.
                '
                handleChecked={checkedHandler}
                disabledCheck={checkedCount < 4}
              />
            </li>
            <li className='mb-10 ml-4'>
              <CardTimeline
                posTopOne='top-[55.5rem]'
                posTopTwo='top-[53.5rem]'
                shortDesc='Berkegiatan Yang Disukai'
                longDesc='Anda dianjurkan untuk melakukan kegiatan yang memberikan rasa senang seperti hobi Anda. Anda bisa melakukan kegiatan yang memberikan rasa kepuasan, seperti berkebun atau memasak.
               '
                handleChecked={checkedHandler}
                disabledCheck={checkedCount < 5}
              />
            </li>
            <li className='mb-10 ml-4'>
              <div className={`absolute w-fit sm:w-[400px] top-[68rem] mt-1.5`}>
                {!nextStep ? (
                  <>
                    <div
                      className='box-timeline bg-white rounded-3xl w-[300px] sm:w-[400px] py-10 text-black px-3 sm:px-6 flex justify-center items-center gap-3'
                      style={{ boxShadow: "1px 1px 10px 1px rgba(0,0,0,0.3)" }}
                    >
                      <h2 className='text-xs sm:text-sm lg:text-base'>
                        Kamu telah menyelesaikan semua tahap
                      </h2>
                    </div>
                    <Tooltip
                      placement='bottom'
                      content='Selesaikan semua langkah'
                      className='translate-x-[5.5rem] sm:translate-x-[10rem] text-xs'
                    >
                      <button
                        className='font-medium text-xs sm:text-sm bg-primary text-white px-3 py-[0.35rem] rounded-2xl shadow-xl translate-x-[5.5rem] sm:translate-x-[10rem]'
                        onClick={() => {
                          checkedCount >= 5 && setNextStep(true);
                        }}
                      >
                        Tekan untuk langkah selanjutnya
                      </button>
                    </Tooltip>
                  </>
                ) : (
                  <>
                    {!popUpYes && !popUpNo ? (
                      <>
                        <div
                          className='wrapper relative flex justify-center items-center text-center flex-col bg-white w-[300px] h-[300px] sm:w-[600px] sm:h-[300px] px-8 rounded-3xl'
                          style={{
                            boxShadow: "1px 1px 10px 1px rgba(0,0,0,0.3)",
                          }}
                        >
                          <button
                            className='button-back sm:text-base text-sm absolute font-medium left-4 top-4 flex justify-center items-center gap-2'
                            onClick={() => setNextStep(false)}
                          >
                            <AiOutlineArrowLeft className='sm:text-2xl' />
                            Kembali
                          </button>
                          <div className='head-content mb-3'>
                            <h1 className='text-2xl sm:text-4xl font-semibold'>
                              {dataResult.classification}
                            </h1>
                          </div>
                          <p className='text-xs sm:text-sm lg:text-base'>
                            {dataResult.interpretation} Apakah kamu terbantu dan
                            merasa sembuh dengan linimasa ini?
                          </p>
                          <div className='button-box flex justify-center items-center gap-4 sm:gap-8 mt-8'>
                            <button
                              className='yes-btn text-xs sm:text-base w-24 sm:w-28 h-8 sm:h-9 p-1 flex justify-center items-center bg-primary text-white rounded-full shadow'
                              onClick={() => setPopUpYes(true)}
                            >
                              Iya
                            </button>
                            <button
                              className='no-btn text-xs sm:text-base w-24 sm:w-28 h-8 sm:h-9 p-1 flex justify-center items-center bg-primary text-white rounded-full shadow'
                              onClick={() => setPopUpNo(true)}
                            >
                              Tidak
                            </button>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {popUpYes ? (
                          <>
                            <div
                              className='wrapper relative flex justify-center items-center text-center flex-col bg-white w-[300px] h-[300px] sm:w-[600px] sm:h-[300px] px-8 rounded-3xl'
                              style={{
                                boxShadow: "1px 1px 10px 1px rgba(0,0,0,0.3)",
                              }}
                            >
                              <button
                                className='absolute right-5 top-5 text-base sm:text-2xl'
                                onClick={() => setPopUpYes(false)}
                              >
                                <AiOutlineClose />
                              </button>
                              <p className='text-xs sm:text-sm lg:text-base'>
                                Terimakasih telah memilih, jika anda merasa
                                telah terbantu silahkan akses fitur kami lainnya
                                untuk menambah wawasan anda
                              </p>
                              <div className='button-box flex justify-center items-center gap-4 sm:gap-8 mt-8'>
                                <Link
                                  href='/edukasi'
                                  className='yes-btn text-xs sm:text-base w-24 sm:w-28 h-8 sm:h-9 p-1 flex justify-center items-center bg-primary text-white rounded-full shadow cursor-pointer gap-2'
                                >
                                  <VscBook />
                                  Edukasi
                                </Link>
                                <Link
                                  href='/podcast'
                                  className='no-btn text-xs sm:text-base w-24 sm:w-28 h-8 sm:h-9 p-1 flex justify-center items-center bg-primary text-white rounded-full shadow cursor-pointer gap-2'
                                >
                                  <BiPodcast />
                                  Podcast
                                </Link>
                              </div>
                            </div>
                          </>
                        ) : (
                          popUpNo && (
                            <>
                              <div
                                className='wrapper relative flex justify-center items-center text-center flex-col bg-white w-[300px] h-[300px] sm:w-[600px] sm:h-[300px] px-8 rounded-3xl'
                                style={{
                                  boxShadow: "1px 1px 10px 1px rgba(0,0,0,0.3)",
                                }}
                              >
                                <button
                                  className='absolute right-5 top-5 text-base sm:text-2xl'
                                  onClick={() => setPopUpNo(false)}
                                >
                                  <AiOutlineClose />
                                </button>
                                <p className='text-xs sm:text-sm lg:text-base'>
                                  Terimakasih telah memilih, jika anda merasa
                                  belum terbantu bisa segera konsultasi dengan
                                  psikolog rekomendasi kami. Apakah anda ingin
                                  konsultasi ?
                                </p>
                                <div className='button-box flex justify-center items-center gap-4 sm:gap-8 mt-8'>
                                  <Link
                                    href='/rekomendasi'
                                    className='yes-btn text-xs sm:text-base w-24 sm:w-28 h-8 sm:h-9 p-1 flex justify-center items-center bg-primary text-white rounded-full shadow cursor-pointer'
                                  >
                                    Iya
                                  </Link>
                                  <Link
                                    href='/'
                                    className='no-btn text-xs sm:text-base w-24 sm:w-28 h-8 sm:h-9 p-1 flex justify-center items-center bg-primary text-white rounded-full shadow cursor-pointer'
                                  >
                                    Tidak
                                  </Link>
                                </div>
                              </div>
                            </>
                          )
                        )}
                      </>
                    )}
                  </>
                )}
              </div>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default ResultTest;
