import React from 'react';

interface IFooterLinkProps {
  text: string,
  href: string,
}

export default function FooterLink(props: IFooterLinkProps): JSX.Element {
  const { text, href } = props;

  return (
    <li className="page-footer-link">
      <a target="_blank" href={href} className="mr-4 md:mr-6 ">{text}</a>
    </li>
  );
}