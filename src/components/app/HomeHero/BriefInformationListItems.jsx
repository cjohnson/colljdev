import React from 'react';

import Image from 'next/image';

export const IconLabel = ({ svg, alt, infoText, width = 24, height = 24 }) => (
  <div className="information-list-text flex flex-row space-x-2">
    <Image src={svg} width={width} height={height} alt={alt} />
    <p className="text-md">{infoText}</p>
  </div>
);

export const IconLink = ({ href, svg, alt, callToAction, width = 24, height = 24 }) => (
  <a key={callToAction} className="information-list-link" target="_blank" href={href}>
    <div className="information-list-link-content flex flex-row space-x-2">
      <Image src={svg} width={width} height={height} alt={alt} />
      <p className="text-md font-semibold text-blue-600 lg:text-blue-800">{callToAction}</p>
    </div>
  </a>
);
