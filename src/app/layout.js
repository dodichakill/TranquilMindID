import "@/styles/globals.css";
import ButtonBackTop from "@components/ButtonBackTop";
import FooterSection from "@components/FooterSection";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TranquilMind.id",
  description:
    "Panduan dan dukungan untuk menjelajahi kedamaian dalam kesehatan mental dan Jiwamu melalui artikel, podcast, kiat praktis dan tenaga profesional. Transformasi menuju ketenangan batin dimulai di sini.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
