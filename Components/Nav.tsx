"use client";
import React, { useState } from "react";
import dentistLogo from "@/public/assets/dentsitLogo.png";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu, RxMinus, RxPlus } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
const Nav = () => {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const handleHide = () => {
    setHide(!hide);
  };
  const handleNav = () => {
    setOpen(!open);
  };
  const menuItems = [
    {
      title: "About",
      items: [
        { name: "Meet the doctors", link: "/meet-the-doctors" },
        { name: "before and after", link: "/before-and-after" },
        { name: "careers", link: "/careers" },
        { name: "faq", link: "/faq" },
        { name: "fee-for-services dentist", link: "/fee-for-services-dentist" },
        { name: "dental technology", link: "/dental-technology" },
        { name: "blog", link: "/blog" },
      ],
    },
    {
      title: "Services",
      items: [
        { name: "General Dentistry", link: "/general-dentistry" },
        { name: "Cosmetic Dentistry", link: "/cosmetic-dentistry" },
        { name: "surgical", link: "/surgical" },
        { name: "problem we treat", link: "/pediatric-dentistry" },
      ],
    },
    {
      title: "New Patients",
      items: [
        { name: "Payment option", link: "/payment-option" },
        { name: "Patient Comfort", link: "/patient-comfort" },
        { name: "free whitening", link: "/free-whitening" },
      ],
    },
  ];

  return (
    <main>
      <nav className=" h-20  border-b-2 shadow-lg flex items-center justify-between relative ">
        <section>
          <Image
            src={dentistLogo}
            alt="company Logo"
            className="w-52 h-20 object-contain py-3 px-3"
          />
        </section>
        <section className=" px-5">
          <button onClick={handleNav}>
            {open ? <RxCross2 size={28} /> : <RxHamburgerMenu size={28} />}
          </button>
        </section>
        <ul
          className={`${
            open ? "block" : "hidden"
          } px-5 uppercase absolute right-0 flex-col bg-white shadow-lg border-2 h-screen top-20  w-60 gap-52 `}
        >
          {menuItems.map((category, index) => (
            <li key={index} className="py-6">
              <div className={`flex items-center justify-between py-2`}>
                <Link href={"/"}>{category.title}</Link>
                <button onClick={handleHide}>
                  {hide ? <RxMinus className="cursor-pointer" /> : <RxPlus />}
                </button>
              </div>
              <ul className={`px-4 ${hide ? "block" : "hidden"}`}>
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li>
            <button className="py-2 px-8 rounded-md bg-yellow-400 hover:bg-yellow-500">
              Book Online
            </button>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Nav;
