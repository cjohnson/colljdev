import React from 'react';

import { IconLabel, IconLink } from './BriefInformationListItems';

export default function HomeHeroBriefInformation({ infoData }) {
  const iconLabels = infoData.text.map(
    text => <IconLabel
      key={text.infoText}
      svg={text.svg}
      alt={text.alt}
      infoText={text.content} />
  );

  const iconLinks = infoData.links.map(
    link => <IconLink
      key={link.callToAction}
      href={link.href}
      svg={link.svg}
      alt={link.alt}
      callToAction={link.callToAction} />
  );

  return (
    <div className="home-hero-brief-information flex flex-col space-y-3 md:space-y-5 items-start">
      {iconLabels}
      {iconLinks}
    </div>
  );
}