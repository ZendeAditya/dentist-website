import React from "react";

import Image from "next/image";
import brand1 from "@/public/assets/brands/brand1.png";
import brand2 from "@/public/assets/brands/brand2.png";
import brand3 from "@/public/assets/brands/brand3.png";
import brand4 from "@/public/assets/brands/brand4.png";
import brand5 from "@/public/assets/brands/brand5.png";
const Brands = () => {
  return (
    <main>
      <section className="flex items-center justify-between gap-3 flex-wrap lg:p-16 py-5 p-10">
        <Image
          src={brand1}
          alt="brand1"
          className="w-52 h-52 object-contain py-2"
        />
        <Image
          src={brand2}
          alt="brand2"
          className="w-52 h-52 object-contain py-2"
        />
        <Image
          src={brand3}
          alt="brand3"
          className="w-52 h-52 object-contain py-2"
        />
        <Image
          src={brand4}
          alt="brand4"
          className="w-52 h-52 object-contain py-2"
        />
        <Image
          src={brand5}
          alt="brand5"
          className="w-52 h-52 object-contain py-2"
        />
      </section>
    </main>
  );
};

export default Brands;
