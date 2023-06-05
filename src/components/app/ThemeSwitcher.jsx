import { useContext } from 'react';

import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import { ThemeContext, Themes } from './ThemeProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ThemeSwitcher() {
  const theme = useContext(ThemeContext);

  return <div className='grid w-full justify-items-end p-1'>
    <div className='pointer-events-auto w-36 space-y-1 rounded-lg p-1 text-[0.8125rem] font-medium leading-6 text-slate-700 shadow-xl shadow-black/5 ring-1 ring-slate-700/10'>
      <a href='#' onClick={theme.swapTheme} className='flex rounded-[10px] p-1'>
        <div className='flex h-6 w-6 flex-none items-center justify-center rounded-md shadow ring-1 ring-slate-900/10'>
          <FontAwesomeIcon icon={theme.theme === Themes.LightTheme ? faSun : faMoon} className={theme.iconStyle} />
        </div>
        <div className='ml-3 dark:text-white'>{theme.theme === Themes.LightTheme ? 'Light' : 'Dark'}</div>
      </a>
    </div>
  </div>;
}