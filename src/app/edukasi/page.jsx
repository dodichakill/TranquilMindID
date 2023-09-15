"use client";

import NavigationBar from "@components/NavigationBar";
import CarouselBanner from "@components/CarouselBanner";
import CardArticle from "@components/CardArticle";
import { useEffect, useState } from "react";

export const dataArtikel = [
  {
    title: "Depresi",
    deskripsi:
      "Depresi adalah gangguan suasana hati yang menyebabkan penderitanya terus-menerus merasa sedih. Perasaan sedih pada depresi bisa berlangsung hingga berminggu-minggu atau berbulan-bulan.",
    gejala:
      "Gejala depresi bisa bermacam-macam, namun beberapa tanda umumnya antara lain perasaan sedih, hampa atau putus asa, kehilangan minat atau kesenangan dalam aktivitas biasa, merasa lelah atau kurang energi, merasa tidak berharga atau bersalah, sulit berkonsentrasi, mengingat, atau mengambil keputusan yang logis. gangguan tidur seperti sulit tidur atau terlalu banyak tidur  dan perubahan nafsu makan seperti kehilangan nafsu makan atau makan berlebihan.",
    penyebab:
      "Beberapa faktor  berperan dalam perkembangan depresi, termasuk genetika, perubahan kadar  kimia di otak, dan peristiwa kehidupan yang penuh tekanan. Faktor genetik dapat membuat seseorang lebih rentan mengalami depresi jika terdapat riwayat keluarga dengan kelainan tersebut. Perubahan kadar neurotransmitter seperti serotonin dan norepinefrin juga dapat mempengaruhi mood seseorang. Peristiwa hidup yang penuh tekanan, seperti kehilangan pekerjaan, kematian orang yang dicintai, atau masalah keuangan, juga dapat menyebabkan depresi.",
    penanganan:
      "Penanganan depresi dapat dilakukan dalam bentuk kombinasi pengobatan dan psikoterapi. Beberapa obat yang digunakan untuk mengobati depresi termasuk antidepresan. Salah satu psikoterapi yang umum digunakan adalah terapi perilaku kognitif  (CBT). Selain itu, penting untuk mendapatkan dukungan sosial yang kuat dan menjaga gaya hidup sehat yang mencakup aktivitas fisik teratur dan pola makan  seimbang.",
    image:
      "https://images.pexels.com/photos/6382594/pexels-photo-6382594.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Skizofrenia",
    deskripsi:
      "Skizofrenia adalah gangguan mental berat yang dapat memengaruhi tingkah laku, emosi, dan komunikasi. Penderita skizofrenia bisa mengalami halusinasi, delusi, kekacauan berpikir, dan perubahan perilaku Skizofrenia tidak dapat dicegah sepenuhnya, karena bisa dipicu oleh faktor genetik dan ketidakseimbangan zat di dalam otak.",
    gejala:
      "Gejala skizofrenia antara lain halusinasi seperti mendengar suara-suara atau melihat sesuatu yang sebenarnya tidak ada, waham yaitu keyakinan yang tidak sesuai dengan kenyataan, gangguan berpikir seperti sulit berkonsentrasi atau bicara tidak teratur, dan perubahan perilaku seperti menarik diri dari pergaulan. lingkungan. atau kehilangan kesadaran atau minat pada aktivitas biasa.",
    penyebab:
      "Skizofrenia tidak bisa dihindari sepenuhnya karena bisa dipicu oleh faktor genetik dan ketidakseimbangan bahan kimia di  otak. Faktor genetik merupakan salah satu faktor risiko utama skizofrenia. Jika Anda memiliki riwayat keluarga dengan skizofrenia, risiko Anda terkena gangguan ini  lebih tinggi.",
    penanganan:
      "Penanganan skizofrenia mencakup kombinasi obat-obatan, psikoterapi, dan terapi lainnya. Beberapa obat yang digunakan untuk mengobati skizofrenia adalah antipsikotik. Psikoterapi membantu pasien mengendalikan gejala dan meningkatkan kualitas hidup. Dalam beberapa kasus yang lebih parah, terapi elektrokonvulsif atau pengiriman gelombang elektromagnetik ke otak juga bisa menjadi pilihan.",
    image:
      "https://images.pexels.com/photos/5255996/pexels-photo-5255996.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Kecemasan",
    deskripsi:
      "Kecemasan merupakan perasaan khawatir atau takut  berlebihan terhadap suatu keadaan atau objek tertentu. Penyebab kecemasan tidak dapat ditentukan sendiri karena sangat kompleks.",
    gejala:
      "Gejala kecemasan antara lain merasa gelisah atau tegang, sulit berkonsentrasi, merasa lelah atau kurang berenergi, sulit tidur atau  terlalu banyak tidur, merasa gelisah atau mudah terkejut, dan menghindari situasi atau benda yang memicu kecemasan.",
    penyebab:
      "Beberapa faktor yang mungkin berkontribusi termasuk genetika, pengalaman traumatis atau stres, kondisi kesehatan mental lainnya, dan efek samping obat-obatan tertentu. Faktor genetik mungkin membuat seseorang lebih rentan mengalami kecemasan jika ada riwayat keluarga dengan gangguan kecemasan.",
    penanganan:
      "Penanganan kecemasan dapat berupa obat-obatan, psikoterapi, atau kombinasi keduanya. Beberapa obat yang digunakan untuk mengobati kecemasan antara lain antidepresan dan antikecemasan, sedangkan psikoterapi yang umum digunakan adalah terapi perilaku kognitif (CBT).",
    image:
      "https://images.pexels.com/photos/3772618/pexels-photo-3772618.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Gangguan Psikotik",
    deskripsi:
      "Gangguan psikotik adalah gangguan mental yang menyebabkan penderitanya kehilangan kontak dengan kenyataan. Beberapa jenis gangguan psikotik antara lain skizofrenia, gangguan delusional, dan gangguan bipolar dengan gejala psikotik.",
    gejala:
      "Gejala gangguan psikotik antara lain merasa gelisah atau tegang, sulit berkonsentrasi, merasa lelah atau kurang berenergi, sulit tidur atau  terlalu banyak tidur, merasa gelisah atau mudah kaget, dan menghindari rangsangan situasi atau benda yang menimbulkan kecemasan. Selain itu, halusinasi dan delusi merupakan gejala khas  gangguan psikotik.",
    penyebab:
      "Penyebab psikosis tidak diketahui secara pasti, namun sejumlah faktor mungkin berkontribusi terhadap psikosis termasuk faktor genetik, perubahan kadar  kimia di otak, dan peristiwa kehidupan yang penuh tekanan.",
    penanganan:
      "Penanganan gangguan psikotik mencakup berbagai metode seperti pengobatan, psikoterapi, dan terapi lainnya. Antipsikotik merupakan obat yang biasa digunakan dalam pengobatan gangguan jiwa. Psikoterapi membantu pasien mengatasi gejala dan merencanakan strategi untuk menangani gangguan tersebut setiap hari.",
    image:
      "https://images.pexels.com/photos/5700205/pexels-photo-5700205.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Gangguan Kepribadian",
    deskripsi:
      "Gangguan kepribadian adalah kelainan yang mempengaruhi cara seseorang memandang dirinya sendiri dan orang lain. Beberapa jenis gangguan kepribadian antara lain gangguan kepribadian ambang, antisosial, dan narsistik.",
    gejala:
      "Gejala gangguan kepribadian antara lain kesulitan menjalin hubungan yang sehat, perilaku impulsif, dan perubahan suasana hati. Setiap jenis gangguan kepribadian memiliki gejala tertentu untuk membedakannya.",
    penyebab:
      "Penyebab gangguan kepribadian belum diketahui secara pasti, namun beberapa faktor yang dapat memicu gangguan kepribadian antara lain faktor genetik dan pengalaman hidup yang traumatis.",
    penanganan:
      "Penanganan gangguan kepribadian mencakup psikoterapi dan, dalam beberapa kasus, pengobatan. Psikoterapi membantu individu memahami  perilaku mereka, mengidentifikasi sumber konflik, dan mengembangkan strategi  mengatasi gangguan kepribadian. Terapi ini sering kali berfokus pada pengembangan keterampilan sosial dan emosional.",
    image:
      "https://images.pexels.com/photos/6382660/pexels-photo-6382660.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Obsessive-Compulsive Disorder (OCD)",
    deskripsi:
      "OCD adalah gangguan mental yang menyebabkan penderitanya memiliki pikiran obsesif dan perilaku kompulsif. Pikiran obsesif pada OCD bisa berupa kekhawatiran berlebihan atau ketakutan yang tidak beralasan, sedangkan perilaku kompulsif bisa berupa tindakan berulang yang dilakukan untuk mengurangi kekhawatiran atau ketakutan tersebut.",
    gejala:
      "Gejala OCD meliputi pikiran obsesif, perilaku kompulsif yang berulang, dan rasa khawatir yang berlebihan. Penderita OCD seringkali merasa terjebak dalam siklus pikiran dan tindakan yang sulit  dikendalikan.",
    penyebab:
      "Penyebab OCD belum diketahui secara pasti, namun beberapa faktor yang dapat memicu OCD antara lain faktor genetik dan perubahan kadar  kimia di otak.",
    penanganan:
      "Penanganan OCD merupakan kombinasi pengobatan dan psikoterapi. Antidepresan, terutama yang termasuk golongan inhibitor serotonin selektif dan norepinefrin, biasanya digunakan untuk mengobati gejala OCD. Terapi perilaku kognitif (CBT) yang berfokus pada paparan dan pencegahan respons adalah pengobatan yang efektif untuk OCD. Terapi ini membantu pasien mengatasi pikiran obsesif dan mengurangi perilaku kompulsif. ",
    image:
      "https://images.pexels.com/photos/6382648/pexels-photo-6382648.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Gangguan Mood",
    deskripsi:
      "Gangguan mood merupakan gangguan yang mempengaruhi suasana hati seseorang. Beberapa jenis gangguan mood antara lain depresi, gangguan bipolar, dan gangguan mood lainnya.",
    gejala:
      "Gejala gangguan mood antara lain perubahan suasana hati yang drastis, perubahan kebiasaan tidur dan makan, kelelahan, serta sulit berkonsentrasi. Pada gangguan mood seperti gangguan bipolar, orang mengalami periode depresi dan mania yang bergantian.",
    penyebab:
      "Penyebab gangguan mood belum diketahui secara pasti, namun beberapa faktor mungkin berkontribusi terhadap gangguan mood termasuk faktor genetik, perubahan kadar  kimia di otak, dan peristiwa kehidupan yang penuh stres. Faktor genetik memainkan peran penting dalam perkembangan gangguan mood. Jika ada riwayat  gangguan mood dalam keluarga, seseorang berisiko lebih tinggi terkena gangguan ini.",
    penanganan:
      "Penanganan untuk gangguan mood tergantung pada jenis gangguan yang dialami orang tersebut. Untuk depresi, pengobatannya meliputi terapi psikologis seperti CBT dan penggunaan antidepresan. Pada gangguan bipolar, penstabil suasana hati sering digunakan untuk mengendalikan episode manik dan depresi. Selain itu, dukungan sosial dan perubahan gaya hidup, seperti kebiasaan tidur dan makan yang teratur, juga dapat membantu mengatasi gangguan mood.",
    image:
      "https://images.pexels.com/photos/6382728/pexels-photo-6382728.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Edukasi = () => {
  const dataBannerCarousel = [
    {
      id: 1,
      title: "Depresi",
      desc: "Depresi adalah gangguan suasana hati yang menyebabkan penderitanya terus-menerus merasa sedih. Perasaan sedih pada depresi bisa berlangsung hingga berminggu-minggu atau berbulan-bulan.",
      image: "/assets/Homepage/depresi.png",
      link: "/edukasi/depresi",
    },
    {
      id: 2,
      title: "Kecemasan",
      desc: "Kecemasan merupakan perasaan khawatir atau takut  berlebihan terhadap suatu keadaan atau objek tertentu. Penyebab kecemasan tidak dapat ditentukan sendiri karena sangat kompleks.",
      image: "/assets/Homepage/anxiety.png",
      link: "/edukasi/kecemasan",
    },
    {
      id: 3,
      title: "Skizofrenia",
      desc: "Skizofrenia adalah gangguan mental berat yang dapat memengaruhi tingkah laku, emosi, dan komunikasi. Penderita skizofrenia bisa mengalami halusinasi, delusi, kekacauan berpikir, dan perubahan perilaku.",
      image: "/assets/Homepage/skizo.png",
      link: "/edukasi/skizofrenia",
    },
  ];

  const [dataArticles, setDataArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setDataArticles(dataArtikel);
    setLoading(false);
  }, []);

  return (
    <>
      <NavigationBar active='edukasi' />
      <div className='my-5 sm:my-8 lg:my-[5.5rem] flex flex-col justify-center items-center gap-8 sm:gap-12 lg:gap-16'>
        <CarouselBanner data={dataBannerCarousel} />
        {!loading ? (
          <>
            <div className='container grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8'>
              <div className='title w-[300px] sm:w-[600px] lg:text-start text-center'>
                <h1
                  className='text-lg sm:text-3xl lg:text-4xl font-semibold text-primary mb-2'
                  style={{ textShadow: "0.5px 0.5px 0.5px rgba(0,0,0,0.3)" }}
                >
                  Kenali Berbagai Gangguan Mental
                </h1>
                <p className='text-xs sm:text-lg'>
                  Ada berbagai macam gangguan mental dan cara penyembuhannya.
                  Baca artikel untuk menambah pengetahuan Anda
                </p>
              </div>
              {dataArticles.map((data) => (
                <>
                  <CardArticle
                    titleArticle={data.title}
                    imgArticle={data.image}
                    shortDesc={data.deskripsi.slice(0, 90)}
                    linkArticle={data.title}
                  />
                </>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className='loading'>Loading data...</div>
          </>
        )}
      </div>
    </>
  );
};

export default Edukasi;
