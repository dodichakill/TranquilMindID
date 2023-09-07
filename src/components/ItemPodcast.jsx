import Image from "next/image";

export default function ItemPodcast({ podcast }) {
  return (
    <div
      className='card-podcast flex justify-center items-center gap-3 p-2 pr-5 sm:pr-3 lg:pr-5 rounded-3xl text-white bg-primary hover:-translate-y-1 transition cursor-pointer'
      key={podcast.id}
    >
      <Image src={podcast.img} width={150} height={150} alt='image-podcast' />
      <div className='desc'>
        <h2 className='font-semibold text-base sm:text-xl'>{podcast.title}</h2>
        <p className='text-[0.85rem] sm:text-base'>{podcast.channel}</p>
        <p className='text-[0.6rem] sm:text-xs mt-1 sm:mt-2'>
          Tekan untuk dengarkan {"->"}
        </p>
      </div>
    </div>
  );
}
