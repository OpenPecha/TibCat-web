export default function Home() {
  return (
    <div className="flex flex-col items-center justify-around mt-10">
      <div>
        <div className="text-3xl font-semibold">
          Bridging Tibetan to the World
        </div>
        <div className="text-center text-3xl font-semibold">
          One Word at a Time
        </div>
      </div>
      <div className="text-md font-medium">
        Empowering Tibetan Translators, Connecting Cultures
      </div>
      <button className="bg-secondary-800 hover:bg-secondary-900 text-white font-bold py-2 px-4 rounded-xl my-10">
        Get Started
      </button>
      <img src="/assets/hero.png" alt="hero" className="w-full" />
    </div>
  );
}
