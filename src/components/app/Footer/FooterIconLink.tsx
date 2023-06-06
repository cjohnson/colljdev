import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IFooterIconLinkProps {
  href: string,
  icon: IconProp,
  callToAction: string,
  width?: number,
  height?: number,
}
const defaultProps: IFooterIconLinkProps = {
  href: '',
  icon: 'function',
  callToAction: '',
  width: 12,
  height: 12,
}

const FooterIconLink: React.FC<IFooterIconLinkProps> = ({ href, icon, callToAction, width, height }) => {
  return (
    <a className='page-footer-icon-link' target="_blank" href={href}>
      <div className='flex flex-row space-x-1 place-items-center'>
        <FontAwesomeIcon icon={icon} width={width} height={height} />
        <p>{callToAction}</p>
      </div>
    </a>
  );
}
FooterIconLink.defaultProps = defaultProps;

export default FooterIconLink;