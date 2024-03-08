import { ProductCard } from "@/components/productCard";
import Image from "next/image";
import Link from "next/link";

export interface AddToCartProps {}

const Menu = () => {
  return (
    <>
      <div className="bg-[#041e3a] flex items-center justify-center py-4">
        <div className="flex items-center text-white text-xs gap-2">
          <h3>Free Standard Delivery</h3>
          <p className="underline">Details</p>
        </div>
      </div>
      <div className="relative">
        <Link href="/">
          <Image
            className="w-full h-[60vh]"
            src={"/video/testImage/polo.webp"}
            width={200}
            height={400}
            alt="image"
          />
        </Link>
        {/* header bottom */}
      </div>
      <div className="container my-4">
        <h4 className=" text-4xl font-bold">Products</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 lg:grid-cols-3">
          {/* card */}
          {[1, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 7].map((i, key) => (
            <div key={key}>
              <ProductCard />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
