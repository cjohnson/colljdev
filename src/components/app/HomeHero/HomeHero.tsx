import React from 'react';

import Image from 'next/image';

import IconLabel from './IconLabel';
import IconLink from './IconLink';

import ThemeSwitcher from '@/components/app/ThemeSwitcher';
import getData from '@/data/app/homeHeroData';

export default function HomeHero(): JSX.Element {
  const data = getData();

  const iconLabels = data.iconInfo.labels.map(
    (text, index) => <IconLabel
      key={index}
      icon={text.icon}
      infoText={text.content} />
  );

  const iconLinks = data.iconInfo.links.map(
    (link, index) => <IconLink
      key={index}
      href={link.href}
      icon={link.icon}
      callToAction={link.callToAction} />
  );

  return (
    <>
      <section className='theme-switcher bg-white dark:bg-gray-900'>
        <ThemeSwitcher />
      </section>
      <section className="home-hero bg-white dark:bg-gray-900">
        <div className="home-hero-content grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="home-hero-main-content mr-auto place-self-start lg:col-span-7 md:pl-6">
            <h1 className="home-hero-title max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              {data.title}
            </h1>
            <p className="home-hero-description max-w-2xl mb-6 font-medium text-gray-500 lg:mb-6 md:text-lg lg:text-xl dark:text-gray-400">
              {data.description}
            </p>
            <div className='home-hero-image-mobile lg:hidden mb-6'>
              <Image className="rounded-full" src={data.imageMobile.src} width={100} height={100} alt={data.imageMobile.alt} priority={true} />
            </div>
            <div className="home-hero-brief-information flex flex-col space-y-3 md:space-y-5 items-start">
              {iconLabels}
              {iconLinks}
            </div>
          </div>
          <div className="home-hero-image hidden lg:mt-0 lg:col-span-5 lg:flex pointer-events-none select-none">
            <Image className="rounded-lg" src={data.image.src} width={400} height={600} alt={data.image.alt} priority={true} />
          </div>
        </div>
      </section>
    </>
  );
}