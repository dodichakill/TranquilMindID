import NavigationBar from "@components/NavigationBar";
import Background from "./Background";
import Features from "./Features";
import Headline from "./Headline";
import Teams from "./Teams";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
export default async function Tentang() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <>
      <NavigationBar active="" user={user} />
      <Headline />
      <Background />
      <Features />
      <Teams />
    </>
  );
}
