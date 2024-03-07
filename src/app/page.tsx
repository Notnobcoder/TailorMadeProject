"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { GoPerson } from "react-icons/go";
import { IoSearchOutline, IoHeartOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";

export default function Home() {
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
        <video muted loop autoPlay className="w-full h-full">
          <source src="/video/opt11.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 p-4 transition-all hover:bg-white w-full flex items-center text-white hover:text-black justify-between px-4 ">
          <div className="flex items-center gap-8">
            <h3 className="text-3xl">Ralph Laurin</h3>
            <div className="flex items-center text-sm gap-4 ">
              <p>Men</p>
              <p>Women</p>
              <p>Kids</p>
              <p>Discover</p>
            </div>
          </div>
          <div className="flex items-center gap-4 ">
            <IoSearchOutline size={19} />
            <GoPerson size={19} />
            <IoHeartOutline size={19} />
            <MdOutlineShoppingBag size={19} />
          </div>
        </div>
        {/* header bottom */}
        <div className="absolute bottom-20 text-white left-0 right-0 m-auto flex items-center justify-center flex-col ">
          <h4 className="text-8xl">POLO</h4>
          <p className="text-4xl">Ralph Laurin</p>
          <h2 className="text-7xl">Heritage Icons</h2>
        </div>
      </div>
      {/* signature styles */}
      <div className="relative">
        <Image
          className="w-full h-[90vh]"
          src={"/video/testImage/back.avif"}
          width={300}
          height={300}
          alt="image"
        />
        <div className="absolute top-40 left-20">
          <Link href="/menu">
            <Image
              src={"/video/testImage/t1.webp"}
              alt="alternamte image"
              width={400}
              height={400}
            />
          </Link>
          <Button>hellot</Button>
        </div>
      </div>
    </div>
  );
}
