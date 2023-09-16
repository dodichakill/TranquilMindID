"use client";

import { client } from "@services";
import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Podcasts() {
  const [populerPodcast, setPopulerPodcast] = useState([]);
  const [loading, setLoading] = useState(true);
  const clientPodcast = client;
  const router = useRouter();

  useEffect(() => {
    const fetchingDataFromAPI = async () => {
      clientPodcast
        .fetchBestPodcasts({
          genre_id: "93",
          page: 2,
          region: "us",
          sort: "listen_score",
          safe_mode: 0,
        })
        .then((response) => {
          setPopulerPodcast(response.data.podcasts);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchingDataFromAPI();
  }, []);

  return (
    <>
      <div className="container m-auto mb-10">
        <h1 className="heading text-center">Kumpulan Podcast Kami</h1>
        <Button
          onClick={() => router.push("/podcast")}
          className="btn bg-primary flex m-auto text-white flex-1"
        >
          Lebih banyak
        </Button>

        {/* cards start */}
        {!loading ? (
          <>
            <div className="flex flex-col md:flex-row m-auto justify-center items-center gap-3 md:gap-0 md:justify-evenly mt-10 w-full">
              {populerPodcast.slice(3, 6).map((pod) => (
                <>
                  <Link
                    href={pod.listennotes_url}
                    target="_blank"
                    className="w-64 p-2 bg-primary/75 rounded-lg shadow cursor-pointer hover:scale-105 transition-all"
                  >
                    <Image
                      src={pod.image}
                      alt="card"
                      width={300}
                      height={300}
                      className="bg-white mb-5 rounded-lg"
                    />
                    <div className="sub_heading text-center text-white">
                      {pod.title}
                    </div>
                  </Link>
                </>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="custom-loader my-4 mx-auto"></div>
          </>
        )}
        {/* cards end */}
      </div>
      <FooterSection />
      <ButtonBackTop />
    </>
  );
}
