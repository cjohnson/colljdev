import React from 'react';

import Image from 'next/image';

export default function IconLabel({ svg, alt, infoText, width = 24, height = 24 }) {
  return (
    <div className="information-list-text flex flex-row space-x-2">
      <Image src={svg} width={width} height={height} alt={alt} />
      <p className="text-md">{infoText}</p>
    </div>
  );
}