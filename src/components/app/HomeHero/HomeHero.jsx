import React from 'react';
import Image from 'next/image';

import HomeHeroIconInfo from './HomeHeroIconInfo';

import data from '@/data/app/homeHeroData';

export default function HomeHero() {
  return (
    <section className="home-hero bg-white dark:bg-gray-900">
      <div className="home-hero-content grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="home-hero-main-content mr-auto place-self-start lg:col-span-7 md:pl-6">
          <h1 className="home-hero-title max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            {data.title}
          </h1>
          <p className="home-hero-description max-w-2xl mb-6 font-medium text-gray-500 lg:mb-6 md:text-lg lg:text-xl dark:text-gray-400">
            {data.description}
          </p>
          <HomeHeroIconInfo data={data.iconInfo} />
        </div>
        <div className="home-hero-image hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image src={data.image.src} width={400} height={600} alt={data.image.alt} priority={true} />
        </div>
      </div>
    </section>
  );
}