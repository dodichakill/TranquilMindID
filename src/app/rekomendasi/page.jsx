import Headline from "@app/rekomendasi/Headline";
import NavigationBar from "@components/NavigationBar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import React from "react";
import ListProfesional from "./ListProfesional";
const Rekomendasi = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <NavigationBar active="rekomendasi" user={user} />
      <Headline />
      <ListProfesional />
    </>
  );
};

export default Rekomendasi;
