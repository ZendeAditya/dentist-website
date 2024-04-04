import Image from "next/image";
import React from "react";
import img from "@/public/assets/hero1.jpg";

const About = () => {
  return (
    <main className="aboutImg  px-3 py-5 ">
      <section className="mx-5 my-5 border-2 max-h-fit rounded-tr-3xl rounded-bl-3xl p-5 text-white flex items-center justify-between flex-col lg:flex-row">
        <section className="">
          <h2 className=" font-semibold text-4xl py-5">Dentistry Done Right</h2>
          <p className="py-5 text-2xlj">
            Adults and kids, we welcome patients of all ages! Our team is
            passionate about building lifetime relationships through positive
            experiences, featuring:
          </p>
          <ul className="flex flex-col gap-4 px-10 py-6 text-lg list-disc">
            <li>Transparent Pricing</li>
            <li>Unparalled Warrenty</li>
            <li>Free whitening(for life!)</li>
          </ul>
          <p className="px-2 text-xl relative before:absolute before:w-1 before:h-16 before:-mx-3 before:bg-yellow-400">
            {'"'}Our word is our worth. We promise to do it right, timely, and
            <br /> for a fair price.{'"'}
          </p>
        </section>
        <section className="py-5">
          <Image src={img} alt="About Image" className="rounded-md w-auto" />
        </section>
      </section>
    </main>
  );
};

export default About;
