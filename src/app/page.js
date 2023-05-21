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

function ResumeSection() {
  return (
    <>
      <section className="resume bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <div className="pb-5">
              <h1 className="text-3xl">Work Experience</h1>
            </div>
            <ol className="ml-3 relative border-l-2 border-gray-300 dark:border-gray-700">
              <li class="mb-10 ml-4">
                <div class="absolute w-3 lg:w-4 h-3 lg:h-4 bg-gray-300 rounded-full mt-1.5 lg:mt-2.5 -left-2 lg:-left-2.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <h2 className="sm:text-2xl lg:text-3xl tracking-tight font-regular text-gray-900 dark:text-white">
                  <span className="font-bold">Software Development Trainee</span> at <span className="font-bold">AdvantageCS</span>
                </h2>
                <h3 className="mb-2 text-md tracking-tight font-light text-gray-500 dark:text-white">
                  May 2023 - Present
                </h3>
              </li>
              <li class="mb-10 ml-4">
                <div class="absolute w-3 lg:w-4 h-3 lg:h-4 bg-gray-300 rounded-full mt-1.5 lg:mt-2.5 -left-2 lg:-left-2.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <h2 className="sm:text-2xl lg:text-3xl tracking-tight font-regular text-gray-900 dark:text-white">
                  <span className="font-bold">Help Desk Support Specialist</span> at <span className="font-bold">ICPSR</span>
                </h2>
                <h3 className="mb-2 text-md tracking-tight font-light text-gray-500 dark:text-white">
                  June 2022 - April 2023
                </h3>
                <p className="text-md font-normal">
                  Started as a technical support specialist helping professors use the lecture hall technology effectively. 
                  Quickly transitioned from tech support to software development, developing a dedicated full-stack solution to 
                  analyze the program’s registration data using a MySQL database, Node.js backend, and a Vue.js frontend, which 
                  was eventually re-written in React.js.
                </p>
              </li>
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