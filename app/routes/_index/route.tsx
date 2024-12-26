import type { MetaFunction } from "@remix-run/node";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Dashhero from "./components/Dashhero";

export const meta: MetaFunction = () => {
  return [
    { title: "Tibetan cat tool" },
    { name: "tibetan cat tool", content: "tibetan monlam cat tool" },
  ];
};

export default function Index() {
  return (
    <div className="">
      <Home />
      <About />
      <Dashhero />
      <Footer />
    </div>
  );
}

