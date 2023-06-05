import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface FooterIconLinkProps {
  href: string,
  icon: IconProp,
  callToAction: string,
  width: number,
  height: number,
}

const FooterIconLink: React.FC<FooterIconLinkProps> = ({ href, icon, callToAction, width = 12, height = 12 }) => {
  return (
    <a className='page-footer-icon-link' target="_blank" href={href}>
      <div className='flex flex-row space-x-1 place-items-center'>
        <FontAwesomeIcon icon={icon} width={width} height={height} />
        <p>{callToAction}</p>
      </div>
    </a>
  );
}

export default FooterIconLink;