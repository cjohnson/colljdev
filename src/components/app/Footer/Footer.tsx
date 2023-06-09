import React from 'react';

import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

import FooterLink from './FooterLink';
import FooterIconLink from './FooterIconLink';

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="page-footer w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="page-footer-main-content text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Collin Johnson 2023 - This page is Open Source.
        </span>
        <ul className="page-footer-links flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <FooterLink text="Source Code" href="https://github.com/cjohnson/colljdev/" />
          <FooterLink text="Github" href="https://github.com/cjohnson/" />
          <FooterLink text="LinkedIn" href="https://linkedin.com/in/collj/" />
          <FooterIconLink
            href="https://github.com/cjohnson/colljdev/releases/tag/v1.3.0/"
            icon={faCodeBranch}
            callToAction="v1.3.0" />
        </ul>
      </div>
    </footer>
  );
}