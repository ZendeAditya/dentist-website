import React from "react";

const CTA = () => {
  return (
    <main className="w-screen h-full relative my-2 ">
      <section className="bg-gradient-to-br from-blue-400 to-pink-300 flex items-center justify-center flex-col py-9 px-5 text-center">
        <h2 className="text-5xl py-5 font-semibold">Book your visit online</h2>
        <p className="text-xl py-5">
          View available appointments and enjoy dentistry done right. +FREE
          teeth whitening for life.
        </p>
        <button className="bg-yellow-300 py-4 font-semibold text-lg rounded w-52">
          Book Online
        </button>
      </section>
    </main>
  );
};

export default CTA;
