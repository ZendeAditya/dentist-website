import React from "react";
const Hero = () => {
  return (
    <main>
      <section className="heroImg w-full h-screen object-cover bg-no-repeat bg-cover">
        <div className="flex items-start justify-center flex-col h-screen px-8 ">
          <h2 className="text-2xl py-4">TRUSTED DENVER TECH CENTER DENTISTS</h2>
          <h1 className=" text-5xl py-5">
            Exceptional care <br className="lg:hidden" /> for all ages
          </h1>
          <button className="py-4 w-52 font-semibold text-lg rounded-md bg-yellow-300 hover:bg-yellow-400">
            Book Online
          </button>
          <p className="text-xl py-3 uppercase">
            or call <a href="tel:+911234567890">12334567890</a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Hero;
