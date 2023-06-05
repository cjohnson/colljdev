import { useContext } from 'react';

import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import { ThemeContext, Themes } from './ThemeProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ThemeSwitcher() {
  const theme = useContext(ThemeContext);

  return <div className='grid w-full justify-items-end p-1'>
    <div className='pointer-events-auto items-center p-1 text-sm font-medium leading-6 text-slate-700'>
      <a href='#' onClick={theme.swapTheme} className='flex rounded-[10px] p-1 pr-4'>
        <div className='flex mt-[1px] h-6 w-6 flex-none items-center justify-center rounded-md'>
          <FontAwesomeIcon icon={theme.theme === Themes.LightTheme ? faSun : faMoon} className={theme.iconStyle} />
        </div>
        <div className='ml-1 dark:text-white'>{theme.theme === Themes.LightTheme ? 'Light' : 'Dark'}</div>
      </a>
    </div>
  </div>;
}