import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FooterIconLink({ href, icon, callToAction, width = 12, height = 12 }) {
  return (
    <a target="_blank" href={href}>
      <div className='flex flex-row space-x-1 place-items-center'>
        <FontAwesomeIcon icon={icon} width={width} height={height} />
        <p>{callToAction}</p>
      </div>
    </a>
  );
}