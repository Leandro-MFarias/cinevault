import { Carousel } from "../Carousel";
import { Populares } from "../Populares";
import { TopRate } from "../TopRate";

export function Home() {
  return (
    <div className="mb-3 ">
      <h1 className="text-zinc-50 text-3xl px-8 py-10 ml-6 absolute z-10 font-bold">
        Cinevault
      </h1>

      <Carousel />

      <div className="mt-5 space-y-10">
        <TopRate />
        <Populares />
      </div>
    </div>
  );
}
