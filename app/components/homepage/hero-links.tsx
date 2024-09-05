import Image from "next/image";
import React from "react";

import hammer from "@/app/assets/icons/hammer.svg";
import handDeposit from "@/app/assets/icons/hand-deposit.svg";
import chatCircle from "@/app/assets/icons/chat-circle.svg";

const heroLinks = [
  {
    title: "Reparatie melden",
    icon: hammer,
  },
  {
    title: "Huur betalen",
    icon: handDeposit,
  },
  {
    title: "Contact",
    icon: chatCircle,
  },
];

function HeroLinks() {
  return (
    <div className='space-y-4 mx-auto'>
      <h2 className='text-white font-medium text-2xl'>
        Waarmee kunnen we je helpen?
      </h2>
      <div className='flex items-center flex-wrap gap-x-4 gap-y-2'>
        {heroLinks.map((link) => (
          <button
            type='button'
            key={link.title}
            className='bg-white md:w-60 rounded-lg py-3 px-3 shadow-md'>
            <div className='flex items-center space-x-2'>
              <Image src={link.icon} alt={link.title} width={25} height={25} />
              <div>
                <h3>{link.title}</h3>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default HeroLinks;
