import Image from "next/image";
export const ProductCard = () => {
  return (
    <>
      <div>
        <Image
          className="w-full h-[400px] lg:h-[600px]"
          src={"/video/testImage/t1.webp"}
          width={200}
          height={400}
          alt="Image"
        />
      </div>
    </>
  );
};
