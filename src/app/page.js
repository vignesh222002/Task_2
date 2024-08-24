import Asset from "@/Component/assetComponent";
import Product from "@/Component/productComponent";
import Slider from "@/Component/sliderComponent";

export default function Home() {
  return (
    <div className="p-4 md:p-10">
      <div className="flex flex-col gap-5 md:gap-14">
        <Slider />
        <Asset />
        <Product />
      </div>
    </div>
  );
}
