import React from 'react';
import { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ThemeContext } from '../ThemeProvider';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IconLinkProps {
  href: string,
  icon: IconProp,
  callToAction: string,
  width?: number,
  height?: number,
}

const IconLink: React.FC<IconLinkProps> = (props: IconLinkProps) => {
  const { href, icon, callToAction, width = 24, height = 24 } = props;

  const theme = useContext(ThemeContext);

  return (
    <a className="information-list-link" target="_blank" href={href}>
      <div className="information-list-link-content flex flex-row space-x-2">
        <div className='items-center'>
          <FontAwesomeIcon icon={icon} width={width} height={height} className={theme.iconStyle} />
        </div>
        <p className="text-md font-semibold text-blue-600 dark:text-gray-200 lg:text-blue-800 dark:lg:text-gray-100">{callToAction}</p>
      </div>
    </a>
  );
}

export default IconLink;