import Headline from "@app/rekomendasi/Headline";
import NavigationBar from "@components/NavigationBar";

import React from "react";
import ListProfesional from "./ListProfesional";
const Rekomendasi = async () => {
  return (
    <>
      <NavigationBar active="rekomendasi" />
      <Headline />
      <ListProfesional />
    </>
  );
};

export default Rekomendasi;
