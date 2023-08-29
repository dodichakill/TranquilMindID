import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-bold">TranquilMind.id</h1>
      <Image
        src="/assets/Homepage/beam-online-medical-consultation.gif"
        width={350}
        height={350}
      />
      <p className="text-xl">Let's we build this web...</p>
    </main>
  );
}
