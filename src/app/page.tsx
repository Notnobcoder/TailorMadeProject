"use client";

import { GoPerson } from "react-icons/go";
import { IoSearchOutline, IoHeartOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 500px)" });
  return (
    <div>
      {/* stripper */}
      <div className="bg-[#041e3a] flex items-center justify-center py-4">
        <div className="flex items-center text-white text-xs gap-2">
          <h3>Free Standard Delivery</h3>
          <p className="underline">Details</p>
        </div>
      </div>

      <div className="relative">
        {isTabletOrMobile && (
          <video muted loop autoPlay className="w-full h-auto">
            <source src="/video/pv.mp4" type="video/mp4" />
          </video>
        )}

        {isBigScreen && (
          <video muted loop autoPlay className="w-full h-auto">
            <source src="/video/opt11.mp4" type="video/mp4" />
          </video>
        )}

        <div className="absolute bg-yellow-500 top-0 p-4 transition-all hover:bg-white w-full flex items-center text-white hover:text-black justify-between px-4 ">
          <div className="flex items-center gap-4 ">
            <IoSearchOutline size={19} />
            <GoPerson size={19} />
            <IoHeartOutline size={19} />
            <MdOutlineShoppingBag size={19} />
          </div>
        </div>
      </div>
      {/* signature styles */}
      {/* <div className="relative"> */}
      {/*   <Image */}
      {/*     className="w-full h-[90vh]" */}
      {/*     src={"/video/testImage/back.avif"} */}
      {/*     width={300} */}
      {/*     height={300} */}
      {/*     alt="image" */}
      {/*   /> */}
      {/*   <div className="absolute top-40 left-20"> */}
      {/*     <Link href="/menu"> */}
      {/*       <Image */}
      {/*         src={"/video/testImage/t1.webp"} */}
      {/*         alt="alternamte image" */}
      {/*         width={400} */}
      {/*         height={400} */}
      {/*       /> */}
      {/*     </Link> */}
      {/*     <Button>hellot</Button> */}
      {/*   </div> */}
      {/* </div> */}
    </div>
  );
}
