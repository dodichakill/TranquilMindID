import Headline from "@app/rekomendasi/Headline";
import NavigationBar from "@components/NavigationBar";

import React from "react";
import ListProfesional from "./ListProfesional";
const Rekomendasi = async () => {
  return (
    <>
      <NavigationBar active="rekomendasi" user={user} />
      <Headline />
      <ListProfesional />
    </>
  );
};

export default Rekomendasi;
