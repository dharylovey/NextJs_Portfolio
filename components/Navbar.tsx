"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/data";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav((prevNav) => !prevNav);
  };

  const handleClickMenu = (event: any) => {
    event.stopPropagation();
    setNav(false)
  }
  return (
    <header className=" absolute z-10 w-full h-12 py-8 px-30">
      <nav className="flex items-center justify-between mx-6 md:mx-8 xl:mx-8 2xl:mx-auto max-container ">
        <div className="flex text-3xl text-slate-700 ">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src={"/image/logo.svg"}
              width={60}
              height={60}
              alt="logo"
              className="mr-2 text-slate-700 grayscale"
            />
            <h1 className="text-slate-700">DharyL</h1>
          </Link>
        </div>

        <ul className="flex justify-end flex-1 gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="py-4 text-2xl leading-normal transition duration-1000 ease-in-out text-slate-700 font-monserrat text-slate-gray hover:border-b-2 hover:border-slate-600"
                onClick={handleClick}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button className="hidden max-lg:block" onClick={handleClick}>
          {nav ? (
            <Image
              src="/image/close.svg"
              width={30}
              height={30}
              alt="hamburger"
              className="transition duration-1000 ease-in-out text-slate-700"
            />
          ) : (
            <Image
              src="/image/hamburger.svg"
              width={30}
              height={30}
              alt="hamburger"
              className="transition duration-1000 ease-in-out text-slate-700"
            />
          )}

          <div className={`${nav ? 'flex' : 'hidden'} absolute top-20 inset-x-0 mx-4 my-2 min-w-[140px] rounded-xl`}>
            <ul className="flex flex-col justify-end flex-1 gap-2 p-5 bg-white rounded-2xl">
              {navLinks.map((link) => (
                <li 
                  className='mb-2'
                  key={link.label}>
                  <Link
                    href={link.href}
                    onClick={handleClickMenu}
                    className="py-4 text-2xl leading-normal transition duration-1000 ease-in-out text-slate-700 font-monserrat text-slate-gray hover:border-b-2 hover:border-slate-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </button>


      </nav>
    </header>
  );
};

export default Navbar;


