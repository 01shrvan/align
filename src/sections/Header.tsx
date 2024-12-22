import Link from "next/link";
import ArrowRight from "@/assets/arrow-right.svg";
import ShimmerButton from "@/components/ui/shimmer-button";

export const Header = () => {
  return (
    <header className="z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Forge meaningful connections with AI-powered matchmaking and engaging microblogs.</p>
        <div className="inline-flex gap-1 items-center group cursor-pointer transition-colors duration-200 ease-in-out hover:text-white/80">
          <p className="group-hover:underline">Join now</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
        </div>
      </div>
      <div className="py-5 flex justify-center">
        <div className="w-[95%] max-w-6xl rounded-xl bg-gray-100/90 shadow-md p-2">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-2xl text-gray-800">αʟιɢи</h1>
            <nav className="flex items-center">
              <Link href="#">
                <ShimmerButton>Get Started</ShimmerButton>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
