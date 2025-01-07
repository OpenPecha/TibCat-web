import { Link, useLoaderData } from "@remix-run/react";
import Button from "~/components/Buttons";

export default function Home() {
  const { user } = useLoaderData()
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
      <Button color="neutral" className=" py-2 px-4 my-10">
        <Link to={user ? "/dashboard" : "/login"}> Get Started </Link>
      </Button>
      <img src="/assets/hero.png" alt="hero" className="w-full" />
    </div>
  );
}
