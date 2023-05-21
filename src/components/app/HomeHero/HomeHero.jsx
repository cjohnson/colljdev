import React from 'react';
import Image from 'next/image';

import { BriefInformationListText, BriefInformationListLink } from '@/components/app/BriefInformationListItems';
import briefInformationList from '@/data/briefInformation.json';

export default function HomeHero() {
  return (
    <section className="home-hero bg-white dark:bg-gray-900">
      <div className="home-hero-content grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="home-hero-main-content mr-auto place-self-start lg:col-span-7 md:pl-6">
          <HomeHeroText />
          <HomeHeroBriefInformationList />
        </div>
        <HomeHeroImage />
      </div>
    </section>
  );
}

function HomeHeroText() {
  return (
    <>
      <h1 className="home-hero-title max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
        Pursuing a career in Software Engineering.
      </h1>
      <p className="home-hero-subtitle max-w-2xl mb-6 font-medium text-gray-500 lg:mb-6 md:text-lg lg:text-xl dark:text-gray-400">
        Collin Johnson is pursuing a degree in Computer Science and Engineering (CSE) at the University of Michigan College of Engineering.
        He is a Software Development Trainee intern at AdvantageCS.
      </p>
    </>
  );
}

function HomeHeroBriefInformationList() {
  const infoText = briefInformationList.text.map(
    text => <BriefInformationListText
      key={text.infoText}
      svg={text.svg}
      alt={text.alt}
      infoText={text.content} />
  );

  const infoLinks = briefInformationList.links.map(
    link => <BriefInformationListLink
      key={link.callToAction}
      href={link.href}
      svg={link.svg}
      alt={link.alt}
      callToAction={link.callToAction} />
  );

  return (
    <div className="home-hero-brief-information flex flex-col space-y-3 md:space-y-5 items-start">
      {infoText}
      {infoLinks}
    </div>
  );
}

function HomeHeroImage() {
  return (
    <div className="home-hero-image hidden lg:mt-0 lg:col-span-5 lg:flex">
      <Image src="/mugs/mug-homepage.jpg" width={400} height={600} alt="Collin Johnson" />
    </div>
  );
}