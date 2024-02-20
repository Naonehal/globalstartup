import Image from "next/image";

export default function Home() {
  return (
      <div className="relative w-full min-h-screen flex items-center justify-center bg-black font-serif">
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-40">
        {/* Using standard img tag for static image rendering */}
        <img
          src="/background.jpg"
          alt="Cityscape background"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="z-10 text-center p-4">
        <p className="text-white md:text-2xl text-xl mb-5 md:mb-10 tracking-widest animate-jump-in animate-once animate-ease-linear">Welcome to <br />GlobalStartup</p>
        <h1 className="text-white md:text-9xl text-6xl font-semibold tracking-wide animate-pulse">Coming Soon</h1>
        <p className="text-white md:text-4xl text-2xl mt-6 md:mt-12">Your Gateway to Success in Canada!</p>
      </div>
    </div>
  );
}
