"use client";

import CardTimeline from "@components/CardTimeline";
import NavigationBar from "@components/NavigationBar";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";

const ResultTest = () => {
  const [dataResult, setDataResult] = useState(
    JSON.parse(localStorage.getItem("resultTest"))
  );
  const [nextStep, setNextStep] = useState(false);
  const [popUpYes, setPopUpYes] = useState(false);
  const [popUpNo, setPopUpNo] = useState(false);

  useEffect(() => {
    setDataResult(JSON.parse(localStorage.getItem("resultTest")));
  }, []);

  return (
    <>
      <NavigationBar active='linimasa' />
      <div className='wrapper lg:mt-[5.25rem]'>
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
              <CardTimeline posTopOne='top-[3.5rem]' posTopTwo='top-[1.5rem]' />
            </li>
            <li className='mb-10 ml-4'>
              <CardTimeline
                posTopOne='top-[16.5rem]'
                posTopTwo='top-[14.5rem]'
              />
            </li>
            <li className='mb-10 ml-4'>
              <CardTimeline
                posTopOne='top-[29.5rem]'
                posTopTwo='top-[27.5rem]'
              />
            </li>
            <li className='mb-10 ml-4'>
              <CardTimeline
                posTopOne='top-[42.5rem]'
                posTopTwo='top-[40.5rem]'
              />
            </li>
            <li className='mb-10 ml-4'>
              <CardTimeline
                posTopOne='top-[55.5rem]'
                posTopTwo='top-[53.5rem]'
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
                    <button
                      className='font-medium text-xs sm:text-sm bg-primary text-white px-3 py-[0.35rem] rounded-2xl shadow-xl translate-x-[5.5rem] sm:translate-x-[10rem]'
                      onClick={() => setNextStep(true)}
                    >
                      Tekan untuk langkah selanjutnya
                    </button>
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
                                telah terbantu silahkan akses fitur kami lainnya untuk menambah wawasan anda
                              </p>
                              <div className='button-box flex justify-center items-center gap-4 sm:gap-8 mt-8'>
                                <Link
                                  href='/edukasi'
                                  className='yes-btn text-xs sm:text-base w-24 sm:w-28 h-8 sm:h-9 p-1 flex justify-center items-center bg-primary text-white rounded-full shadow cursor-pointer'
                                >
                                  Edukasi
                                </Link>
                                <Link
                                  href='/podcast'
                                  className='no-btn text-xs sm:text-base w-24 sm:w-28 h-8 sm:h-9 p-1 flex justify-center items-center bg-primary text-white rounded-full shadow cursor-pointer'
                                >
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
                                  psikolog rekomendasi kami. Apakah anda ingin konsultasi ?
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
