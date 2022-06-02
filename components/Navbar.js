import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  return (
    <div className="h-[43px] font-poppins lg:h-[111px] navbar-shadow z-20 relative">
      <div className="hidden lg:flex h-full items-center justify-between px-10 max-w-[1800px] m-auto">
        <div className="flex items-center gap-6">
          <Image src="/logo.png" width="112" height="76" />
          <Link href="#features">Features</Link>
          <Link href="https://marketplace.glamplus.in/">Beauty Products</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about.html">About</Link>
          <Link href="/careers.html">Careers</Link>
        </div>
        <div>
          <Link href="https://app.glamplus.in">Log In</Link>
          <button className="free-btn ml-8 h-[66px] w-[197px]">Try For Free</button>
        </div>
      </div>
      <div className="flex h-full px-6 items-center justify-between lg:hidden">
        <Image src="/logo.png" width="44" height="28" />
        <Image onClick={() => setToggleNavbar(true)} src="/menu.png" width="17" height="17" />
      </div>

      {/* Pop out Navigation */}
      <div
        className={`fixed top-0 right-0 bottom-0 left-0 backdrop-blur-sm z-10 duration-300 ${
          toggleNavbar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="absolute top-0 right-0 bottom-0 w-10/12 bg-white drop-shadow-2xl">
          <li className="flex items-center justify-center my-2">
            <Image src="/logo.png" width="54" height="38" />
          </li>
          <li className="border-b border-inherit">
            <Link href="#features">
              <a className="block p-4">Features</a>
            </Link>
          </li>
          <li className="border-b border-inherit">
            <Link href="https://marketplace.glamplus.in/">
              <a className="block p-4">Beauty Products</a>
            </Link>
          </li>
          <li className="border-b border-inherit">
            <Link href="#">
              <a className="block p-4">Pricing</a>
            </Link>
          </li>
          <li className="border-b border-inherit">
            <Link href="/about.html">
              <a className="block p-4">About</a>
            </Link>
          </li>
          <li className="border-b border-inherit">
            <Link href="/careers.html">
              <a className="block p-4">Careers</a>
            </Link>
          </li>
          <li className="border-b border-inherit">
            <Link href="https://app.glamplus.in">
              <a className="block p-4">Log In</a>
            </Link>
          </li>
          <li className="border-b border-inherit">
            <Link href="#">
              <a className="block p-4 bg-primary text-white text-center rounded-lg m-4">Try for Free</a>
            </Link>
          </li>
        </ul>
        <button
          className="absolute top-2 right-0 bottom-0 left-2 w-[30px] h-[20px]"
          onClick={() => setToggleNavbar(false)}
        >
          &#x2715;
        </button>
      </div>
    </div>
  );
}

export default Navbar;
