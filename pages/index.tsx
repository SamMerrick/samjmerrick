import Image from "next/image";
import Avatar from "../assets/avatar.jpg";
import ParticleBackground from "@/components/particlebackground";
import Card from "@/components/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center md:pt-32 pt-20 px-3 ">
      <ParticleBackground />
      <Card className="bg-white backdrop-blur-md bg-opacity-10 max-w-xl w-full flex flex-col items-start p-12 rounded-[2.5rem] space-y-5 z-10">
        <Image
          src={Avatar}
          alt="Avatar"
          className="rounded-full max-w-[200px] border-4"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          Sam Merrick
        </h1>
        <h2 className="text-xl md:text-2xl">Product Engineer</h2>
        <h2 className=" text-neutral-400">
          I transform ideas into captivating app and web experiences that
          deliver customer and commercial value
        </h2>
        <a
          href="mailto:sam@zero-1.studio"
          className="rounded-full py-4 bg-neutral-700 hover:bg-neutral-600 transition-colors px-8 font-semibold text-lg"
        >
          Get in touch
        </a>
      </Card>
    </main>
  );
}
