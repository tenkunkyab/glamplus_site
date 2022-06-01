import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="h-[43px] lg:h-[111px] navbar-shadow z-20 relative">
      <div className="hidden lg:flex h-full items-center justify-between px-10 max-w-[1800px] m-auto">
        <div className="flex items-center gap-6">
          <Image src="/logo.png" width="112" height="76" />
          <Link href="/">Features</Link>
          <Link href="/#">Beauty Products</Link>
          <Link href="/#">Pricing</Link>
          <Link href="/#">About</Link>
          <Link href="/careers">Careers</Link>
        </div>
        <div>
          <Link href="/#">Log In</Link>
          <button className="free-btn ml-8 h-[66px] w-[197px]">Try For Free</button>
        </div>
      </div>
      <div className="flex h-full px-6 items-center justify-between lg:hidden">
        <Image src="/logo.png" width="44" height="28" />
        <Image src="/menu.png" width="17" height="17" />
      </div>
      <div className="fixed top-0 right-0 bottom-0 left-0 backdrop-blur-sm z-10">
        <ul className="absolute top-0 right-0 bottom-0 w-10/12 bg-white drop-shadow-2xl">
          <li className="border-b border-slate-100">
            <Link href="#">
              <a className="block p-4">Features</a>
            </Link>
          </li>
          <li className="border-b border-slate-50">
            <Link href="#">
              <a className="block p-4">Features</a>
            </Link>
          </li>
          <li className="border-b border-slate-100">
            <Link href="#">
              <a className="block p-4">Features</a>
            </Link>
          </li>
        </ul>
        <button
          className="absolute top-2 right-0 bottom-0 left-2 w-[30px] h-[20px]"
          onClick={() => setToggleNavbar(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
