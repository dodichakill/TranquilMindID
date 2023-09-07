import Image from "next/image";

export default function ChannelPodcast({ channel }) {
  return (
    <div className='card-channel-podcast flex flex-col justify-start items-center text-white bg-primary rounded-2xl w-fit h-[19rem] p-2 text-center hover:scale-[1.02] transition cursor-pointer overflow-hidden'>
      <Image
        src={channel.img}
        width={200}
        height={200}
        alt='card-channel-img'
        className='rounded-xl'
      />
      <h1 className='font-semibold text-2xl w-[200px] mt-2'>{channel.title}</h1>
    </div>
  );
}
