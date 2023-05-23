import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

import FooterLink from './FooterLink';

export default function Footer() {
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
          <FooterIconLink
            href="https://github.com/cjohnson/colljdev/releases/tag/v1.2.0/"
            icon={faCodeBranch}
            callToAction="v1.2.0" />
        </ul>
      </div>
    </footer>
  );
}

function FooterIconLink({ href, icon, callToAction, width = 12, height = 12 }) {
  return (
    <a target="_blank" href={href}>
      <div className='flex flex-row space-x-1 place-items-center'>
        <div className='place-items-center'>
          <FontAwesomeIcon icon={icon} width={width} height={height} />
        </div>
        <p>{callToAction}</p>
      </div>
    </a>
  );
}