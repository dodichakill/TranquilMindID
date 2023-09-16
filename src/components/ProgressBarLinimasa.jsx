import React from 'react'

const ProgressBarLinimasa = ({ question }) => {
  return (
    <div className='wrapper flex justify-center items-center gap-1 sm:gap-2 lg:gap-3 translate-y-4 lg:translate-y-10'>
        <div className={`bar-progress rounded-lg w-7 sm:w-16 lg:w-20 h-1 sm:h-2 ${question == 1 ? 'bg-primary' : 'bg-slate-300'}`}></div>
        <div className={`bar-progress rounded-lg w-7 sm:w-16 lg:w-20 h-1 sm:h-2 ${question == 2 ? 'bg-primary' : 'bg-slate-300'}`}></div>
        <div className={`bar-progress rounded-lg w-7 sm:w-16 lg:w-20 h-1 sm:h-2 ${question == 3 ? 'bg-primary' : 'bg-slate-300'}`}></div>
        <div className={`bar-progress rounded-lg w-7 sm:w-16 lg:w-20 h-1 sm:h-2 ${question == 4 ? 'bg-primary' : 'bg-slate-300'}`}></div>
        <div className={`bar-progress rounded-lg w-7 sm:w-16 lg:w-20 h-1 sm:h-2 ${question == 5 ? 'bg-primary' : 'bg-slate-300'}`}></div>
        <div className={`bar-progress rounded-lg w-7 sm:w-16 lg:w-20 h-1 sm:h-2 ${question == 6 ? 'bg-primary' : 'bg-slate-300'}`}></div>
        <div className={`bar-progress rounded-lg w-7 sm:w-16 lg:w-20 h-1 sm:h-2 ${question == 7 ? 'bg-primary' : 'bg-slate-300'}`}></div>
        <div className={`bar-progress rounded-lg w-7 sm:w-16 lg:w-20 h-1 sm:h-2 ${question == 8 ? 'bg-primary' : 'bg-slate-300'}`}></div>
        <div className={`bar-progress rounded-lg w-7 sm:w-16 lg:w-20 h-1 sm:h-2 ${question == 9 ? 'bg-primary' : 'bg-slate-300'}`}></div>
    </div>
  )
}

export default ProgressBarLinimasa