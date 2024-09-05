import Image from "next/image";
import Link from "next/link";
import React from "react";

import secondaryctaimg from "@/app/assets/images/secondarycta.png";
import { overlock } from "@/app/fonts/fonts";

function SecondaryCTA() {
  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-8 container mx-auto  px-4 lg:px-10 py-12 md:py-20'>
        <div className='flex flex-col gap-y-4'>
          <h2
            className={`text-2xl text-[#FF6B38] font-bold  ${overlock.className}`}>
            Schrijf je in voor onze nieuwsbrief
          </h2>
          <div className='space-y-2'>
            <p>
              Wil je als eerste op de hoogte zijn van het laatste nieuws over
              jouw woning en buurt? Schrijf je dan in voor de nieuwsbrief van
              KnusWonen! Iedere maand sturen we je een update met belangrijk
              nieuws, praktische tips, en informatie over onderhoudsprojecten en
              buurtactiviteiten. Of je nu wilt weten wanneer er werkzaamheden
              gepland zijn, of je geïnteresseerd bent in nieuwe initiatieven in
              de wijk, onze nieuwsbrief zorgt ervoor dat je niets mist.
            </p>
            <p>Schrijf je vandaag nog in en blijf verbonden met KnusWonen!</p>
          </div>
          <Link href={"/#"}>
            <button
              type='button'
              className='rounded-lg px-6 py-2 text-white bg-secondary-cta-gradient w-32'>
              Inschrijven
            </button>
          </Link>
        </div>

        <div className='relative h-72 md:h-96'>
          <Image
            src={secondaryctaimg}
            alt='Primary CTA Image'
            fill
            className='z-10'
          />
          <svg
            className='absolute bottom-[-10px] right-[-5px] md:right-[-30px] z-0'
            width='148'
            height='165'
            viewBox='0 0 148 165'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              style={{
                mixBlendMode: "multiply",
              }}
              d='M31.7976 161.122C52.9105 166.869 75.1199 167.736 117.405 133.543C159.69 99.3504 149.049 40.5661 135.094 25.5269C121.139 10.4878 93.3852 -8.08987 51.0929 4.23196C8.80057 16.5538 13.1789 49.4144 14.8179 56.6872C16.457 63.96 16.8613 75.3784 6.8456 88.5936C-3.1701 101.809 -3.7416 149.766 31.7976 161.122Z'
              fill='url(#paint0_linear_13_430)'
              fillOpacity='0.8'
            />
            <defs>
              <linearGradient
                id='paint0_linear_13_430'
                x1='45.5232'
                y1='165.762'
                x2='100.321'
                y2='3.46001'
                gradientUnits='userSpaceOnUse'>
                <stop stopColor='#FFD201' />
                <stop offset='1' stopColor='#FF6B38' />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default SecondaryCTA;
