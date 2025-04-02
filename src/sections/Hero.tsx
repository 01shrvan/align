import cogImage from "@/assets/cog.png";
import Image from "next/image";
// import { BentoSection } from "@/sections/Bentosection";

export const Hero = () => {
  return (
    <>
      <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
        <div className="container">
          <div className="md:flex items-center">
            <div className="md:w-[478px]">
              <div className="text-blue-900 text-sm inline-flex items-center bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full tracking-tight shadow-md border border-blue-100/50">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-[pulse_2s_infinite]" />
                Align is here
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
                Connect Deeper, Match Smarter
              </h1>
              <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                Align's got your back with AI-driven vibes, microblogs and streaks to keep it real. For Gen Z creators who crave connections that actually matter
              </p>
            </div>
            <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
              <Image
                src={cogImage}
                alt="Cog Image"
                className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 transition-transform hover:scale-105 duration-700"
              />
              {/* <Image
                src={cylinderImage}
                width={220}
                height={220}
                alt="cylinder image"
                className="hidden md:block -top-8 -left-32 md:absolute"
              />
              <Image
                src={noodleImage}
                width={220}
                alt="noodle image"
                className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
              /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
