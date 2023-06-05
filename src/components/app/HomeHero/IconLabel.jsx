import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IconLabel({ themeContext, icon, infoText, width = 24, height = 24 }) {
  return (
    <div className="information-list-text flex flex-row space-x-2">
      <FontAwesomeIcon icon={icon} width={width} height={height} style={{ color: themeContext.iconTheme, }} />
      <p className="text-md dark:text-gray-300">{infoText}</p>
    </div>
  );
}