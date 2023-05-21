import HomeHero from '../components/app/HomeHero';
import Resume from '../components/app/Resume';

export default function Home() {
  return (
    <>
      <HomeHero />
      <Resume />
      <Footer />
    </>
  )
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