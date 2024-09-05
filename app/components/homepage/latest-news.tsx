import React from "react";
import telephoneimg from "@/app/assets/images/telephone.png";
import temometerimg from "@/app/assets/images/themometer.png";
import modernbuildingimg from "@/app/assets/images/modern-building.png";
import Image from "next/image";
import { overlock } from "@/app/fonts/fonts";

const news = [
  {
    title: "Woningen op de markt",
    date: "20 maart 2023",
    description: "Onze huurders zijn op de markt voor een nieuwe huis!",
    image: telephoneimg,
  },
  {
    title: "Woningen op de markt",
    date: "20 maart 2023",
    description: "Onze huurders zijn op de markt voor een nieuwe huis!",
    image: temometerimg,
  },
  {
    title: "Woningen op de markt",
    date: "20 maart 2023",
    description: "Onze huurders zijn op de markt voor een nieuwe huis!",
    image: modernbuildingimg,
  },
];

function LatestNews() {
  return (
    <section className='bg-light-purple py-8 lg:py-12'>
      <div className='container mx-auto space-y-6 px-4 lg:px-10'>
        <h2
          className={`text-[#39468C] text-2xl font-bold ${overlock.className}`}>
          Laatste nieuws
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-x-6'>
          {news.map((news) => (
            <div key={news.title} className=' gap-y-4 '>
              <Image src={news.image} className='w-full' alt={news.title} />
              <div className='flex flex-col gap-y-2 p-4 rounded-b-xl bg-white'>
                <p className='text-xs font-semibold'>{news.date}</p>
                <h3 className={`text-xl font-bold ${overlock.className}`}>
                  {news.title}
                </h3>
                <p className='text-sm font-normal truncate overflow-hidden'>
                  {news.description}
                </p>
                <button type='button' className='flex items-center'>
                  Lees meer
                  <svg
                    width='16'
                    className='ml-2'
                    height='17'
                    viewBox='0 0 16 17'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      opacity='0.2'
                      d='M13.5 8.5L9 13V4L13.5 8.5Z'
                      fill='#FF6B38'
                    />
                    <path
                      d='M13.8538 8.14628L9.35375 3.64628C9.28382 3.57627 9.1947 3.52859 9.09765 3.50926C9.00061 3.48994 8.90002 3.49984 8.80861 3.53772C8.71719 3.57559 8.63908 3.63974 8.58414 3.72204C8.5292 3.80433 8.49992 3.90108 8.5 4.00003V8.00003H2.5C2.36739 8.00003 2.24021 8.05271 2.14645 8.14647C2.05268 8.24024 2 8.36742 2 8.50003C2 8.63264 2.05268 8.75981 2.14645 8.85358C2.24021 8.94735 2.36739 9.00003 2.5 9.00003H8.5V13C8.49992 13.099 8.5292 13.1957 8.58414 13.278C8.63908 13.3603 8.71719 13.4245 8.80861 13.4623C8.90002 13.5002 9.00061 13.5101 9.09765 13.4908C9.1947 13.4715 9.28382 13.4238 9.35375 13.3538L13.8538 8.85378C13.9002 8.80734 13.9371 8.7522 13.9623 8.6915C13.9874 8.6308 14.0004 8.56574 14.0004 8.50003C14.0004 8.43432 13.9874 8.36926 13.9623 8.30856C13.9371 8.24786 13.9002 8.19271 13.8538 8.14628ZM9.5 11.7932V5.2069L12.7931 8.50003L9.5 11.7932Z'
                      fill='#FF6B38'
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className='flex justify-end'>
          <button type='button' className='flex items-center'>
            Bekijk alle nieuwsberichten
            <svg
              width='16'
              className='ml-2'
              height='17'
              viewBox='0 0 16 17'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                opacity='0.2'
                d='M13.5 8.5L9 13V4L13.5 8.5Z'
                fill='#FF6B38'
              />
              <path
                d='M13.8538 8.14628L9.35375 3.64628C9.28382 3.57627 9.1947 3.52859 9.09765 3.50926C9.00061 3.48994 8.90002 3.49984 8.80861 3.53772C8.71719 3.57559 8.63908 3.63974 8.58414 3.72204C8.5292 3.80433 8.49992 3.90108 8.5 4.00003V8.00003H2.5C2.36739 8.00003 2.24021 8.05271 2.14645 8.14647C2.05268 8.24024 2 8.36742 2 8.50003C2 8.63264 2.05268 8.75981 2.14645 8.85358C2.24021 8.94735 2.36739 9.00003 2.5 9.00003H8.5V13C8.49992 13.099 8.5292 13.1957 8.58414 13.278C8.63908 13.3603 8.71719 13.4245 8.80861 13.4623C8.90002 13.5002 9.00061 13.5101 9.09765 13.4908C9.1947 13.4715 9.28382 13.4238 9.35375 13.3538L13.8538 8.85378C13.9002 8.80734 13.9371 8.7522 13.9623 8.6915C13.9874 8.6308 14.0004 8.56574 14.0004 8.50003C14.0004 8.43432 13.9874 8.36926 13.9623 8.30856C13.9371 8.24786 13.9002 8.19271 13.8538 8.14628ZM9.5 11.7932V5.2069L12.7931 8.50003L9.5 11.7932Z'
                fill='#FF6B38'
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default LatestNews;
