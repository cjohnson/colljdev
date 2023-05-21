import Image from "next/image";

import { BriefInformationListText, BriefInformationListLink } from "../components/app/BriefInformationListItems";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ResumeSection />
    </>
  )
}

function ResumeSectionTitle({ title }) {
  return (
    <div className="resume-section-title pb-5">
      <h1 className="text-2xl lg:text-3xl">{title}</h1>
    </div>
  );
}

function ResumeFeature({ position, relation, organization, timePeriod, description }) {
  return (
    <li className="resume-feature mb-10 ml-4">
      <div className="vertical-timeline-point absolute w-3 lg:w-4 h-3 lg:h-4 bg-gray-300 rounded-full mt-1.5 lg:mt-2 -left-2 lg:-left-2.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <h2 className="resume-feature-title sm:text-2xl lg:text-2xl tracking-tight font-regular text-gray-900 dark:text-white">
        <span className="font-bold">{position}</span> {relation} <span className="font-bold">{organization}</span>
      </h2>
      <h3 className="resume-feature-time-period mb-2 tracking-tight font-light text-gray-500 dark:text-white">{timePeriod}</h3>
      {description !== null && <p className="resume-feature-description font-normal text-gray-500 dark:text-white">{description}</p>}
    </li>
  );
}

function ResumeSection() {
  return (
    <>
      <section className="resume bg-white dark:bg-gray-900">
        <div className="resume-section-container py-2 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6">
          <div className="resume-section max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <ResumeSectionTitle title="Education" />
            <ol className="resume-features ml-3 relative border-l-2 border-gray-300 dark:border-gray-700">
              <ResumeFeature 
                organization="The University of Michigan College of Engineering" 
                timePeriod="August 2022 - Present (Expected Graduation December 2025)"
                description="Pursuing a Bachelor of Science in Engineering in Computer Science and Engineering." />
              <ResumeFeature 
                organization="Dexter High School"
                timePeriod="September 2018 - June 2022" />
              <ResumeFeature 
                organization="Washtenaw Community College" 
                timePeriod="June 2021 - June 2022 (Dual-enrollment with High School)" />
            </ol>
          </div>
        </div>
        <div className="resume-section-container py-2 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6">
          <div className="resume-section max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <ResumeSectionTitle title="Work Experience" />
            <ol className="resume-features ml-3 relative border-l-2 border-gray-300 dark:border-gray-700">
              <ResumeFeature
                position="Software Development Trainee"
                relation="at"
                organization="AdvantageCS"
                timePeriod="May 2023 - Present" />
              <ResumeFeature
                position="Help Desk Support Specialist"
                relation="at"
                organization="ICPSR"
                timePeriod="June 2022 - April 2023"
                description="Started as a technical support specialist helping professors use the lecture hall technology effectively. 
                  Quickly transitioned from tech support to software development, developing a dedicated full-stack solution to 
                  analyze the program’s registration data using a MySQL database, Node.js backend, and a Vue.js frontend, which 
                  was eventually re-written in React.js." />
            </ol>
          </div>
        </div>
        <div className="resume-section-container py-2 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6">
          <div className="resume-section max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <ResumeSectionTitle title="School Projects and Activities" />
            <ol className="resume-features ml-3 relative border-l-2 border-gray-300 dark:border-gray-700">
              <ResumeFeature
                position="Team Member"
                relation="on"
                organization="DTDC (Michigan Engineering 100 Team)"
                timePeriod="August 2022 - December 2022"
                description="Proposed and presented a  project involving autonomous quadcopter drones. Used Python and Git 
                  collaboratively to deliver a marketable product." />
              <ResumeFeature
                position="Trombone Marcher"
                relation="in the"
                organization="Michigan Marching Band"
                timePeriod="August 2022 - Present" />
              <ResumeFeature
                position="Programming Student Lead"
                relation="on"
                organization="Dreadbots (FRC 3656)"
                timePeriod="June 2021 - June 2022" />
              <ResumeFeature
                position="Programmer"
                relation="on"
                organization="Dreadbots (FRC 3656)"
                timePeriod="September 2018 - June 2022" />
              <ResumeFeature
                position="Primary Robot Driver"
                relation="on"
                organization="Dreadbots (FRC 3656)"
                timePeriod="February 2022 - June 2022" />
              <ResumeFeature
                position="Strategy/Scouting Student Lead"
                relation="on"
                organization="Dreadbots (FRC 3656)"
                timePeriod="June 2019 - June 2021" />
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}

function HomeHero() {
  return (
    <section className="home-hero bg-white dark:bg-gray-900">
      <div className="home-hero-content grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="home-hero-main-content mr-auto place-self-center lg:col-span-7 md:pl-6">
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
  return (
    <div className="home-hero-brief-information flex flex-col space-y-3 md:space-y-5 items-start">
      <BriefInformationListText
        svg="icons/location-sharp.svg"
        alt="Location icon"
        infoText="Ann Arbor, Michigan" />
      <BriefInformationListText
        svg="icons/school-sharp.svg"
        alt="School icon"
        infoText="University of Michigan" />
      <BriefInformationListLink 
        href="https://linkedin.com/in/collj/"
        svg="socials/logo-linkedin.svg"
        alt="LinkedIn logo"
        callToAction="Connect on LinkedIn" />
      <BriefInformationListLink
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