import Image from "next/image";

function HomeHeading() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7 md:pl-6">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Pursuing a career in Software Engineering.
            </h1>
            <p className="max-w-2xl mb-6 font-medium text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Collin Johnson is pursuing a degree in Computer Science and Engineering (CSE) at the University of Michigan. He is working an internship at AdvantageCS.
            </p>
            <div className="flex flex-col space-y-3 items-start">
              <a target="_blank" href="https://linkedin.com/in/collj/">
                <div className="flex flex-row space-x-2">
                  <Image src="socials/logo-linkedin.svg" width="24" height="24" alt="LinkedIn logo" />
                  <p className="text-md">Connect on LinkedIn</p>
                </div>
              </a>
              <a target="_blank" href="https://github.com/cjohnson/">
                <div className="flex flex-row space-x-2">
                  <Image src="socials/logo-github.svg" width="24" height="24" alt="Github logo" />
                  <p className="text-md">Follow on Github</p>
                </div>
              </a>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image src="/mugs/mug-homepage.jpg" width={200 * 2} height={300 * 2} alt="Collin Johnson" />
          </div>
        </div>
      </section>
    </>
  );
}

export default function Home() {
  return (
    <>
      <HomeHeading />
    </>
  )
}
