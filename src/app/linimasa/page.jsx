"use client";

import NavigationBar from "@components/NavigationBar";
import ProgressBarLinimasa from "@components/ProgressBarLinimasa";
import Questions from "@components/Questions";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Linimasa = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [klasifikasi, setKlasifikasi] = useState("");
  const [interpretasi, setInterpretasi] = useState("");
  const [resultTest, setResultTest] = useState({});
  const [isStart, setIsStart] = useState(false);
  const [countQuestion, setCountQuestion] = useState(1);
  const router = useRouter();

  const [questionList, setQuestionList] = useState([
    {
      id: 1,
      question:
        "Apakah Anda merasa tertekan atau sedih dalam beberapa minggu terakhir?",
      listChoice: [
        "Tidak pernah",
        "Hampir tidak pernah",
        "Beberapa kali",
        "Hampir setiap hari",
      ],
    },
    {
      id: 2,
      question:
        "Apakah Anda kehilangan minat atau kesenangan dalam melakukan aktivitas yang biasanya Anda nikmati?",
      listChoice: [
        "Tidak pernah",
        "Hampir tidak pernah",
        "Beberapa kali",
        "Hampir setiap hari",
      ],
    },
    {
      id: 3,
      question: "Apakah Anda merasa tidur terlalu banyak atau terlalu sedikit?",
      listChoice: [
        "Tidak pernah",
        "Hampir tidak pernah",
        "Beberapa kali",
        "Hampir setiap hari",
      ],
    },
    {
      id: 4,
      question: "Apakah Anda merasa lelah atau kurang berenergi?",
      listChoice: [
        "Tidak pernah",
        "Hampir tidak pernah",
        "Beberapa kali",
        "Hampir setiap hari",
      ],
    },
    {
      id: 5,
      question:
        "Apakah Anda merasa buruk tentang diri sendiri, merasa bahwa Anda adalah seorang yang gagal, atau merasa bahwa Anda telah mengecewakan diri sendiri atau orang lain?",
      listChoice: [
        "Tidak pernah",
        "Hampir tidak pernah",
        "Beberapa kali",
        "Hampir setiap hari",
      ],
    },
    {
      id: 6,
      question:
        "Apakah Anda kesulitan berkonsentrasi dalam melakukan tugas-tugas seperti membaca, menonton TV, atau bekerja?",
      listChoice: [
        "Tidak pernah",
        "Hampir tidak pernah",
        "Beberapa kali",
        "Hampir setiap hari",
      ],
    },
    {
      id: 7,
      question:
        "Apakah Anda merasa bergerak terlalu lambat atau merasa terlalu gelisah dan tidak dapat diam?",
      listChoice: [
        "Tidak pernah",
        "Hampir tidak pernah",
        "Beberapa kali",
        "Hampir setiap hari",
      ],
    },
    {
      id: 8,
      question:
        "Apakah Anda merasa bahwa Anda ingin atau mencoba menyakiti diri sendiri?",
      listChoice: [
        "Tidak pernah",
        "Hampir tidak pernah",
        "Beberapa kali",
        "Hampir setiap hari",
      ],
    },
    {
      id: 9,
      question:
        "Apakah Anda merasa bahwa Anda telah menjadi beban bagi orang lain?",
      listChoice: [
        "Tidak pernah",
        "Hampir tidak pernah",
        "Beberapa kali",
        "Hampir setiap hari",
      ],
    },
  ]);

  useEffect(() => {
    const updateKlasifikasiAndInterpretasi = () => {
      if (totalScore >= 0 && totalScore <= 4) {
        setKlasifikasi("Mungkin Tidak Ada Depresi");
        setInterpretasi(
          "Tingkat depresi Anda rendah, tetapi tetap perhatikan kesejahteraan mental Anda."
        );
      } else if (totalScore >= 5 && totalScore <= 9) {
        setKlasifikasi("Depresi Ringan");
        setInterpretasi(
          "Anda mungkin mengalami depresi ringan. Pertimbangkan berbicara dengan seorang profesional kesehatan."
        );
      } else if (totalScore >= 10 && totalScore <= 14) {
        setKlasifikasi("Depresi Sedang");
        setInterpretasi(
          "Anda mengalami depresi sedang. Pertimbangkan konseling atau perawatan medis."
        );
      } else if (totalScore >= 15 && totalScore <= 19) {
        setKlasifikasi("Depresi Berat");
        setInterpretasi(
          "Anda mengalami depresi berat. Segera cari bantuan dari seorang profesional kesehatan."
        );
      } else if (totalScore >= 20) {
        setKlasifikasi("Depresi Sangat Berat");
        setInterpretasi(
          "Anda mengalami depresi sangat berat. Segera cari bantuan medis darurat."
        );
      }
    };

    updateKlasifikasiAndInterpretasi();
    setResultTest({
      score: totalScore,
      classification: klasifikasi,
      interpretation: interpretasi,
    });
  }, [totalScore]);

  const handleChoice = (params, score) => {
    params && setCountQuestion((count) => (count += 1));
    if (countQuestion >= 9) {
      router.push("/linimasa/result-test");
    }
    setTotalScore((scores) => (scores += score));
  };

  return (
    <>
      <NavigationBar active='linimasa' />
      <div className='mt-5 sm:mt-8 lg:mt-20'>
        {/* Homepage */}
        {!isStart ? (
          <>
            <div className='wrapper flex justify-between items-center gap-4 lg:flex-row flex-col'>
              <div className='hero flex flex-col justify-center items-center w-full h-full'>
                <Image
                  src='/assets/Linimasa/homepage.gif'
                  alt='hero-linimasa'
                  width={500}
                  height={500}
                />
                <h className='text-2xl sm:text-3xl font-semibold mb-3'>
                  Linimasa
                </h>
                <p className='text-center sm:text-base text-sm'>
                  Monitoring perjalanan pulihkan jiwa dan <br /> kesehatan
                  mentalmu.
                </p>
              </div>
              <div className='start-section text-white bg-primary flex justify-center flex-col items-center w-full h-[500px] sm:h-[700px] gap-4'>
                <h1 className='text-xl sm:text-3xl font-semibold text-center w-[300px] sm:w-[450px] mb-2'>
                  Mulai tes yuk! biar kamu tau keadaan mentalmu
                </h1>
                <button
                  onClick={() => setIsStart(true)}
                  className='text-black bg-white rounded-full px-6 sm:px-8 py-1 sm:py-[0.4rem] font-semibold hover:text-white hover:bg-transparent border-4 border-transparent hover:border-white transition'
                >
                  Mulai
                </button>
              </div>
            </div>
          </>
        ) : (
          countQuestion <= 9 && (
            <>
              <ProgressBarLinimasa question={countQuestion} />
              <div className='wrapper mb-[3rem] sm:mb-[4.8rem] lg:mb-16'>
                <Questions
                  key={questionList[countQuestion - 1].id}
                  question={questionList[countQuestion - 1].question}
                  listChoice={questionList[countQuestion - 1].listChoice}
                  handleChoice={handleChoice}
                />
              </div>
            </>
          )
        )}
      </div>
    </>
  );
};

export default Linimasa;
