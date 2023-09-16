import Image from "next/image";
import Link from "next/link";

export default function ChannelPodcast({ channel }) {
  return (
    <Link href={channel.listennotes_url} className='card-channel-podcast flex flex-col justify-start items-center text-white bg-primary rounded-2xl w-fit h-[19rem] p-2 text-center hover:scale-[1.02] transition cursor-pointer overflow-hidden'>
      <Image
        src={channel.image}
        width={200}
        height={200}
        alt='card-channel-img'
        className='rounded-xl'
      />
      <h1 className='font-semibold text-xl w-[200px] mt-2'>{channel.title}</h1>
    </Link>
  );
}
