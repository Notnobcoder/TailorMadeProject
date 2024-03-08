import Link from "next/link";
import { GoPerson } from "react-icons/go";
import { IoSearchOutline, IoHeartOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useMediaQuery } from "react-responsive";

export const VideoHeader = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 500px)" });
  return (
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

      <div className="absolute top-0 p-4 transition-all hover:bg-white w-full flex items-center text-white hover:text-black justify-between px-4 ">
        <div>
          <h3 className="lg:text-3xl">Heading </h3>
        </div>
        <div className="flex items-center gap-4 ">
          <IoSearchOutline size={19} />
          <GoPerson size={19} />
          <Link href="/wishlist">
            <IoHeartOutline size={19} />
          </Link>
          <Link href="/add-to-cart">
            <MdOutlineShoppingBag size={19} />
          </Link>
        </div>
      </div>
    </div>
  );
};
