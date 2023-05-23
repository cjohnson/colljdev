import React from 'react';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IconLabel({ icon, infoText, width = 24, height = 24 }) {
  return (
    <div className="information-list-text flex flex-row space-x-2">
      <FontAwesomeIcon icon={icon} width={width} height={height} />
      <p className="text-md">{infoText}</p>
    </div>
  );
}