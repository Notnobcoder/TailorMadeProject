"use client";

import { MultiCarousel } from "@/components/multiCarousel";
import { VideoHeader } from "@/components/videoHeader";
import Image from "next/image";
import Link from "next/link";

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
      {/*  video component */}
      <VideoHeader />
      {/* Signature Styles */}
      <div className="my-4 relative">
        <Image
          className="w-full h-[90vh]"
          src="/video/testImage/backN.jpeg"
          alt="product image"
          width={300}
          height={300}
        />
        <div className="absolute flex items-center top-8 lg:left-8">
          <Link href="/menu">
            <Image
              className="w-[604px] h-[637px] object-contain"
              src="/video/testImage/t1.webp"
              alt="product image"
              width={300}
              height={300}
            />
          </Link>
        </div>
      </div>

      {/* more to explore */}
      <div className="h-[70vh] my-4 items-center grid grid-cols-3">
        {/* first */}
        <div className="hidden lg:flex flex-col items-start col-span-1 justify-center px-7  h-[70vh]">
          <h4 className="text-3xl">More To</h4>
          <h6 className="text-6xl">Explore</h6>
          <p className="text-3xl">
            Discover curated edits and seasonal collections
          </p>
        </div>
        <div className="lg:hidden ml-4 col-span-3">
          <h4 className="text-4xl">More To Explore</h4>
        </div>
        <div className="col-span-3 lg:col-span-2">
          <MultiCarousel />
        </div>
      </div>

      {/* footer */}
    </div>
  );
}
