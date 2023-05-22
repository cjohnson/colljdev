import React from 'react';

import { BriefInformationListText, BriefInformationListLink } from '@/components/app/BriefInformationListItems';

export default function HomeHeroBriefInformationList({ infoData }) {
  const infoText = infoData.text.map(
    text => <BriefInformationListText
      key={text.infoText}
      svg={text.svg}
      alt={text.alt}
      infoText={text.content} />
  );

  const infoLinks = infoData.links.map(
    link => <BriefInformationListLink
      key={link.callToAction}
      href={link.href}
      svg={link.svg}
      alt={link.alt}
      callToAction={link.callToAction} />
  );

  return (
    <div className="home-hero-brief-information flex flex-col space-y-3 md:space-y-5 items-start">
      {infoText}
      {infoLinks}
    </div>
  );
}