import React from 'react';
import { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { ThemeContext } from '../ThemeProvider';

export interface IconLabelProps {
  icon: IconProp,
  infoText: string,
  width?: number,
  height?: number,
}

const IconLabel: React.FC<IconLabelProps> = (props: IconLabelProps) => {
  const { icon, infoText, width = 24, height = 24 } = props;

  const theme = useContext(ThemeContext);

  return (
    <div className="information-list-text flex flex-row space-x-2">
      <div className='items-center'>
        <FontAwesomeIcon icon={icon} width={width} height={height} className={theme.iconStyle} />
      </div>
      <p className="text-md dark:text-gray-300">{infoText}</p>
    </div>
  );
}

export default IconLabel;