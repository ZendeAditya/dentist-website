import React from "react";
import c1 from "@/public/assets/clinic/c1.jpg";
import c2 from "@/public/assets/clinic/c2.jpg";
import c3 from "@/public/assets/clinic/c3.jpg";
import c4 from "@/public/assets/clinic/c4.jpg";
import Image from "next/image";
const ClinicOverview = () => {
  return (
    <main className=" bg-[#F4F6F3] p-8 flex items-center justify-between flex-col lg:flex-row">
      <div className="w-full">
        <div className="flex items-center justify-evenly gap-2">
          <Image src={c1} alt="Clinic Overview" className="w-72 h-96" />
          <Image
            src={c2}
            alt="Clinic Overview 1"
            className="w-72 h-96 rounded-tr-3xl "
          />
        </div>
        <div className="flex items-center justify-evenly gap-2 py-2">
          <Image src={c3} alt="Clinic Overview 2" className="w-72 h-80" />
          <Image
            src={c4}
            alt="Clinic Overview 3"
            className="w-72 h-80 rounded-br-3xl "
          />
        </div>
      </div>
      <div className="w-full">
        <h2 className="p-5 text-5xl">Visit Us</h2>
        <p className="text-xl  py-5">
          We’re conveniently located in the Denver Tech Center area. Find us on
          the 4th floor of the Triad Office Park building. Plenty of free
          parking available.
        </p>
        <div className="flex gap-2 py-5 items-center text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin text-yellow-400"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
          </svg>
          <p>
            5670 Greenwood Plaza Blvd., Suite 404 Greenwood Village, CO 80111
          </p>
        </div>
        <div className="flex gap-2 py-5 items-center text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-clock text-yellow-400"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M12 7v5l3 3" />
          </svg>
          <p>Monday–Thursday: 7AM–3PM</p>
        </div>
      </div>
    </main>
  );
};

export default ClinicOverview;
