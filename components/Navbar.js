import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="h-[43px] lg:h-[111px] navbar-shadow z-20 relative">
      <div className="hidden lg:flex h-full items-center justify-between px-10 max-w-[1800px] m-auto">
        <div className="flex items-center gap-6">
          <Image src="/logo.png" width="112" height="76" />
          <Link href="/#">
            <a className="">Features</a>
          </Link>
          <Link href="/#">Beauty Products</Link>
          <Link href="/#">Pricing</Link>
          <Link href="/#">About</Link>
          <Link href="/#">Careers</Link>
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
    </div>
  );
}

export default Navbar;
