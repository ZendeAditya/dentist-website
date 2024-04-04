import React from "react";

const Insurance = () => {
  return (
    <main className="w-screen h-full lg:p-40 p-8">
      <section className="border-[3px] border-[#A2BFC9]  rounded-tl-3xl rounded-br-3xl flex items-center justify-between flex-wrap">
        <div className="p-8 text-[#578a9b]">
          <h2 className="uppercase py-5 text-xl">Transparent Pricing</h2>
          <h1 className="text-4xl py-3">No Suprises</h1>
          <p className="text-xl">
            Our team believes in accessible dental care. We offer
            straightforward pricing, clear estimates, and an unprecedented
            dental warranty. Keep up with your routine 6-month checkups and if
            something needs fixing, {"we’ll"} handle it at no cost to you.
          </p>
        </div>
        <div className="bg-[#266980] text-white h-full p-9 rounded-br-3xl relative">
          <h2 className="text-3xl lg:text-6xl lg:py-4">Insurance</h2>
          <p className="py-5  text-xl">
            Our office is in-network with Delta Premier and bills all other
            providers. Our team will explain how your specific dental benefits
            apply to the cost of treatment.
          </p>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-dental absolute bottom-0"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5.5c-1.074 -.586 -2.583 -1.5 -4 -1.5c-2.1 0 -4 1.247 -4 5c0 4.899 1.056 8.41 2.671 10.537c.573 .756 1.97 .521 2.567 -.236c.398 -.505 .819 -1.439 1.262 -2.801c.292 -.771 .892 -1.504 1.5 -1.5c.602 0 1.21 .737 1.5 1.5c.443 1.362 .864 2.295 1.262 2.8c.597 .759 2 .993 2.567 .237c1.615 -2.127 2.671 -5.637 2.671 -10.537c0 -3.74 -1.908 -5 -4 -5c-1.423 0 -2.92 .911 -4 1.5z" />
            <path d="M12 5.5l3 1.5" />
          </svg> */}
        </div>
      </section>
    </main>
  );
};

export default Insurance;
