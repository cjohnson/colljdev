import Image from "next/image";

import { BriefInformationListText, BriefInformationListLink } from "../components/app/BriefInformationListItems";

import briefInformationList from "../data/briefInformation.json";
import resumeData from "../data/resume.json";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Resume />
    </>
  )
}

function ResumeSectionTitle({ title }) {
  return (
    <div className="resume-section-title pb-5">
      <h1 className="text-2xl lg:text-3xl lg:text-gray-700">{title}</h1>
    </div>
  );
}

function ResumeFeature({ position, relation, organization, timePeriod, description }) {
  return (
    <li className="resume-feature mb-10 ml-4">
      <div className="vertical-timeline-point absolute w-3 lg:w-4 h-3 lg:h-4 bg-gray-300 rounded-full mt-1.5 lg:mt-2 -left-[6.57px] lg:-left-[8.88px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <h2 className="resume-feature-title sm:text-2xl lg:text-2xl tracking-tight font-regular text-gray-900 dark:text-white">
        <span className="font-bold">{position}</span> {relation} <span className="font-bold">{organization}</span>
      </h2>
      <h3 className="resume-feature-time-period mb-2 tracking-tight font-light text-gray-500 dark:text-white">{timePeriod}</h3>
      {description !== null && <p className="resume-feature-description font-normal text-gray-500 dark:text-white">{description}</p>}
    </li>
  );
}

function ResumeSection({ title, features }) {
  let featuresList = features.map(
    feature => <ResumeFeature
      key={feature.position}
      position={feature.position}
      relation={feature.relation}
      organization={feature.organization}
      timePeriod={feature.timePeriod}
      description={feature.description} />
  );

  return (
    <div className="resume-section-container py-2 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6">
      <div className="resume-section max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <ResumeSectionTitle title={title} />
        <ol className="resume-features ml-3 relative border-l-2 border-gray-300 dark:border-gray-700">
          {featuresList}
        </ol>
      </div>
    </div>
  );
}

function Resume() {
  let sections = resumeData.sections.map(
    section => <ResumeSection
      key={section.title}
      title={section.title} 
      features={section.features} />
  );

  return (
    <>
      <section className="resume bg-white dark:bg-gray-900">
        {sections}
      </section>
    </>
  );
}

function HomeHero() {
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
  let infoText = briefInformationList.text.map(
    text => <BriefInformationListText
      key={text.infoText}
      svg={text.svg}
      alt={text.alt}
      infoText={text.content} />
  );

  let infoLinks = briefInformationList.links.map(
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
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <Image src="/mugs/mug-homepage.jpg" width={400} height={600} alt="Collin Johnson" />
    </div>
  );
}