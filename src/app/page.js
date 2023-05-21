import resumeData from '../data/resume.json';

import HomeHero from '../components/app/HomeHero';

export default function Home() {
  return (
    <>
      <HomeHero />
      <Resume />
      <Footer />
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
    <li key={position} className="resume-feature mb-10 ml-4">
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
  const featuresList = features.map(
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
  const sections = resumeData.sections.map(
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

function FooterLink({ text, href }) {
  return (
    <li className="page-footer-link">
      <a target="_blank" href={href} className="mr-4 hover:underline md:mr-6 ">{text}</a>
    </li>
  );
}

function Footer() {
  return (
    <footer className="bg-white rounded-lg dark:bg-gray-800">
      <div className="page-footer w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="page-footer-main-content text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Collin Johnson 2023 - This page is Open Source.
        </span>
        <ul className="page-footer-links flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <FooterLink text="Source Code" href="https://github.com/cjohnson/colljdev/" />
          <FooterLink text="Github" href="https://github.com/cjohnson/" />
          <FooterLink text="LinkedIn" href="https://linkedin.com/in/collj/" />
        </ul>
      </div>
    </footer>
  );
}