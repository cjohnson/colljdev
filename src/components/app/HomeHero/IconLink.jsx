'use client';

import { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ThemeContext } from '../ThemeProvider';

export default function IconLink({ href, icon, callToAction, width = 24, height = 24 }) {
  const theme = useContext(ThemeContext);

  return (
    <a className="information-list-link" target="_blank" href={href}>
      <div className="information-list-link-content flex flex-row space-x-2">
        <FontAwesomeIcon icon={icon} width={width} height={height} style={{ color: theme.iconTheme, }} />
        <p className="text-md font-semibold text-blue-600 dark:text-gray-200 lg:text-blue-800 dark:lg:text-gray-100">{callToAction}</p>
      </div>
    </a>
  );
}