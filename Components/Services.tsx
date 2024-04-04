import Image from "next/image";
import React from "react";
import services1 from "@/public/assets/services/services1.jpg";
import services2 from "@/public/assets/services/services2.jpg";
import services3 from "@/public/assets/services/services3.jpg";
const Services = () => {
  return (
    <main className="bg-[#F4F6F3]  mt-32 h-full">
      <section className="w-screen h-full">
        <h2 className="text-center text-5xl pt-28 md:px-20">
          Comprehensive care, one convenient location
        </h2>
        <div className="flex items-center justify-between px-16 py-10 flex-wrap md:justify-center md:gap-4 gap-2">
          <div className="w-96 h-full p-3 rounded-lg hover:shadow-2xl hover:cursor-pointer hover:-translate-y-3 hover:duration-500 hover:ease-in border-2 md:w-[32rem]">
            <Image
              src={services1}
              alt="servieces1 image"
              className="rounded-xl"
            />
            <div>
              <h2 className="text-2xl font-semibold py-5">General</h2>
              <p className="py-4 text-lg">
                Everything you expect and then some. Cleanings, fillings, and
                x-rays are just the beginning.
              </p>
              <button className="py-3 border-2 border-yellow-300 hover:bg-yellow-500 w-40 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-96 h-full p-3 rounded-lg hover:shadow-2xl hover:cursor-pointer hover:-translate-y-3 hover:duration-500 hover:ease-in border-2 md:w-[32rem]">
            <Image
              src={services2}
              alt="servieces1 image"
              className="rounded-xl "
            />
            <div>
              <h2 className="text-2xl font-semibold py-5">General</h2>
              <p className="py-4 text-lg">
                Discover your “wow!” factor. Invisalign, veneers, and in-office
                or take-home teeth whitening.
              </p>
              <button className="py-3 border-2 border-yellow-300 hover:bg-yellow-500 w-40 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-96 h-full p-3 rounded-lg hover:shadow-2xl hover:cursor-pointer hover:-translate-y-3 hover:duration-500 hover:ease-in border-2 md:w-[32rem]">
            <Image
              src={services3}
              alt="servieces1 image"
              className="rounded-xl "
            />
            <div>
              <h2 className="text-2xl font-semibold py-5">General</h2>
              <p className="py-4 text-lg">
                We can fix anything. Our dentists repair damaged or lost teeth
                with cutting-edge implants and more.
              </p>
              <button className="py-3 border-2 border-yellow-300 hover:bg-yellow-500 w-40 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
