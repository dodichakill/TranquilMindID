import Headline from "@app/rekomendasi/Headline";
import NavigationBar from "@components/NavigationBar";

import React from "react";
import ListProfesional from "./ListProfesional";
import FooterSection from "@components/FooterSection";
import ButtonBackTop from "@components/ButtonBackTop";
const Rekomendasi = async () => {
  return (
    <>
      <NavigationBar active="rekomendasi" />
      <Headline />
      <ListProfesional />
      <FooterSection />
      <ButtonBackTop />
    </>
  );
};

export default Rekomendasi;
