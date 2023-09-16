import NavigationBar from "@components/NavigationBar";
import Background from "./Background";
import Features from "./Features";
import Headline from "./Headline";
import Teams from "./Teams";

export default async function Tentang() {
  return (
    <>
      <NavigationBar active="" />
      <Headline />
      <Background />
      <Features />
      <Teams />
      <FooterSection />
      <ButtonBackTop />
    </>
  );
}
