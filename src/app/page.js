import Image from "next/image";

import { InformationListItem, InformationListItemLink } from "../components/app/HomeHeadingBriefInformation";

export default function Home() {
  return (
    <>
      <HomeHero />
    </>
  )
}

function HomeHero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 md:pl-6">
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
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
        Pursuing a career in Software Engineering.
      </h1>
      <p className="max-w-2xl mb-6 font-medium text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        Collin Johnson is pursuing a degree in Computer Science and Engineering (CSE) at the University of Michigan. 
        He is working an internship at AdvantageCS.
      </p>
    </>
  );
}

function HomeHeroBriefInformationList() {
  return (
    <div className="flex flex-col space-y-3 md:space-y-5 items-start">
      <InformationListItem
        svg="icons/location-sharp.svg"
        alt="Location icon"
        infoText="Ann Arbor, Michigan" />
      <InformationListItem
        svg="icons/school-sharp.svg"
        alt="School icon"
        infoText="University of Michigan" />
      <InformationListItemLink 
        href="https://linkedin.com/in/collj/"
        svg="socials/logo-linkedin.svg"
        alt="LinkedIn logo"
        callToAction="Connect on LinkedIn" />
      <InformationListItemLink
        href="https://github.com/cjohnson/"
        svg="socials/logo-github.svg"
        alt="Github logo"
        callToAction="Follow on Github" />
    </div>
  );
}

function HomeHeroImage() {
  return (
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <Image src="/mugs/mug-homepage.jpg" width={400} height={600} alt="Collin Johnson" />
    </div>
  );
}