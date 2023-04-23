import Image from "next/image";
import Avatar from "../assets/avatar.jpg";
import ParticleBackground from "@/components/particlebackground";
import Card from "@/components/card";

import TwitterIcon from "../assets/icons/twitter.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";
import EmailIcon from "../assets/icons/envelope-solid.svg";
import CalIcon from "../assets/icons/calendar-regular.svg";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sam Merrick - Freelance Developer</title>
        <meta
          name="description"
          content="I transform ideas into captivating digital experiences that deliver
          customer and commercial value"
          key="desc"
        />
      </Head>

      <main className="flex min-h-screen flex-col items-center md:pt-32 pt-20 px-3 bg-gradient-to-b from-gray-700 via-gray-900 to-black ">
        <ParticleBackground />
        <Card className="bg-neutral-900 backdrop-blur-md bg-opacity-50 max-w-xl w-full flex flex-col items-start p-12 rounded-[2.5rem] space-y-5 z-10 shadow-2xl">
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
            href="https://cal.com/samjmerrick/hello"
            className="rounded-full py-3 bg-neutral-800 bg-opacity-70 hover:bg-neutral-800 transition-colors px-6 font-semibold text-lg flex flex-row justify-center"
          >
            <Image src={CalIcon} alt="Calendar" className="w-4" />
            <p className="pl-4">Book a meeting</p>
          </a>

          <span className="w-full h-[1px] bg-neutral-700 rounded-full"></span>

          <div className="flex flex-row space-x-3">
            <SocialIcon
              src={TwitterIcon}
              alt="Twitter"
              href="https://twitter.com/samjmerrick"
            />
            <SocialIcon
              src={LinkedinIcon}
              alt="Twitter"
              href="https://linkedin.com/in/samjmerrick"
            />
            <SocialIcon
              src={EmailIcon}
              alt="Twitter"
              href="mailto:sam@zero-1.studio"
            />
          </div>
        </Card>
      </main>
    </>
  );
}

function SocialIcon(props: { src: string; alt: string; href: string }) {
  return (
    <a
      href={props.href}
      className="rounded-full p-3 bg-neutral-800 bg-opacity-70 hover:bg-neutral-800 transition-colors font-semibold text-lg flex items-center justify-center"
    >
      <Image src={props.src} alt={props.alt} className="w-6 text-white" />
    </a>
  );
}
