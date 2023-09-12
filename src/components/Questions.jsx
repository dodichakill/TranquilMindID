import Image from "next/image";
import React from "react";

const Questions = ({ question, listChoice, handleChoice }) => {
  return (
    <>
      <div className='container flex justify-between items-center gap-2 flex-col lg:flex-row-reverse w-full h-[600px]'>
        <Image
          src='/assets/Linimasa/hero-question.gif'
          width={450}
          height={450}
          alt='hero-question'
          className='sm:translate-y-0 translate-y-8'
        />
        <div className='content-question overflow-visible sm:w-[650px] lg:w-[700px]'>
          <h1 className='text-2xl sm:text-5xl lg:text-[3.4rem] font-medium'>
            Pertanyaan Dari <span className='text-primary'>MindMin</span>
          </h1>
          <h2 className='text-xs sm:text-sm lg:text-lg mt-3'>{question}</h2>
          <ul className='list-choice flex flex-col gap-3 mt-4'>
            <div className='flex items-center'>
              <input
                id='default-radio-1'
                type='radio'
                value=''
                name='default-radio'
                onChange={({ target }) => handleChoice(target.checked, 0)}
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 focus:ring-blue-500 focus:ring-2'
              />
              <label
                htmlFor='default-radio-1'
                className='ml-2 text-xs sm:text-sm lg:text-lg font-medium text-slate-900'
              >
                {listChoice[0]}
              </label>
            </div>
            <div className='flex items-center'>
              <input
                id='default-radio-2'
                type='radio'
                value=''
                name='default-radio'
                onChange={({ target }) => handleChoice(target.checked, 1)}
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 focus:ring-blue-500 focus:ring-2'
              />
              <label
                htmlFor='default-radio-2'
                className='ml-2 text-xs sm:text-sm lg:text-lg font-medium text-slate-900'
              >
                {listChoice[1]}
              </label>
            </div>
            <div className='flex items-center'>
              <input
                id='default-radio-3'
                type='radio'
                value=''
                name='default-radio'
                onChange={({ target }) => handleChoice(target.checked, 2)}
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 focus:ring-blue-500 focus:ring-2'
              />
              <label
                htmlFor='default-radio-3'
                className='ml-2 text-xs sm:text-sm lg:text-lg font-medium text-slate-900'
              >
                {listChoice[2]}
              </label>
            </div>
            <div className='flex items-center'>
              <input
                id='default-radio-4'
                type='radio'
                value=''
                name='default-radio'
                onChange={({ target }) => handleChoice(target.checked, 3)}
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 focus:ring-blue-500 focus:ring-2'
              />
              <label
                htmlFor='default-radio-4'
                className='ml-2 text-xs sm:text-sm lg:text-lg font-medium text-slate-900'
              >
                {listChoice[3]}
              </label>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Questions;
