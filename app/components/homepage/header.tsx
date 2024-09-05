import Image from "next/image";
import React from "react";

import { SITE_NAME } from "@/app/utils/consts";
import logo from "@/app/assets/brand/logo.png";
import searchicon from "@/app/assets/icons/search.svg";
import profileicon from "@/app/assets/icons/profile.svg";
import Link from "next/link";

function Header() {
  return (
    <header className='bg-white sticky top-0 z-40'>
      <nav className='flex items-center justify-between container mx-auto px-4 lg:px-10 py-4 md:py-6'>
        <Link href={"/"}>
          <Image
            src={logo}
            alt={`${SITE_NAME} Logo`}
            width={150}
            height={100}
          />
        </Link>
        <ul className='hidden md:flex items-center space-x-6 text-[#39468C] text-base font-semibold'>
          <li>
            <a href='/#'>Ik huur</a>
          </li>
          <li>
            <a href='/#'>Ik zoek</a>
          </li>
          <li>
            <a href='/#'>Over ons</a>
          </li>
          <li>
            <a href='/#'>Projecten</a>
          </li>
        </ul>

        <ul className='flex items-center space-x-4'>
          <li>
            <button>
              <Image src={searchicon} alt='Search Icon' />
            </button>
          </li>
          <li>
            <button>
              <Image src={profileicon} alt='Profile Icon' />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
