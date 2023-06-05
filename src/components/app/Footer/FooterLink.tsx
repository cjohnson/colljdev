import React from 'react';

interface FooterLinkProps {
  text: string,
  href: string,
}

const FooterLink: React.FC<FooterLinkProps> = ({ text, href }) => {
  return (
    <li className="page-footer-link">
      <a target="_blank" href={href} className="mr-4 md:mr-6 ">{text}</a>
    </li>
  );
}

export default FooterLink;