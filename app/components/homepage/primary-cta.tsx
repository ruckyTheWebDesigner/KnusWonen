import Link from "next/link";
import primarycta from "@/app/assets/images/primary-cta.png";
import Image from "next/image";
import { overlock } from "@/app/fonts/fonts";

function PrimaryCTA() {
  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-8 container mx-auto lg:px-10 px-4 py-12 md:py-20'>
        <div className='relative h-72 md:h-96'>
          <svg
            className='absolute top-[-30px] left-[-10px] md:left-[-30px] z-0'
            width='269'
            height='271'
            viewBox='0 0 269 271'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              style={{
                mixBlendMode: "multiply",
                overflow: "hidden", // prevents overflow
              }}
              d='M8.22408 84.7961C-6.61283 125.694 -0.457604 174.798 35.4628 197.117C71.3833 219.435 89.0631 237.698 104.647 250.25C120.23 262.802 169.488 287.515 211.587 254.576C253.686 221.636 309.034 151.146 223.888 51.7402C137.115 -49.5619 28.6715 20.4372 8.22408 84.7961Z'
              fill='url(#paint0_linear_13_416)'
              fillOpacity='0.8'
            />
            <defs>
              <linearGradient
                id='paint0_linear_13_416'
                x1='90.254'
                y1='237.919'
                x2='169.737'
                y2='9.54206'
                gradientUnits='userSpaceOnUse'>
                <stop stopColor='#35BCE7' />
                <stop offset='1' stopColor='#BFE27D' />
              </linearGradient>
            </defs>
          </svg>

          <Image
            src={primarycta}
            fill
            alt='Image showing a city view'
            className='rounded-lg z-10'
          />
        </div>
        <div className='flex flex-col gap-y-4 max-w-lg'>
          <h2
            className={`text-2xl text-light-blue font-bold ${overlock.className}`}>
            We verbeteren onze woningen
          </h2>
          <div className='space-y-2'>
            <p className='text-base font-normal'>
              Bij KnusWonen zetten we ons in om onze woningen energiezuiniger en
              duurzamer te maken. We verbeteren de isolatie met dubbelglas en
              plaatsen moderne cv-ketels en zonnepanelen. Hierdoor stijgt het
              wooncomfort, dalen de energiekosten, en verminderen we de
              CO2-uitstoot. Ons doel is dat al onze huurders kunnen genieten van
              een warme, veilige en toekomstbestendige woning.
            </p>
            <p>Wilt u meer weten over onze energiebesparende maatregelen?</p>
          </div>
          <Link href={"/#"} className=''>
            <button
              type='button'
              className='rounded-lg px-6 py-2 text-white w-40 bg-primary-cta-gradient'>
              Lees meer
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PrimaryCTA;
