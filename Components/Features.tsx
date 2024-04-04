import React from "react";

type Props = {};

const Features = (props: Props) => {
  return (
    <main className="bgImg w-screen h-screen bg-no-repeat bg-center bg-cover">
      <section className="flex items-center justify-center lg:justify-end lg:px-10 min-h-screen">
        <div
          className="p-9 md:w-[43rem] rounded-tl-3xl rounded-br-3xl md:h-96
        h-[30rem] bg-white mx-5"
        >
          <h2 className="uppercase py-4 text-lg">free whitening</h2>
          <h2 className="text-3xl lg:text-6xl">Whitening for life</h2>
          <ul className="flex items-start justify-normal flex-col gap-4 list-disc m-3 text-lg">
            <li>Visit Village Dental for a new patient cleaning and exam</li>
            <li>Take home a complimentary custom whitening kit</li>
            <li>
              Book a cleaning every 6 months and {"we'll"} refill your whitening
              gel
            </li>
          </ul>
          <button className=" my-2 px-10 py-4 rounded-md bg-yellow-300 text-white  hover:bg-yellow-400">
            Book Online
          </button>
        </div>
      </section>
    </main>
  );
};

export default Features;
