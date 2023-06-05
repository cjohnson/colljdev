import { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ThemeContext } from '../ThemeProvider';

export default function IconLabel({ icon, infoText, width = 24, height = 24 }) {
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