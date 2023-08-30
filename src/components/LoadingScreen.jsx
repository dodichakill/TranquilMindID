import Image from "next/image";

const LoadingScreen = () => {
  return (
    <div className='flex justify-center items-center flex-col fixed z-[999] right-[50%] top-[50%] translate-x-[50%] -translate-y-[50%] w-screen h-screen bg-white gap-3'>
      <Image
        src='/assets/Logo/icLogo.png'
        width={100}
        height={100}
        alt='icon-splash'
      />
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingScreen;
